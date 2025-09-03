import type { CurriculumTopic } from '../../../types';

export const conference21: CurriculumTopic = {
    id: 'conf-21',
    title: 'Conf. 21: Migraciones',
    content: [
        { type: 'heading', text: 'Conferencia 21: Generación y Aplicación de Migraciones (2h)' },
        { type: 'list', items: [
            '¿Qué son las migraciones de bases de datos y su importancia en el ciclo de vida del desarrollo?',
            'Uso de **drizzle-kit generate** para crear archivos de migración a partir de los cambios en el esquema.',
            'Análisis del contenido de los archivos de migración generados.',
            'Implementación de la lógica para aplicar las migraciones al iniciar la aplicación.',
            'Práctica: Generar y aplicar migraciones para los esquemas de usuarios y tareas.',
        ]},
    ]
};