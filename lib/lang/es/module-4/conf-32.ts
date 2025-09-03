import type { CurriculumTopic } from '../../../types';

export const conference32: CurriculumTopic = {
    id: 'conf-32',
    title: 'Conf. 32: Mini Proyecto Películas I',
    content: [
        { type: 'heading', text: 'Conferencia 32: Mini Proyecto: App de Películas/Recetas (Búsqueda) (2h)' },
        { type: 'list', items: [
            'Proyecto: Creación de una aplicación para buscar películas o recetas, integrando una API externa (TheMovieDB o TheMealDB).',
            'Implementación de una pantalla de búsqueda con **TextInput** y debouncing.',
            'Visualización de los resultados de búsqueda utilizando **FlatList** y manejo de los estados de carga y error.',
            'Construcción de la interfaz de usuario para la pantalla de búsqueda y visualización de resultados.',
        ]},
    ]
};