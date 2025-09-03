import type { CurriculumTopic } from '../../../types';

export const conference10: CurriculumTopic = {
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
};