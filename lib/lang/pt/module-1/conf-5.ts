import type { CurriculumTopic } from '../../../types';

export const conference5: CurriculumTopic = {
    id: 'conf-5',
    title: 'Conf. 5: Estilização e StyleSheet',
    content: [
      { type: 'heading', text: 'Palestra 5: Estilização Básica e StyleSheet (2h)' },
      { type: 'list', items: [
          'O modelo de caixa no React Native e como ele difere da web.',
          'Criação e gerenciamento de estilos com **StyleSheet.create()**.',
          'Dominando o flexbox no React Native (lembrando que a direção padrão é **column**).',
          'Vantagens de usar StyleSheet em vez de estilos em linha.',
          'Introdução à criação e gerenciamento de temas para sua aplicação.',
      ]},
    ]
};