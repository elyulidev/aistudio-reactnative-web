import type { CurriculumTopic } from '../../../types';

export const conference30: CurriculumTopic = {
    id: 'conf-30',
    title: 'Conf. 30: FlatList',
    content: [
        { type: 'heading', text: 'Conferencia 30: Listas Grandes y Rendimiento: FlatList (2h)' },
        { type: 'list', items: [
            'Análisis de los problemas de rendimiento al renderizar listas largas con **ScrollView**.',
            'Introducción a **FlatList** como componente optimizado para listas extensas.',
            'Propiedades esenciales de FlatList: **data**, **renderItem**, **keyExtractor** y **ListEmptyComponent**.',
            'Práctica: Migración de una lista de **ScrollView** a **FlatList** para mejorar el rendimiento.',
        ]},
    ]
};