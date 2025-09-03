import type { CurriculumTopic } from '../../../types';

export const conference29: CurriculumTopic = {
    id: 'conf-29',
    title: 'Conf. 29: Debouncing',
    content: [
        { type: 'heading', text: 'Palestra 29: Otimização de Requisições: Debouncing (2h)' },
        { type: 'list', items: [
            'Identificação de problemas de desempenho causados por buscas em tempo real e chamadas excessivas à API.',
            'Conceito de "debouncing" para limitar a frequência de execução de funções.',
            'Implementação de um hook **useDebounce** (personalizado ou de uma biblioteca externa).',
            'Prática: Aplicação de debouncing a um campo de busca em uma aplicação para otimizar as chamadas à API.',
        ]},
    ]
};