import type { CurriculumTopic } from '../../../types';

export const conference17: CurriculumTopic = {
    id: 'conf-17',
    title: 'Conf. 17: BD Locais',
    content: [
        { type: 'heading', text: 'Palestra 17: Introdução a Bancos de Dados Locais (2h)' },
        { type: 'list', items: [
            'Por que a persistência de dados local é fundamental em aplicações móveis (suporte offline, desempenho)?',
            'Exploração de opções populares para bancos de dados locais: SQLite, MMKV, WatermelonDB, AsyncStorage.',
            'Vantagens de utilizar um ORM (Object-Relational Mapper) como o Drizzle para interagir com o banco de dados.',
            'Instalação do módulo **expo-sqlite** no seu projeto.',
        ]},
    ]
};