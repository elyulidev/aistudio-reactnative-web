import type { CurriculumTopic } from '../../../types';

export const conference9: CurriculumTopic = {
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
};