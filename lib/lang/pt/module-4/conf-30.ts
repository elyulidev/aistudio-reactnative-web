import type { CurriculumTopic } from '../../../types';

export const conference30: CurriculumTopic = {
    id: 'conf-30',
    title: 'Conf. 30: FlatList',
    content: [
        { type: 'heading', text: 'Palestra 30: Listas Grandes e Desempenho: FlatList (2h)' },
        { type: 'list', items: [
            'Análise dos problemas de desempenho ao renderizar listas longas com **ScrollView**.',
            'Introdução ao **FlatList** como componente otimizado para listas extensas.',
            'Propriedades essenciais do FlatList: **data**, **renderItem**, **keyExtractor** e **ListEmptyComponent**.',
            'Prática: Migração de uma lista de **ScrollView** para **FlatList** para mejorar o desempenho.',
        ]},
    ]
};