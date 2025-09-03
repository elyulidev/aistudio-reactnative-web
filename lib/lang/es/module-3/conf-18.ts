import type { CurriculumTopic } from '../../../types';

export const conference18: CurriculumTopic = {
    id: 'conf-18',
    title: 'Conf. 18: Drizzle ORM y Kit',
    content: [
        { type: 'heading', text: 'Conferencia 18: Configuración de Drizzle ORM y Drizzle Kit (2h)' },
        { type: 'list', items: [
            'Instalación de las librerías **@drizzle-team/orm** y **drizzle-kit**.',
            'Configuración del archivo **drizzle.config.ts** para conectar Drizzle con SQLite.',
            'Creación de scripts npm para Drizzle Kit (**generate**, **migrate**) para automatizar el proceso de la base de datos.',
            'Consideraciones para el manejo de la base de datos en entornos de desarrollo y producción.',
        ]},
    ]
};