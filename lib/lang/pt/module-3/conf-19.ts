import type { CurriculumTopic } from '../../../types';

export const conference19: CurriculumTopic = {
    id: 'conf-19',
    title: 'Conf. 19: Esquemas Drizzle I',
    content: [
        { type: 'heading', text: 'Palestra 19: Definição de Esquemas com Drizzle ORM I (2h)' },
        { type: 'list', items: [
            'Conceitos básicos de esquemas e tabelas em bancos de dados relacionais.',
            'Definição de tabelas simples utilizando construtores do Drizzle (**table**, **text**, **integer**, **boolean**, **real**).',
            'Tipos de dados específicos do SQLite e seu mapeamento no Drizzle.',
            'Definição de chaves primárias (**primaryKey**) e campos autoincrementais (**autoincrement**).',
            'Prática: Definição do esquema inicial de usuários para uma aplicação de Lista de Tarefas.',
        ]},
    ]
};