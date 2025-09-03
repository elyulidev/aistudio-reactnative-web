import type { CurriculumTopic } from '../../../types';

export const conference23: CurriculumTopic = {
    id: 'conf-23',
    title: 'Conf. 23: CRUD (Atualizar e Excluir)',
    content: [
        { type: 'heading', text: 'Palestra 23: Operações CRUD Básicas (Atualizar e Excluir) (2h)' },
        { type: 'list', items: [
            'Implementação da operação de atualização de dados (**update**).',
            'Realização da operação de exclusão de dados (**delete**).',
            'Breve introdução ao conceito de transações em bancos de dados.',
            'Prática: Atualizar o estado de uma tarefa (concluída/incompleta) e excluir tarefas específicas na aplicação de Lista de Tarefas.',
        ]},
    ]
};