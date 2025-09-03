import type { CurriculumTopic } from '../../../types';

export const conference24: CurriculumTopic = {
    id: 'conf-24',
    title: 'Conf. 24: Semeando o BD',
    content: [
        { type: 'heading', text: 'Palestra 24: Semeando o Banco de Dados Local (2h)' },
        { type: 'list', items: [
            'O que é "seeding" de banco de dados e sua utilidade no desenvolvimento?',
            'Criação de um script para popular o banco de dados local com dados de teste realistas.',
            'A importância dos dados de teste para o desenvolvimento rápido da interface do usuário e da lógica.',
            'Prática: Implementação de um script de seeding para a aplicação de Lista de Tarefas ou um protótipo de Rastreador de Despesas.',
        ]},
    ]
};