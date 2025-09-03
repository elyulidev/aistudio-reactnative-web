import type { CurriculumTopic } from '../../../types';

export const conference5: CurriculumTopic = {
    id: 'conf-5',
    title: 'Conf. 5: Estilización y StyleSheet',
    content: [
      { type: 'heading', text: 'Conferencia 5: Estilización Básica y StyleSheet (2h)' },
      { type: 'list', items: [
          'El modelo de caja en React Native y cómo difiere del web.',
          'Creación y gestión de estilos con **StyleSheet.create()**.',
          'Dominando flexbox en React Native (recordando que la dirección predeterminada es **column**).',
          'Ventajas de usar StyleSheet frente a estilos en línea.',
          'Introducción a la creación y gestión de temas para tu aplicación.',
      ]},
    ]
};