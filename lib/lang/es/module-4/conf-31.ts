import type { CurriculumTopic } from '../../../types';

export const conference31: CurriculumTopic = {
    id: 'conf-31',
    title: 'Conf. 31: FlatList Avanzado',
    content: [
        { type: 'heading', text: 'Conferencia 31: Características Avanzadas de FlatList (2h)' },
        { type: 'list', items: [
            'Implementación de **onEndReached** para la carga infinita (infinite scrolling) de datos.',
            'Uso de **ListHeaderComponent** y **ListFooterComponent** para añadir contenido a los extremos de la lista.',
            'Integración de **RefreshControl** para la funcionalidad "pull to refresh".',
            'Práctica: Añadir carga infinita y "pull to refresh" a una lista de elementos.',
        ]},
    ]
};