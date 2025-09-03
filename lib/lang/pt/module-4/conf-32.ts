import type { CurriculumTopic } from '../../../types';

export const conference32: CurriculumTopic = {
    id: 'conf-32',
    title: 'Conf. 32: Mini Projeto de Filmes I',
    content: [
        { type: 'heading', text: 'Palestra 32: Mini Projeto: App de Filmes/Receitas (Busca) (2h)' },
        { type: 'list', items: [
            'Projeto: Criação de uma aplicação para buscar filmes ou receitas, integrando uma API externa (TheMovieDB ou TheMealDB).',
            'Implementação de uma tela de busca com **TextInput** e debouncing.',
            'Visualização dos resultados de busca utilizando **FlatList** e gerenciamento dos estados de carregamento e erro.',
            'Construção da interface do usuário para a tela de busca e visualização de resultados.',
        ]},
    ]
};