import type { CurriculumTopic } from '../../../types';

export const conference23: CurriculumTopic = {
    id: 'conf-23',
    title: 'Conf. 23: CRUD (Actualizar y Borrar)',
    content: [
        { type: 'heading', text: 'Conferencia 23: Operaciones CRUD Básicas (Actualizar y Borrar) (2h)' },
        { type: 'list', items: [
            'Implementación de la operación de actualización de datos (**update**).',
            'Realización de la operación de eliminación de datos (**delete**).',
            'Breve introducción al concepto de transacciones en bases de datos.',
            'Práctica: Actualizar el estado de una tarea (completada/incompleta) y eliminar tareas específicas en la aplicación To-Do.',
        ]},
    ]
};