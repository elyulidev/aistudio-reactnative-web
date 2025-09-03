import type { CurriculumTopic } from '../../../types';

export const conference14: CurriculumTopic = {
    id: 'conf-14',
    title: 'Conf. 14: Hooks Personalizados',
    content: [
      { type: 'heading', text: 'Palestra 14: Hooks Personalizados e Reutilização de Lógica (2h)' },
      { type: 'list', items: [
          'Princípios fundamentais para a criação de hooks personalizados (Custom Hooks).',
          'Exemplos práticos de hooks personalizados para encapsular lógica comum (ex. **useDebounce** para buscas, **useTheme** para temas).',
          'Estratégias para melhorar a reutilização do código e a legibilidade da aplicação.',
          'Prática: Desenvolvimento de um hook personalizado para gerenciar o tema da aplicação (modo claro/escuro).',
      ]},
    ]
};