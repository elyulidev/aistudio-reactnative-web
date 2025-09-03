import type { CurriculumTopic, CurriculumModule } from '../../types';

const objetivoGeneral: CurriculumTopic = {
    id: 'objetivo-general',
    title: 'Objetivo General',
    content: [
      { type: 'heading', text: 'Objetivo General del Bootcamp' },
      { type: 'paragraph', text: 'Capacitarte para construir aplicaciones móviles multiplataforma (Android, iOS y Web) utilizando React Native y Expo, con un enfoque en el desarrollo local y la persistencia de datos con SQLite y Drizzle ORM.' },
      { 
        type: 'image', 
        imageUrl: 'https://images.unsplash.com/photo-1607799279861-4d5ae1387c09?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Un ecosistema de desarrollo moderno para aplicaciones móviles.'
      },
    ]
};

const modules: CurriculumModule[] = [
    // Módulo 1
    {
        id: 'modulo-1',
        title: 'Módulo 1: Fundamentos',
        overview: {
            id: 'modulo-1-overview',
            title: 'Módulo 1: Fundamentos',
            content: [
              { type: 'heading', text: 'Módulo 1: Fundamentos de React Native y Configuración' },
              { type: 'paragraph', text: 'Duración: 16 horas / 8 Conferencias' },
              { type: 'paragraph', text: 'Este módulo sienta las bases para el desarrollo móvil, cubriendo la configuración del entorno y los componentes esenciales de la interfaz de usuario.' },
            ]
        },
        conferences: [
            {
                id: 'conf-1',
                title: 'Conf. 1: Introducción a RN y Expo',
                content: [
                  { type: 'heading', text: 'Introducción a React Native y Expo' },
                  { type: 'paragraph', text: 'Una comprensión sólida de React Native y Expo, cubriendo sus fundamentos, configuración del entorno, componentes básicos de UI y los conceptos esenciales de enrutamiento.' },
                  
                  { type: 'divider' },
                  
                  { type: 'subtitle', text: 'Parte 1: Descubriendo React Native' },
                  { type: 'paragraph', text: 'React Native es un framework que permite construir aplicaciones móviles nativas para iOS y Android desde una única base de código utilizando React.' },
                  { type: 'featureCard', featureItems: [
                    { icon: 'CodeBracketIcon', title: 'Código Único', text: 'Escribe el código una vez y despliégalo en iOS y Android, ahorrando tiempo y recursos.' },
                    { icon: 'UsersIcon', title: 'Gran Adopción', text: 'Utilizado por gigantes como Meta, Microsoft, Tesla, y Airbnb.' },
                    { icon: 'BoltIcon', title: 'Alto Rendimiento', text: 'La nueva arquitectura (JSI, Turbo Modules, Fabric) ofrece un rendimiento cercano al nativo.' },
                  ]},
                  
                  { type: 'callout', alertType: 'info', text: 'Aproximadamente el 75% del conocimiento de React para desarrollo web se traslada directamente al móvil.' },
                  
                  { type: 'subtitle', text: 'React Native vs. React Web' },
                  { type: 'image', imageUrl: 'https://storage.googleapis.com/aistudio-hosting/bootcamp-assets/react-native-vs-web.png', caption: 'Visualización conceptual de las diferencias de componentes entre React Web y React Native.' },
                  { type: 'twoColumn', columns: [
                    { title: 'Componentes', content: [
                      '<div> → <View>',
                      '<p>, <h1> → <Text>',
                      '<img> → <Image>',
                      '<input> → <TextInput>',
                    ]},
                    { title: 'Estilos y Eventos', content: [
                      'className → style={StyleSheet.create(...)}',
                      'CSS → NativeWind (Tailwind)',
                      'onClick → onPress',
                      'onMouseOver → onLongPress',
                    ]}
                  ]},
                  
                  { type: 'divider' },

                  { type: 'subtitle', text: 'Parte 2: Introducción a Expo' },
                  { type: 'paragraph', text: 'Expo es un framework y ecosistema de herramientas para React Native que simplifica enormemente el desarrollo, la revisión y el despliegue.' },
                  { type: 'image', imageUrl: 'https://storage.googleapis.com/aistudio-hosting/bootcamp-assets/expo-ecosystem.png', caption: 'El ecosistema de Expo: un conjunto de herramientas sobre React Native para agilizar el desarrollo.' },
                  { type: 'featureCard', featureItems: [
                    { icon: 'AcademicCapIcon', title: 'Recomendado Oficialmente', text: 'La documentación de React Native recomienda Expo como la mejor manera de empezar.' },
                    { icon: 'BoltIcon', title: 'Configuración Simple', text: 'No necesitas instalar Android Studio o Xcode para empezar a desarrollar.' },
                    { icon: 'DevicePhoneMobileIcon', title: 'Expo Go', text: 'Una app para probar tus desarrollos en tiempo real en tu dispositivo físico.' },
                    { icon: 'FolderIcon', title: 'Expo Router', text: 'Sistema de enrutamiento basado en archivos, similar a Next.js.' },
                  ]},

                  { type: 'divider' },

                  { type: 'subtitle', text: 'Parte 3: Configuración y Estructura' },
                   { type: 'paragraph', text: 'Comenzar un nuevo proyecto es tan simple como ejecutar un solo comando en tu terminal.' },
                  { type: 'code', language: 'bash', code: 'npx create-expo-app my-app' },
                  { type: 'paragraph', text: 'Luego, inícialo y escanea el QR con la app Expo Go en tu teléfono.' },
                  { type: 'code', language: 'bash', code: 'cd my-app\nnpx expo start' },
                  { type: 'image', imageUrl: 'https://storage.googleapis.com/aistudio-hosting/bootcamp-assets/expo-go-workflow.png', caption: 'Flujo de desarrollo con Expo Go: codifica, escanea el QR y visualiza tu app instantáneamente en tu dispositivo.' },
                  { type: 'callout', alertType: 'warning', text: 'Importante: Tu ordenador y tu dispositivo móvil deben estar conectados a la misma red Wi-Fi.' },

                  { type: 'divider' },

                  { type: 'subtitle', text: 'Parte 4: Componentes Core y Estilos' },
                  { type: 'paragraph', text: 'La UI se construye combinando componentes. Los más básicos son View para contenedores y Text para cualquier texto.' },
                   { type: 'featureCard', featureItems: [
                    { icon: 'RectangleGroupIcon', title: 'SafeAreaView', text: 'Esencial para asegurar que tu UI no se superponga con la barra de estado o las muescas del dispositivo.' },
                    { icon: 'CodeBracketIcon', title: 'StyleSheet.create', text: 'La forma recomendada de organizar y reutilizar estilos para un rendimiento óptimo.' },
                    { icon: 'ArrowRightIcon', title: 'FlatList', text: 'Componente de alto rendimiento para renderizar listas largas y dinámicas de datos.' },
                  ]},
                  { type: 'image', imageUrl: 'https://storage.googleapis.com/aistudio-hosting/bootcamp-assets/safe-area-view.png', caption: 'Comparación visual: Sin `SafeAreaView` (izquierda) el contenido es obstruido por los elementos del sistema, mientras que con `SafeAreaView` (derecha) se ajusta perfectamente al área visible.' },
                  
                  { type: 'divider' },

                  { type: 'subtitle', text: 'Parte 5: Enrutamiento con Expo Router' },
                  { type: 'paragraph', text: 'La navegación en tu app se define por la estructura de archivos dentro de la carpeta `app/`.' },
                  { type: 'code', language: 'typescript', code: `
// app/_layout.tsx (Define la navegación principal)
import { Stack } from 'expo-router';
export default () => <Stack />;

// app/index.tsx -> Ruta '/'
import { Link } from 'expo-router';
import { Text, View } from 'react-native';
export default () => (
  <View>
    <Text>Home Screen</Text>
    <Link href="/about">Go to About</Link>
  </View>
);

// app/about.tsx -> Ruta '/about'
import { Text, View } from 'react-native';
export default () => <Text>About Screen</Text>;
                  `},
                  { type: 'image', imageUrl: 'https://storage.googleapis.com/aistudio-hosting/bootcamp-assets/stack-vs-tabs.png', caption: 'Patrones de navegación: Stack Navigator organiza las pantallas en una pila, mientras que Tabs Navigator ofrece una barra de pestañas para la navegación principal.' },

                  { type: 'divider' },
                  
                  { type: 'subtitle', text: 'Parte 6: Próximos Pasos' },
                  { type: 'list', items: [
                    { text: 'Autenticación y Gestión de Usuarios', subItems: []},
                    { text: 'Gestión de Datos y Backend', subItems: []},
                    { text: 'Estilización Avanzada y Optimización', subItems: []},
                    { text: 'Despliegue en App Store y Google Play', subItems: []},
                  ]}

                ]
            },
            {
                id: 'conf-2',
                title: 'Conf. 2: Configuración del Entorno',
                content: [
                  { type: 'heading', text: 'Conferencia 2: Configuración del Entorno de Desarrollo (2h)' },
                  { type: 'list', items: [
                      'Instalación de Node.js y gestión de paquetes con npm/Yarn.',
                      'Configuración de tu IDE: VS Code o WebStorm (una herramienta poderosa para JavaScript y TypeScript).',
                      'Creación de un proyecto React Native con **npx create-expo-app**.',
                      'Ejecución de tu primera app en Expo Go (en dispositivos físicos Android/iOS).',
                      'Configuración opcional de simuladores (Android Studio para Android, Xcode para iOS) para una experiencia de desarrollo más integrada.',
                  ]},
                ]
            },
            {
                id: 'conf-3',
                title: 'Conf. 3: Componentes UI I',
                content: [
                  { type: 'heading', text: 'Conferencia 3: Componentes Esenciales de la UI I (2h)' },
                  { type: 'list', items: [
                      'El **View** como bloque de construcción fundamental de la interfaz de usuario, similar a un **div** en la web.',
                      '**Text**: Un componente indispensable para mostrar cualquier contenido textual.',
                      '**Image**: Cómo integrar y gestionar imágenes (locales y desde URLs).',
                      '**TextInput**: Capturando la entrada del usuario con campos de texto.',
                      'Exploración de propiedades comunes como **style**, **placeholder**, **value** y **onChangeText**.',
                  ]},
                ]
            },
            {
                id: 'conf-4',
                title: 'Conf. 4: Componentes UI II',
                content: [
                  { type: 'heading', text: 'Conferencia 4: Componentes Esenciales de la UI II (2h)' },
                  { type: 'list', items: [
                      '**TouchableOpacity**: Creación de botones con retroalimentación visual al tacto.',
                      '**ScrollView**: Haciendo que tu contenido sea desplazable para listas largas.',
                      '**SafeAreaView**: Componente crucial para evitar superposiciones con la barra de estado, muescas y el área de gestos en dispositivos modernos.',
                      '**KeyboardAvoidingView**: Ajustando la UI automáticamente para evitar que el teclado virtual oculte los inputs.',
                      'Comparativa de componentes y conceptos entre el desarrollo web y React Native.',
                  ]},
                ]
            },
            {
                id: 'conf-5',
                title: 'Conf. 5: Estilización y StyleSheet',
                content: [
                  { type: 'heading', text: 'Conferencia 5: Estilización Básica y StyleSheet (2h)' },
                  { type: 'list', items: [
                      'El modelo de caja en React Native y cómo difiere del web.',
                      'Creación y gestión de estilos con **StyleSheet.create()**.',
                      'Dominando flexbox en React Native (recordando que la dirección predeterminada es **column**).',
                      'Ventajas de usar StyleSheet frente a estilos en línea.',
                      'Introducción a la creación y gestión de temas para tu aplicación.',
                  ]},
                ]
            },
            {
                id: 'conf-6',
                title: 'Conf. 6: NativeWind y Tailwind',
                content: [
                  { type: 'heading', text: 'Conferencia 6: Estilización Avanzada con NativeWind y Tailwind CSS (2h)' },
                  { type: 'list', items: [
                      'Instalación y configuración de NativeWind para integrar Tailwind CSS en React Native.',
                      'Uso de clases de Tailwind CSS para estilos rápidos, consistentes y responsivos.',
                      'Aprovechando la funcionalidad de IntelliSense y personalizando el tema de Tailwind.',
                      'Gestión de un archivo **globals.css** para clases de utilidad reutilizables.',
                      'Práctica: Refactorización de estilos de componentes existentes utilizando NativeWind.',
                  ]},
                ]
            },
            {
                id: 'conf-7',
                title: 'Conf. 7: Gestión de Assets',
                content: [
                  { type: 'heading', text: 'Conferencia 7: Gestión de Assets (Imágenes, Fuentes, Íconos) (2h)' },
                  { type: 'list', items: [
                      'Uso eficiente de imágenes locales mediante **require()**.',
                      'Configuración y aplicación de fuentes tipográficas personalizadas.',
                      'Integración de librerías de íconos como Expo Vector Icons, Ion Icons y Feather Icons.',
                      'Práctica: Añadir imágenes, fuentes e íconos a un proyecto de aplicación.',
                  ]},
                ]
            },
            {
                id: 'conf-8',
                title: 'Conf. 8: Mini Proyecto UI',
                content: [
                  { type: 'heading', text: 'Conferencia 8: Mini Proyecto de Interfaz de Usuario (2h)' },
                  { type: 'list', items: [
                      'Proyecto: Construcción de una interfaz de usuario compleja, como una tarjeta de película detallada o un perfil de usuario, aplicando todos los conceptos de componentes y estilización aprendidos.',
                      'Enfoque en la estructuración de componentes y la coherencia visual.',
                      'Sesión de revisión de código y resolución de dudas para solidificar el aprendizaje.',
                  ]},
                ]
            },
        ]
    },
    // Módulo 2
    {
        id: 'modulo-2',
        title: 'Módulo 2: Navegación',
        overview: {
            id: 'modulo-2-overview',
            title: 'Módulo 2: Navegación',
            content: [
              { type: 'heading', text: 'Módulo 2: Navegación y Estructura de Aplicaciones' },
              { type: 'paragraph', text: 'Duración: 16 horas / 8 Conferencias' },
              { type: 'paragraph', text: 'Este módulo se centra en cómo organizar y navegar entre las diferentes pantallas de tu aplicación, utilizando las herramientas de enrutamiento de Expo.' },
            ]
        },
        conferences: [
            {
                id: 'conf-9',
                title: 'Conf. 9: Expo Router',
                content: [
                  { type: 'heading', text: 'Conferencia 9: Introducción a la Navegación con Expo Router (2h)' },
                  { type: 'list', items: [
                      'Principios fundamentales de la navegación en aplicaciones móviles.',
                      'Expo Router: Un sistema de enrutamiento moderno basado en la estructura de archivos de tu proyecto.',
                      'Stack Navigator: Creando pilas de pantallas navegables. **_layout.tsx**, **index.tsx**, **screen.tsx** como archivos especiales.',
                      'Configuración de opciones de pantalla: **headerShown**, **title**, y personalización de la barra de título.',
                      'Manejo de redirecciones y flujos de navegación.',
                  ]},
                ]
            },
            {
                id: 'conf-10',
                title: 'Conf. 10: Tab Navigator',
                content: [
                  { type: 'heading', text: 'Conferencia 10: Tab Navigator y Rutas Basadas en Archivos (2h)' },
                  { type: 'list', items: [
                      'Implementación de la navegación inferior con Tab Navigator para diferentes secciones de la aplicación.',
                      'Personalización detallada de íconos, etiquetas y estilos de las pestañas activas e inactivas.',
                      'El rol del archivo **_layout.tsx** dentro de un directorio de tabs.',
                      'Interacción entre la navegación de pestañas y la pila de navegación.',
                  ]},
                ]
            },
            {
                id: 'conf-11',
                title: 'Conf. 11: Rutas Anidadas y Dinámicas',
                content: [
                  { type: 'heading', text: 'Conferencia 11: Rutas Anidadas y Dinámicas con Expo Router (2h)' },
                  { type: 'list', items: [
                      'Estrategias para la creación de rutas anidadas para organizar secciones de la aplicación.',
                      'Implementación de rutas dinámicas para mostrar detalles de elementos específicos (ej. **/movie/[id].tsx**).',
                      'Extracción de parámetros de ruta utilizando el hook **useLocalSearchParams**.',
                      'Práctica: Desarrollo de rutas dinámicas para una pantalla de detalles de películas o productos.',
                  ]},
                ]
            },
            {
                id: 'conf-12',
                title: 'Conf. 12: Agrupación de Rutas',
                content: [
                  { type: 'heading', text: 'Conferencia 12: Agrupación de Rutas y Diseños Específicos (2h)' },
                  { type: 'list', items: [
                      'Uso de carpetas con paréntesis **()** para agrupar rutas y controlar cómo aparecen en la URL.',
                      'Aplicación de diseños de layout condicionales para grupos de rutas específicos.',
                      'Manejo de rutas que no pertenecen a un Tab Navigator (ej. una pantalla de detalles que no tiene pestañas inferiores).',
                      'Práctica: Aplicar agrupaciones de rutas para diferenciar layouts en una aplicación de Real Estate o Food Delivery.',
                  ]},
                ]
            },
            {
                id: 'conf-13',
                title: 'Conf. 13: Estado Local y Context API',
                content: [
                  { type: 'heading', text: 'Conferencia 13: Gestión de Estado Local y Context API (2h)' },
                  { type: 'list', items: [
                      'Uso avanzado de **useState** y **useEffect** para el manejo del estado dentro de componentes funcionales.',
                      'Introducción al Context API de React para la gestión del estado global en la aplicación.',
                      'Creación de un proveedor de contexto y un hook personalizado para consumir el contexto.',
                      'Análisis de las ventajas y desventajas del Context API en diferentes escenarios.',
                  ]},
                ]
            },
            {
                id: 'conf-14',
                title: 'Conf. 14: Hooks Personalizados',
                content: [
                  { type: 'heading', text: 'Conferencia 14: Hooks Personalizados y Reutilización de Lógica (2h)' },
                  { type: 'list', items: [
                      'Principios fundamentales para la creación de hooks personalizados (Custom Hooks).',
                      'Ejemplos prácticos de hooks personalizados para encapsular lógica común (ej. **useDebounce** para búsquedas, **useTheme** para temas).',
                      'Estrategias para mejorar la reutilización del código y la legibilidad de la aplicación.',
                      'Práctica: Desarrollo de un hook personalizado para gestionar el tema de la aplicación (modo claro/oscuro).',
                  ]},
                ]
            },
            {
                id: 'conf-15',
                title: 'Conf. 15: Tipado con TypeScript',
                content: [
                  { type: 'heading', text: 'Conferencia 15: Tipado con TypeScript (2h)' },
                  { type: 'list', items: [
                      'Introducción y configuración de TypeScript en un proyecto React Native.',
                      'Beneficios de TypeScript: Seguridad de tipos, refactorización más segura y mejor mantenimiento del código.',
                      'Declaración de tipos e interfaces para propiedades (props), estados (state) y datos.',
                      'Integración de TypeScript con Expo Router y componentes de React Native.',
                  ]},
                ]
            },
            {
                id: 'conf-16',
                title: 'Conf. 16: Mini Proyecto Navegación',
                content: [
                  { type: 'heading', text: 'Conferencia 16: Mini Proyecto de Navegación Completa (2h)' },
                  { type: 'list', items: [
                      'Proyecto: Construcción de un mini proyecto que integre todos los conceptos de navegación y estructura de aplicaciones, incluyendo Stack, Tabs, rutas dinámicas y agrupaciones.',
                      'Diseño de una estructura de carpetas y archivos lógica y escalable.',
                      'Sesión de revisión de código y resolución de dudas para asegurar una comprensión profunda.',
                  ]},
                ]
            },
        ]
    },
    // Módulo 3
    {
        id: 'modulo-3',
        title: 'Módulo 3: Persistencia de Datos',
        overview: {
            id: 'modulo-3-overview',
            title: 'Módulo 3: Persistencia de Datos',
            content: [
                { type: 'heading', text: 'Módulo 3: Persistencia de Datos Local con SQLite y Drizzle ORM' },
                { type: 'paragraph', text: 'Duración: 20 horas / 10 Conferencias' },
                { type: 'paragraph', text: 'En este módulo, aprenderás a almacenar y gestionar datos directamente en el dispositivo del usuario, utilizando Expo SQLite y Drizzle ORM como una solución local.' },
            ]
        },
        conferences: [
            {
                id: 'conf-17',
                title: 'Conf. 17: BD Locales',
                content: [
                    { type: 'heading', text: 'Conferencia 17: Introducción a Bases de Datos Locales (2h)' },
                    { type: 'list', items: [
                        '¿Por qué es fundamental la persistencia de datos local en aplicaciones móviles (soporte offline, rendimiento)?',
                        'Exploración de opciones populares para bases de datos locales: SQLite, MMKV, WatermelonDB, AsyncStorage.',
                        'Ventajas de utilizar un ORM (Object-Relational Mapper) como Drizzle para interactuar con la base de datos.',
                        'Instalación del módulo **expo-sqlite** en tu proyecto.',
                    ]},
                ]
            },
            {
                id: 'conf-18',
                title: 'Conf. 18: Drizzle ORM y Kit',
                content: [
                    { type: 'heading', text: 'Conferencia 18: Configuración de Drizzle ORM y Drizzle Kit (2h)' },
                    { type: 'list', items: [
                        'Instalación de las librerías **@drizzle-team/orm** y **drizzle-kit**.',
                        'Configuración del archivo **drizzle.config.ts** para conectar Drizzle con SQLite.',
                        'Creación de scripts npm para Drizzle Kit (**generate**, **migrate**) para automatizar el proceso de la base de datos.',
                        'Consideraciones para el manejo de la base de datos en entornos de desarrollo y producción.',
                    ]},
                ]
            },
            {
                id: 'conf-19',
                title: 'Conf. 19: Esquemas Drizzle I',
                content: [
                    { type: 'heading', text: 'Conferencia 19: Definición de Esquemas con Drizzle ORM I (2h)' },
                    { type: 'list', items: [
                        'Conceptos básicos de esquemas y tablas en bases de datos relacionales.',
                        'Definición de tablas simples utilizando constructores de Drizzle (**table**, **text**, **integer**, **boolean**, **real**).',
                        'Tipos de datos específicos de SQLite y su mapeo en Drizzle.',
                        'Definición de claves primarias (**primaryKey**) y campos auto-incrementales (**autoincrement**).',
                        'Práctica: Definición del esquema inicial de usuarios para una aplicación To-Do.',
                    ]},
                ]
            },
            {
                id: 'conf-20',
                title: 'Conf. 20: Esquemas Drizzle II',
                content: [
                    { type: 'heading', text: 'Conferencia 20: Definición de Esquemas con Drizzle ORM II (2h)' },
                    { type: 'list', items: [
                        'Implementación de columnas con valores por defecto (**default**).',
                        'Configuración de columnas únicas (**unique**) y obligatorias (**notNull**).',
                        'Establecimiento de relaciones entre tablas (ej. one-to-many, many-to-one) con **relations** de Drizzle.',
                        'Uso de tipos **enum** para limitar valores a opciones predefinidas.',
                        'Práctica: Definición del esquema para tareas, incluyendo relaciones con usuarios.',
                    ]},
                ]
            },
            {
                id: 'conf-21',
                title: 'Conf. 21: Migraciones',
                content: [
                    { type: 'heading', text: 'Conferencia 21: Generación y Aplicación de Migraciones (2h)' },
                    { type: 'list', items: [
                        '¿Qué son las migraciones de bases de datos y su importancia en el ciclo de vida del desarrollo?',
                        'Uso de **drizzle-kit generate** para crear archivos de migración a partir de los cambios en el esquema.',
                        'Análisis del contenido de los archivos de migración generados.',
                        'Implementación de la lógica para aplicar las migraciones al iniciar la aplicación.',
                        'Práctica: Generar y aplicar migraciones para los esquemas de usuarios y tareas.',
                    ]},
                ]
            },
            {
                id: 'conf-22',
                title: 'Conf. 22: CRUD (Crear y Leer)',
                content: [
                    { type: 'heading', text: 'Conferencia 22: Operaciones CRUD Básicas (Crear y Leer) (2h)' },
                    { type: 'list', items: [
                        'Establecimiento de la conexión entre Drizzle ORM y Expo SQLite en la aplicación.',
                        'Implementación de la operación de creación de datos (**insert**).',
                        'Realización de la operación de lectura de datos (**select**) con filtros básicos (**where**).',
                        'Práctica: Crear nuevos usuarios y tareas, y leer todas las tareas en la aplicación To-Do.',
                    ]},
                ]
            },
            {
                id: 'conf-23',
                title: 'Conf. 23: CRUD (Actualizar y Borrar)',
                content: [
                    { type: 'heading', text: 'Conferencia 23: Operaciones CRUD Básicas (Actualizar y Borrar) (2h)' },
                    { type: 'list', items: [
                        'Implementación de la operación de actualización de datos (**update**).',
                        'Realización de la operación de eliminación de datos (**delete**).',
                        'Breve introducción al concepto de transacciones en bases de datos.',
                        'Práctica: Actualizar el estado de una tarea (completada/incompleta) y eliminar tareas específicas en la aplicación To-Do.',
                    ]},
                ]
            },
            {
                id: 'conf-24',
                title: 'Conf. 24: Seeding de BD',
                content: [
                    { type: 'heading', text: 'Conferencia 24: Seeding de la Base de Datos Local (2h)' },
                    { type: 'list', items: [
                        '¿Qué es el "seeding" de la base de datos y su utilidad en el desarrollo?',
                        'Creación de un script para poblar la base de datos local con datos de prueba realistas.',
                        'La importancia de los datos de prueba para el desarrollo rápido de la interfaz de usuario y la lógica.',
                        'Práctica: Implementación de un script de seeding para la aplicación To-Do o un prototipo de Expense Tracker.',
                    ]},
                ]
            },
            {
                id: 'conf-25',
                title: 'Conf. 25: Drizzle Studio',
                content: [
                    { type: 'heading', text: 'Conferencia 25: Drizzle Studio y Depuración de Datos Locales (2h)' },
                    { type: 'list', items: [
                        'Integración y uso de Drizzle Studio como herramienta visual para inspeccionar y manipular la base de datos local.',
                        'Beneficios de una interfaz gráfica para la depuración y comprensión de la estructura de datos.',
                        'Visualización de tablas, columnas y contenido de la base de datos.',
                        'Práctica: Utilizar Drizzle Studio para verificar los datos de la aplicación To-Do y corregir posibles errores.',
                    ]},
                ]
            },
            {
                id: 'conf-26',
                title: 'Conf. 26: Mini Proyecto To-Do App',
                content: [
                    { type: 'heading', text: 'Conferencia 26: Mini Proyecto: Aplicación To-Do Completa (Local) (2h)' },
                    { type: 'list', items: [
                        'Proyecto: Desarrollo de una aplicación To-Do completa, integrando Expo SQLite y Drizzle ORM para todas las funcionalidades CRUD.',
                        'Manejo de estados de tareas (añadir, editar, marcar como completadas, eliminar) con persistencia local.',
                        'Enfoque en la gestión de datos exclusivamente en el dispositivo del usuario.',
                        'Revisión final y pulido de la aplicación.',
                    ]},
                ]
            },
        ]
    },
    // Módulo 4
    {
        id: 'modulo-4',
        title: 'Módulo 4: APIs y Optimización',
        overview: {
            id: 'modulo-4-overview',
            title: 'Módulo 4: APIs y Optimización',
            content: [
              { type: 'heading', text: 'Módulo 4: Consumo de APIs Externas y Optimización' },
              { type: 'paragraph', text: 'Duración: 20 horas / 10 Conferencias' },
              { type: 'paragraph', text: 'Este módulo te enseñará a integrar datos de servicios web externos en tus aplicaciones, así como a optimizar el rendimiento para una experiencia de usuario fluida.' },
            ]
        },
        conferences: [
            {
                id: 'conf-27',
                title: 'Conf. 27: Consumo de APIs',
                content: [
                    { type: 'heading', text: 'Conferencia 27: Consumo de APIs Externas (2h)' },
                    { type: 'list', items: [
                        'Realización de peticiones HTTP utilizando **fetch** o **axios** para interactuar con servicios web.',
                        'Manejo y transformación de datos en formato JSON.',
                        'Trabajo con APIs REST públicas (ej. TheMovieDB para películas, TheMealDB para recetas).',
                        'Gestión segura de claves API y otras variables de entorno locales (.env).',
                    ]},
                ]
            },
            {
                id: 'conf-28',
                title: 'Conf. 28: Manejo de Estados API',
                content: [
                    { type: 'heading', text: 'Conferencia 28: Manejo de Estados de Carga, Errores y Datos (2h)' },
                    { type: 'list', items: [
                        'Implementación de lógica para gestionar los estados **loading** (cargando), **error** (error) y **data** (datos) en las llamadas a la API.',
                        'Uso de componentes de UI para indicar el estado de carga (ej. **ActivityIndicator**, spinners).',
                        'Diseño y presentación de mensajes de error claros y amigables para el usuario.',
                        'Estrategias para manejar valores **null** o **undefined** en los datos recibidos de la API.',
                    ]},
                ]
            },
            {
                id: 'conf-29',
                title: 'Conf. 29: Debouncing',
                content: [
                    { type: 'heading', text: 'Conferencia 29: Optimización de Solicitudes: Debouncing (2h)' },
                    { type: 'list', items: [
                        'Identificación de problemas de rendimiento causados por búsquedas en tiempo real y llamadas excesivas a la API.',
                        'Concepto de "debouncing" para limitar la frecuencia de ejecución de funciones.',
                        'Implementación de un hook **useDebounce** (personalizado o de una librería externa).',
                        'Práctica: Aplicación de debouncing a un campo de búsqueda en una aplicación para optimizar las llamadas a la API.',
                    ]},
                ]
            },
            {
                id: 'conf-30',
                title: 'Conf. 30: FlatList',
                content: [
                    { type: 'heading', text: 'Conferencia 30: Listas Grandes y Rendimiento: FlatList (2h)' },
                    { type: 'list', items: [
                        'Análisis de los problemas de rendimiento al renderizar listas largas con **ScrollView**.',
                        'Introducción a **FlatList** como componente optimizado para listas extensas.',
                        'Propiedades esenciales de FlatList: **data**, **renderItem**, **keyExtractor** y **ListEmptyComponent**.',
                        'Práctica: Migración de una lista de **ScrollView** a **FlatList** para mejorar el rendimiento.',
                    ]},
                ]
            },
            {
                id: 'conf-31',
                title: 'Conf. 31: FlatList Avanzado',
                content: [
                    { type: 'heading', text: 'Conferencia 31: Características Avanzadas de FlatList (2h)' },
                    { type: 'list', items: [
                        'Implementación de **onEndReached** para la carga infinita (infinite scrolling) de datos.',
                        'Uso de **ListHeaderComponent** y **ListFooterComponent** para añadir contenido a los extremos de la lista.',
                        'Integración de **RefreshControl** para la funcionalidad "pull to refresh".',
                        'Práctica: Añadir carga infinita y "pull to refresh" a una lista de elementos.',
                    ]},
                ]
            },
            {
                id: 'conf-32',
                title: 'Conf. 32: Mini Proyecto Películas I',
                content: [
                    { type: 'heading', text: 'Conferencia 32: Mini Proyecto: App de Películas/Recetas (Búsqueda) (2h)' },
                    { type: 'list', items: [
                        'Proyecto: Creación de una aplicación para buscar películas o recetas, integrando una API externa (TheMovieDB o TheMealDB).',
                        'Implementación de una pantalla de búsqueda con **TextInput** y debouncing.',
                        'Visualización de los resultados de búsqueda utilizando **FlatList** y manejo de los estados de carga y error.',
                        'Construcción de la interfaz de usuario para la pantalla de búsqueda y visualización de resultados.',
                    ]},
                ]
            },
            {
                id: 'conf-33',
                title: 'Conf. 33: Mini Proyecto Películas II',
                content: [
                    { type: 'heading', text: 'Conferencia 33: App de Películas/Recetas (Detalles y Guardado Local) (2h)' },
                    { type: 'list', items: [
                        'Diseño y desarrollo de una pantalla de detalles para mostrar información extendida de una película o receta seleccionada.',
                        'Extracción de parámetros de ruta para cargar los datos específicos del elemento.',
                        'Implementación de una funcionalidad para guardar elementos como "favoritos" localmente utilizando SQLite y Drizzle ORM.',
                        'Práctica: Construcción de la UI de detalles y la lógica para añadir/eliminar de favoritos.',
                    ]},
                ]
            },
            {
                id: 'conf-34',
                title: 'Conf. 34: Imágenes y File System',
                content: [
                    { type: 'heading', text: 'Conferencia 34: Manejo de Imágenes y Sistema de Archivos Local (2h)' },
                    { type: 'list', items: [
                        'Captura de imágenes desde la galería o la cámara del dispositivo con **expo-image-picker**.',
                        'Almacenamiento de imágenes de forma persistente en el sistema de archivos local del dispositivo utilizando **expo-file-system**.',
                        'Visualización de imágenes previamente guardadas localmente.',
                        'Práctica: Añadir funcionalidad para seleccionar o tomar fotos en una aplicación de perfil o para crear publicaciones con imágenes.',
                    ]},
                ]
            },
            {
                id: 'conf-35',
                title: 'Conf. 35: Búsqueda y Filtrado',
                content: [
                    { type: 'heading', text: 'Conferencia 35: Búsqueda y Filtrado Dinámico (2h)' },
                    { type: 'list', items: [
                        'Implementación de funcionalidades de filtrado por categorías, tipo o múltiples criterios.',
                        'Actualización dinámica de la interfaz de usuario en respuesta a los filtros seleccionados.',
                        'Combinación de la búsqueda por texto y los filtros para refinar los resultados.',
                        'Práctica: Añadir capacidades avanzadas de filtrado a la aplicación de películas/recetas o Food Delivery.',
                    ]},
                ]
            },
            {
                id: 'conf-36',
                title: 'Conf. 36: Taller APIs',
                content: [
                    { type: 'heading', text: 'Conferencia 36: Taller: Consumo de API y Optimización (2h)' },
                    { type: 'list', items: [
                        'Proyecto: Construcción de una aplicación Food Delivery básica, con un menú almacenado localmente (SQLite) y opciones de filtrado. Incluye el consumo de una API externa simple para datos adicionales si es necesario.',
                        'Revisión de código en vivo y resolución de dudas sobre la integración de APIs y optimización.',
                    ]},
                ]
            },
        ]
    },
    // Módulo 5
    {
        id: 'modulo-5',
        title: 'Módulo 5: Tópicos Avanzados',
        overview: {
            id: 'modulo-5-overview',
            title: 'Módulo 5: Tópicos Avanzados',
            content: [
              { type: 'heading', text: 'Módulo 5: Aplicaciones Avanzadas y Mejores Prácticas' },
              { type: 'paragraph', text: 'Duración: 24 horas / 12 Conferencias' },
              { type: 'paragraph', text: 'Este módulo se enfoca en la arquitectura de aplicaciones, técnicas avanzadas de UI/UX, refactorización y la preparación para el despliegue.' },
            ]
        },
        conferences: [
            {
                id: 'conf-37',
                title: 'Conf. 37: Arquitectura',
                content: [
                    { type: 'heading', text: 'Conferencia 37: Arquitectura de Aplicaciones Móviles (2h)' },
                    { type: 'list', items: [
                        'Principios de diseño de sistemas escalables y mantenibles en desarrollo móvil.',
                        'Implementación de una arquitectura basada en componentes (Component-Driven Architecture).',
                        'Estructura de carpetas y archivos recomendada: **src**, **components**, **hooks**, **utils**, **lib**, **database**.',
                    ]},
                ]
            },
            {
                id: 'conf-38',
                title: 'Conf. 38: Gestión de Estado Avanzada',
                content: [
                    { type: 'heading', text: 'Conferencia 38: Gestión de Estado Global Avanzada (2h)' },
                    { type: 'list', items: [
                        'Patrones avanzados para la gestión del estado global en React Native (Context API, Zustand como alternativa).',
                        'Uso del Context API para gestionar datos de usuario, configuraciones de la aplicación o temas.',
                        'Estrategias eficientes para actualizar y consumir el estado global.',
                    ]},
                ]
            },
            {
                id: 'conf-39',
                title: 'Conf. 39: Depuración y Errores',
                content: [
                    { type: 'heading', text: 'Conferencia 39: Depuración y Manejo de Errores (Local) (2h)' },
                    { type: 'list', items: [
                        'Uso de herramientas de depuración de Expo (Chrome Debugger, Metro Bundler) y de tu IDE.',
                        'Estrategias para el registro de errores (**console.log** avanzado, herramientas de monitoreo de errores si se usan alternativas locales).',
                        'Implementación de límites de error (Error Boundaries) para prevenir fallos críticos en la UI.',
                        'Buenas prácticas para escribir código defensivo y robusto.',
                    ]},
                ]
            },
            {
                id: 'conf-40',
                title: 'Conf. 40: Código Limpio',
                content: [
                    { type: 'heading', text: 'Conferencia 40: Refactorización y Código Limpio (2h)' },
                    { type: 'list', items: [
                        'Aplicación de principios de código limpio como SOLID y DRY en proyectos React Native.',
                        'Identificación de "code smells" y técnicas para refactorizar componentes y funciones complejas.',
                        'Modularización efectiva y creación de componentes altamente reusables.',
                        'Práctica: Refactorizar un componente o módulo complejo dentro de una de las aplicaciones desarrolladas.',
                    ]},
                ]
            },
            {
                id: 'conf-41',
                title: 'Conf. 41: Mini Proyecto Real Estate I',
                content: [
                    { type: 'heading', text: 'Conferencia 41: Mini Proyecto: Aplicación de Real Estate (UI Compleja) (2h)' },
                    { type: 'list', items: [
                        'Proyecto: Construcción de una aplicación de Real Estate centrada en una UI rica y compleja, sin autenticación externa ni backend en la nube.',
                        'Visualización de listados de propiedades a partir de datos locales (SQLite).',
                        'Diseño de tarjetas de propiedades, funcionalidades de filtro y una navegación intuitiva.',
                        'Práctica: Implementación de la pantalla de inicio y el listado de propiedades.',
                    ]},
                ]
            },
            {
                id: 'conf-42',
                title: 'Conf. 42: Mini Proyecto Real Estate II',
                content: [
                    { type: 'heading', text: 'Conferencia 42: Aplicación de Real Estate (Detalles y Formularios) (2h)' },
                    { type: 'list', items: [
                        'Desarrollo de una pantalla de detalles de propiedad con múltiples secciones (galería de imágenes, descripción, características, reseñas, etc.).',
                        'Creación de formularios para añadir o editar propiedades, con validación de entrada de datos, almacenando cambios localmente.',
                        'Práctica: Implementación de la pantalla de detalles de propiedad y formularios interactivos.',
                    ]},
                ]
            },
            {
                id: 'conf-43',
                title: 'Conf. 43: UI Responsiva',
                content: [
                    { type: 'heading', text: 'Conferencia 43: Diseño de UI Responsiva (2h)' },
                    { type: 'list', items: [
                        'Uso de la API **Dimensions** y **PixelRatio** para adaptar la UI a diferentes tamaños y densidades de pantalla.',
                        'Manejo de la orientación de la pantalla (vertical vs. horizontal) y cómo afecta al layout.',
                        'Consideraciones de accesibilidad y usabilidad en el diseño responsivo.',
                        'Práctica: Asegurar que la aplicación de Real Estate sea completamente responsiva en diferentes dispositivos y orientaciones.',
                    ]},
                ]
            },
            {
                id: 'conf-44',
                title: 'Conf. 44: Componentes Reusables',
                content: [
                    { type: 'heading', text: 'Conferencia 44: Componentes Reusables y Patrones de Diseño (2h)' },
                    { type: 'list', items: [
                        'Estrategias para construir una biblioteca de componentes de UI reusables.',
                        'Introducción a patrones de diseño como Render Props y Higher-Order Components (si son aplicables y sencillos de integrar sin backend complejo).',
                        'Documentación de componentes para facilitar su reutilización por otros desarrolladores.',
                    ]},
                ]
            },
            {
                id: 'conf-45',
                title: 'Conf. 45: UI/UX Avanzada',
                content: [
                    { type: 'heading', text: 'Conferencia 45: UI/UX Avanzada: Modals, Alerts y Animaciones Básicas (2h)' },
                    { type: 'list', items: [
                        'Implementación de **Modal** para ventanas emergentes interactivas.',
                        'Uso del componente **Alert** para mostrar confirmaciones, mensajes de advertencia o información crítica.',
                        'Introducción a la **Animated API** de React Native para crear animaciones sencillas y fluidas en la interfaz.',
                        'Práctica: Añadir Modals y Alerts interactivos con animaciones básicas a las aplicaciones.',
                    ]},
                ]
            },
            {
                id: 'conf-46',
                title: 'Conf. 46: Mini Proyecto Social Media',
                content: [
                    { type: 'heading', text: 'Conferencia 46: Mini Proyecto: Social Media (Feed y Posts Locales) (2h)' },
                    { type: 'list', items: [
                        'Proyecto: Diseño de un feed de publicaciones (similar a X/Twitter o Instagram) donde los posts se gestionan localmente.',
                        'Implementación de la creación de publicaciones con texto e imágenes (almacenadas localmente con **expo-file-system**).',
                        'Interacciones básicas como "Likes" y "Comentarios" (gestionados completamente en SQLite).',
                        'Práctica: Construcción de la UI del feed y la lógica para crear y interactuar con publicaciones.',
                    ]},
                ]
            },
            {
                id: 'conf-47',
                title: 'Conf. 47: Publicación Local',
                content: [
                    { type: 'heading', text: 'Conferencia 47: Preparación para la Publicación Local y Desafíos (2h)' },
                    { type: 'list', items: [
                        'Generación de builds básicos de Android (.apk) y iOS (.ipa) para pruebas internas, utilizando las herramientas de Expo.',
                        'Revisión de las consideraciones finales de rendimiento antes del despliegue.',
                        'Introducción a ejercicios y desafíos avanzados para continuar el aprendizaje.',
                    ]},
                ]
            },
            {
                id: 'conf-48',
                title: 'Conf. 48: Recapitulación',
                content: [
                    { type: 'heading', text: 'Conferencia 48: Recapitulación y Ruta de Aprendizaje Continuo (2h)' },
                    { type: 'list', items: [
                        'Resumen exhaustivo de todos los conceptos, herramientas y tecnologías cubiertas en el bootcamp.',
                        'Orientación sobre recursos para el aprendizaje continuo (documentación oficial, comunidades, cursos avanzados de React Native).',
                        'Consejos para el desarrollo profesional como ingeniero móvil y cómo seguir creciendo en la industria.',
                    ]},
                ]
            },
        ]
    }
];

export const esCurriculum = {
    objetivoGeneral,
    modules,
};
