import type { CurriculumTopic } from '../../../types';

export const conference11: CurriculumTopic = {
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
};