import type { CurriculumTopic } from '../../../types';

export const conference22: CurriculumTopic = {
    id: 'conf-22',
    title: 'Conf. 22: CRUD (Crear y Leer)',
    content: [
        { type: 'heading', text: 'Conferencia 22: Operaciones CRUD Básicas (Crear y Leer) (2h)' },
        { type: 'list', items: [
            'Establecimiento de la conexión entre Drizzle ORM y Expo SQLite en la aplicación.',
            'Implementación de la operación de creación de datos (**insert**).',
            'Realización de la operación de lectura de datos (**select**) con filtros básicos (**where**).',
            'Práctica: Crear nuevos usuarios y tareas, y leer todas las tareas en la aplicación To-Do.',
        ]},
    ]
};