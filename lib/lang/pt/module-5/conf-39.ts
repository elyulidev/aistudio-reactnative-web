import type { CurriculumTopic } from '../../../types';

export const conference39: CurriculumTopic = {
    id: 'conf-39',
    title: 'Conf. 39: Depuração e Erros',
    content: [
        { type: 'heading', text: 'Palestra 39: Depuração e Tratamento de Erros (Local) (2h)' },
        { type: 'list', items: [
            'Uso de ferramentas de depuração do Expo (Chrome Debugger, Metro Bundler) e do seu IDE.',
            'Estratégias para o registro de erros (**console.log** avançado, ferramentas de monitoramento de erros se alternativas locais forem usadas).',
            'Implementação de limites de erro (Error Boundaries) para prevenir falhas críticas na UI.',
            'Boas práticas para escrever código defensivo e robusto.',
        ]},
    ]
};