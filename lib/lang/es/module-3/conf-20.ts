import type { CurriculumTopic } from '../../../types';

export const conference20: CurriculumTopic = {
    id: 'conf-20',
    title: 'Conf. 20: Esquemas Drizzle II',
    content: [
        { type: 'heading', text: 'Conferencia 20: Definición de Esquemas con Drizzle ORM II (2h)' },
        { type: 'list', items: [
            'Implementación de columnas com valores por defecto (**default**).',
            'Configuración de columnas únicas (**unique**) y obligatorias (**notNull**).',
            'Establecimiento de relaciones entre tablas (ej. one-to-many, many-to-one) con **relations** de Drizzle.',
            'Uso de tipos **enum** para limitar valores a opciones predefinidas.',
            'Práctica: Definición del esquema para tareas, incluyendo relaciones con usuarios.',
        ]},
    ]
};