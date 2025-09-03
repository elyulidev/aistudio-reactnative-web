import type { CurriculumTopic } from '../../../types';

export const conference19: CurriculumTopic = {
    id: 'conf-19',
    title: 'Conf. 19: Esquemas Drizzle I',
    content: [
        { type: 'heading', text: 'Conferencia 19: Definición de Esquemas con Drizzle ORM I (2h)' },
        { type: 'list', items: [
            'Conceptos básicos de esquemas y tablas en bases de datos relacionales.',
            'Definición de tablas simples utilizando constructores de Drizzle (**table**, **text**, **integer**, **boolean**, **real**).',
            'Tipos de datos específicos de SQLite y su mapeo en Drizzle.',
            'Definición de claves primarias (**primaryKey**) y campos auto-incrementales (**autoincrement**).',
            'Práctica: Definición del esquema inicial de usuarios para una aplicación To-Do.',
        ]},
    ]
};