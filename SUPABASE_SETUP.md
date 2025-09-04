# Guía de Configuración de Supabase para Producción

Para que la aplicación funcione completamente (autenticación, guardado de resultados, panel de administración), es crucial que configures correctamente tu proyecto en Supabase. El código del frontend está preparado para conectarse, pero necesita que el backend exista.

A continuación se detallan los pasos que **tú debes realizar** en tu panel de Supabase.

---

### Paso 1: Obtén tus Credenciales de API

Primero, necesitas conectar la aplicación a tu proyecto de Supabase.

1.  Ve a tu proyecto en [supabase.com](https://supabase.com).
2.  En el menú lateral, haz clic en el ícono de **Configuración del Proyecto** (rueda dentada).
3.  Selecciona la pestaña **API**.
4.  En esta sección, encontrarás dos valores clave:
    *   **Project URL**
    *   **Project API Keys** -> `anon` `public`
5.  Copia estos dos valores y pégalos en el archivo `constants.ts` de tu proyecto, reemplazando los valores de ejemplo:

    ```typescript
    // constants.ts

    // REEMPLAZA ESTO CON TUS CREDENCIALES
    export const SUPABASE_URL = 'https://<tu-id-de-proyecto>.supabase.co';
    export const SUPABASE_ANON_KEY = '<tu-clave-anon-public>';
    export const SUPABASE_ID = '<tu-id-de-proyecto>';
    ```

---

### Paso 2: Crea las Tablas en la Base de Datos

La aplicación necesita cuatro tablas para funcionar: `courses`, `profiles`, `quiz_attempts` y `assignment_submissions`.

1.  En tu panel de Supabase, ve al **Editor de SQL** (ícono de una base de datos con "SQL").
2.  Haz clic en **"New query"**.
3.  Copia y pega el siguiente código SQL completo en el editor y haz clic en **"RUN"**.

```sql
-- 1. Tabla para los Cursos
-- Almacena los diferentes cursos o cohortes, como "Bootcamp 2025-2026".
CREATE TABLE public.courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- 2. Tabla para Perfiles de Usuario
-- Se sincroniza con la tabla de autenticación de Supabase (auth.users).
-- Guardará información adicional del perfil, como el email.
CREATE TABLE public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text
);

-- 3. Tabla para los Intentos de Quiz
-- Almacena cada intento de quiz que realiza un usuario.
CREATE TABLE public.quiz_attempts (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  course_id uuid REFERENCES public.courses(id) ON DELETE CASCADE NOT NULL,
  quiz_id text NOT NULL,
  score integer NOT NULL,
  answers jsonb,
  created_at timestamptz DEFAULT now()
);

-- 4. Tabla para Entregas de Tareas Prácticas
-- Almacena el código enviado por los estudiantes para las tareas.
CREATE TABLE public.assignment_submissions (
    id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    assignment_id text NOT NULL,
    content text,
    created_at timestamptz DEFAULT now()
);


-- FUNCIÓN Y TRIGGER: Sincronización automática de perfiles
-- Esta función crea una entrada en `public.profiles` cada vez que
-- un nuevo usuario se registra en el sistema de autenticación.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email)
  VALUES (new.id, new.email);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- El trigger ejecuta la función anterior después de cada nuevo registro en `auth.users`.
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

---

### Paso 3: Habilita la Seguridad (Row Level Security - RLS)

Por defecto, nadie puede leer o escribir en tus tablas. Debemos crear reglas de seguridad (Políticas RLS) para permitir el acceso de forma controlada.

1.  En tu panel de Supabase, ve a **Authentication** (ícono de llave) -> **Policies**.
2.  Busca tus nuevas tablas (`courses`, `profiles`, `quiz_attempts`, `assignment_submissions`).
3.  Haz clic en **"Enable RLS"** para cada una de las cuatro tablas.
4.  Ahora, vuelve al **Editor de SQL** y ejecuta las siguientes consultas para crear las políticas de acceso:

```sql
-- POLÍTICAS PARA LA TABLA 'courses'
-- Permite que cualquier usuario autenticado pueda leer la lista de cursos.
CREATE POLICY "Allow authenticated read access to courses"
ON public.courses FOR SELECT
TO authenticated
USING (true);

-- POLÍTICAS PARA LA TABLA 'profiles'
-- Permite a un usuario leer su propio perfil.
CREATE POLICY "Allow individual user to read their own profile"
ON public.profiles FOR SELECT
TO authenticated
USING (auth.uid() = id);

-- POLÍTICAS PARA LA TABLA 'quiz_attempts'
-- Permite a un usuario crear (insertar) un intento de quiz para sí mismo.
CREATE POLICY "Allow user to create their own quiz attempts"
ON public.quiz_attempts FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Permite a un usuario leer sus propios intentos de quiz.
-- Para el panel de admin, todos los usuarios pueden leer todos los intentos.
-- En un caso de uso real, crearías un rol de 'admin' para restringir esto.
CREATE POLICY "Allow authenticated users to read all quiz attempts"
ON public.quiz_attempts FOR SELECT
TO authenticated
USING (true);

-- POLÍTICAS PARA LA TABLA 'assignment_submissions'
-- Permite a un usuario crear su propia entrega.
CREATE POLICY "Allow user to create their own assignment submission"
ON public.assignment_submissions FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Permite a un usuario leer su propia entrega.
CREATE POLICY "Allow user to read their own assignment submission"
ON public.assignment_submissions FOR SELECT
TO authenticated
USING (auth.uid() = user_id);
```

> **Nota de seguridad:** La política de `quiz_attempts` permite que cualquier usuario autenticado vea todos los resultados del quiz, lo cual es simple para este proyecto. En una aplicación de producción real, crearías un rol de "admin" y restringirías esta política solo a los usuarios con ese rol.

---

### Paso 4: Inserta el Curso de Demostración

El código de la aplicación asume que existe un curso con un ID específico para guardar los resultados. Debemos crearlo.

1.  En el **Editor de SQL**, ejecuta esta consulta:

```sql
-- Inserta el curso de demostración con el UUID específico que espera la app.
INSERT INTO public.courses (id, name)
VALUES ('e9e0755e-013d-4c3e-a83d-8a6526a0c444', 'Bootcamp 2025-2026');
```

---

¡Listo! Con estos 4 pasos completados, tu aplicación frontend estará completamente conectada y funcional con tu backend de Supabase. Los usuarios podrán registrarse, iniciar sesión, y sus resultados de los quizzes se guardarán y se mostrarán correctamente en el panel de administración.