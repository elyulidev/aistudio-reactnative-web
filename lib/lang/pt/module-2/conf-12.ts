import type { CurriculumTopic } from '../../../types';

export const conference12: CurriculumTopic = {
    id: 'conf-12',
    title: 'Conf. 12: Agrupamento de Rotas',
    content: [
      { type: 'heading', text: 'Palestra 12: Agrupamento de Rotas e Layouts Específicos (2h)' },
      { type: 'list', items: [
          'Uso de pastas com parênteses **()** para agrupar rotas e controlar como elas aparecem na URL.',
          'Aplicação de layouts condicionais para grupos de rotas específicos.',
          'Gerenciamento de rotas que não pertencem a um Tab Navigator (ex. uma tela de detalhes que não tem abas inferiores).',
          'Prática: Aplicar agrupamentos de rotas para diferenciar layouts em uma aplicação de Imóveis ou Entrega de Comida.',
      ]},
    ]
};