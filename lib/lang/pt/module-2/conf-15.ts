import type { CurriculumTopic } from '../../../types';

export const conference15: CurriculumTopic = {
    id: 'conf-15',
    title: 'Conf. 15: Tipagem com TypeScript',
    content: [
      { type: 'heading', text: 'Palestra 15: Tipagem com TypeScript (2h)' },
      { type: 'list', items: [
          'Introdução e configuração do TypeScript em um projeto React Native.',
          'Benefícios do TypeScript: Segurança de tipos, refatoração mais segura e melhor manutenção do código.',
          'Declaração de tipos e interfaces para propriedades (props), estados (state) e dados.',
          'Integração do TypeScript com o Expo Router e componentes do React Native.',
      ]},
    ]
};