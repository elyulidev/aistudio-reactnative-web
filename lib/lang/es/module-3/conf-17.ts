import type { CurriculumTopic } from '../../../types';

export const conference17: CurriculumTopic = {
    id: 'conf-17',
    title: 'Conf. 17: BD Locales',
    content: [
        { type: 'heading', text: 'Conferencia 17: Introducción a Bases de Datos Locales (2h)' },
        { type: 'list', items: [
            '¿Por qué es fundamental la persistencia de datos local en aplicaciones móviles (soporte offline, rendimiento)?',
            'Exploración de opciones populares para bases de datos locales: SQLite, MMKV, WatermelonDB, AsyncStorage.',
            'Ventajas de utilizar un ORM (Object-Relational Mapper) como Drizzle para interactuar con la base de datos.',
            'Instalación del módulo **expo-sqlite** en tu proyecto.',
        ]},
    ]
};