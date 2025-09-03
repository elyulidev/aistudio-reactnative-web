import type { CurriculumTopic } from '../../../types';

export const conference28: CurriculumTopic = {
    id: 'conf-28',
    title: 'Conf. 28: Gerenciamento de Estados da API',
    content: [
        { type: 'heading', text: 'Palestra 28: Gerenciamento de Estados de Carregamento, Erros e Dados (2h)' },
        { type: 'list', items: [
            'Implementação de lógica para gerenciar os estados **loading** (carregando), **error** (erro) e **data** (dados) nas chamadas à API.',
            'Uso de componentes de UI para indicar o estado de carregamento (ex. **ActivityIndicator**, spinners).',
            'Projeto e apresentação de mensagens de erro claras e amigáveis para o usuário.',
            'Estratégias para lidar com valores **null** ou **undefined** nos dados recebidos da API.',
        ]},
    ]
};