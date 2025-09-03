import type { CurriculumTopic } from '../../../types';

export const conference18: CurriculumTopic = {
    id: 'conf-18',
    title: 'Conf. 18: Drizzle ORM e Kit',
    content: [
        { type: 'heading', text: 'Palestra 18: Configuração do Drizzle ORM e Drizzle Kit (2h)' },
        { type: 'list', items: [
            'Instalação das bibliotecas **@drizzle-team/orm** e **drizzle-kit**.',
            'Configuração do arquivo **drizzle.config.ts** para conectar o Drizzle com o SQLite.',
            'Criação de scripts npm para o Drizzle Kit (**generate**, **migrate**) para automatizar o processo do banco de dados.',
            'Considerações para o gerenciamento do banco de dados em ambientes de desenvolvimento e produção.',
        ]},
    ]
};