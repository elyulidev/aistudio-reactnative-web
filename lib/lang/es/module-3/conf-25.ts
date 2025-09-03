import type { CurriculumTopic } from '../../../types';

export const conference25: CurriculumTopic = {
    id: 'conf-25',
    title: 'Conf. 25: Drizzle Studio',
    content: [
        { type: 'heading', text: 'Conferencia 25: Drizzle Studio y Depuración de Datos Locales (2h)' },
        { type: 'list', items: [
            'Integración y uso de Drizzle Studio como herramienta visual para inspeccionar y manipular la base de datos local.',
            'Beneficios de una interfaz gráfica para la depuración y comprensión de la estructura de datos.',
            'Visualización de tablas, columnas y contenido de la base de datos.',
            'Práctica: Utilizar Drizzle Studio para verificar los datos de la aplicación To-Do y corregir posibles errores.',
        ]},
    ]
};