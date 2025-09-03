import type { CurriculumTopic } from '../../../types';

export const conference12: CurriculumTopic = {
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
};