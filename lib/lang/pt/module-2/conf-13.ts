import type { CurriculumTopic } from '../../../types';

export const conference13: CurriculumTopic = {
    id: 'conf-13',
    title: 'Conf. 13: Estado Local e Context API',
    content: [
      { type: 'heading', text: 'Palestra 13: Gerenciamento de Estado Local e Context API (2h)' },
      { type: 'list', items: [
          'Uso avançado de **useState** e **useEffect** para o gerenciamento do estado dentro de componentes funcionais.',
          'Introdução ao Context API do React para o gerenciamento do estado global na aplicação.',
          'Criação de um provedor de contexto e um hook personalizado para consumir o contexto.',
          'Análise das vantagens e desvantagens do Context API em diferentes cenários.',
      ]},
    ]
};