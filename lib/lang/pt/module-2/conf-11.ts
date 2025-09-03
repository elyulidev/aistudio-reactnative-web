import type { CurriculumTopic } from '../../../types';

export const conference11: CurriculumTopic = {
    id: 'conf-11',
    title: 'Conf. 11: Rotas Aninhadas e Dinâmicas',
    content: [
      { type: 'heading', text: 'Palestra 11: Rotas Aninhadas e Dinâmicas com Expo Router (2h)' },
      { type: 'list', items: [
          'Estratégias para a criação de rotas aninhadas para organizar seções da aplicação.',
          'Implementação de rotas dinâmicas para exibir detalhes de itens específicos (ex. **/movie/[id].tsx**).',
          'Extração de parâmetros de rota utilizando o hook **useLocalSearchParams**.',
          'Prática: Desenvolvimento de rotas dinâmicas para uma tela de detalhes de filmes ou produtos.',
      ]},
    ]
};