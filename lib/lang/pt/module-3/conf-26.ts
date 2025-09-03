import type { CurriculumTopic } from '../../../types';

export const conference26: CurriculumTopic = {
    id: 'conf-26',
    title: 'Conf. 26: Mini Projeto App de Lista de Tarefas',
    content: [
        { type: 'heading', text: 'Palestra 26: Mini Projeto: Aplicação de Lista de Tarefas Completa (Local) (2h)' },
        { type: 'list', items: [
            'Projeto: Desenvolvimento de uma aplicação de Lista de Tarefas completa, integrando o Expo SQLite e o Drizzle ORM para todas as funcionalidades CRUD.',
            'Gerenciamento de estados de tarefas (adicionar, editar, marcar como concluídas, excluir) com persistência local.',
            'Foco no gerenciamento de dados exclusivamente no dispositivo do usuário.',
            'Revisão final e polimento da aplicação.',
        ]},
    ]
};