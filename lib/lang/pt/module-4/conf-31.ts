import type { CurriculumTopic } from '../../../types';

export const conference31: CurriculumTopic = {
    id: 'conf-31',
    title: 'Conf. 31: FlatList Avançado',
    content: [
        { type: 'heading', text: 'Palestra 31: Recursos Avançados do FlatList (2h)' },
        { type: 'list', items: [
            'Implementação de **onEndReached** para o carregamento infinito (infinite scrolling) de dados.',
            'Uso de **ListHeaderComponent** e **ListFooterComponent** para adicionar conteúdo aos extremos da lista.',
            'Integração de **RefreshControl** para a funcionalidade "puxar para atualizar".',
            'Prática: Adicionar carregamento infinito e "puxar para atualizar" a uma lista de itens.',
        ]},
    ]
};