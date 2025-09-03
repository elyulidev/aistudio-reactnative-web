import type { CurriculumTopic } from '../../../types';

export const conference33: CurriculumTopic = {
    id: 'conf-33',
    title: 'Conf. 33: Mini Proyecto Películas II',
    content: [
        { type: 'heading', text: 'Conferencia 33: App de Películas/Recetas (Detalles y Guardado Local) (2h)' },
        { type: 'list', items: [
            'Diseño y desarrollo de una pantalla de detalles para mostrar información extendida de una película o receta seleccionada.',
            'Extracción de parámetros de ruta para cargar los datos específicos del elemento.',
            'Implementación de una funcionalidad para guardar elementos como "favoritos" localmente utilizando SQLite y Drizzle ORM.',
            'Práctica: Construcción de la UI de detalles y la lógica para añadir/eliminar de favoritos.',
        ]},
    ]
};