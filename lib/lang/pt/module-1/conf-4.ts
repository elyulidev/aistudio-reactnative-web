import type { CurriculumTopic } from '../../../types';

export const conference4: CurriculumTopic = {
    id: 'conf-4',
    title: 'Conf. 4: Componentes de UI II',
    content: [
      { type: 'heading', text: 'Palestra 4: Componentes Essenciais da UI II (2h)' },
      { type: 'list', items: [
          '**TouchableOpacity**: Criação de botões com feedback visual ao toque.',
          '**ScrollView**: Tornando seu conteúdo rolável para listas longas.',
          '**SafeAreaView**: Componente crucial para evitar sobreposições com a barra de status, entalhes e a área de gestos em dispositivos modernos.',
          '**KeyboardAvoidingView**: Ajustando a UI automaticamente para evitar que o teclado virtual oculte as entradas.',
          'Comparação de componentes e conceitos entre o desenvolvimento web e o React Native.',
      ]},
    ]
};