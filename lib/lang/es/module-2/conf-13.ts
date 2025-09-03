import type { CurriculumTopic } from '../../../types';

export const conference13: CurriculumTopic = {
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
};