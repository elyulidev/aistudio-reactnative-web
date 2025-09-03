import type { CurriculumTopic } from '../../../types';

export const conference22: CurriculumTopic = {
    id: 'conf-22',
    title: 'Conf. 22: CRUD (Criar e Ler)',
    content: [
        { type: 'heading', text: 'Palestra 22: Operações CRUD Básicas (Criar e Ler) (2h)' },
        { type: 'list', items: [
            'Estabelecimento da conexão entre o Drizzle ORM e o Expo SQLite na aplicação.',
            'Implementação da operação de criação de dados (**insert**).',
            'Realização da operação de leitura de dados (**select**) com filtros básicos (**where**).',
            'Prática: Criar novos usuários e tarefas, e ler todas as tarefas na aplicação de Lista de Tarefas.',
        ]},
    ]
};