import type { CurriculumTopic } from '../../../types';

export const conference14: CurriculumTopic = {
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
};