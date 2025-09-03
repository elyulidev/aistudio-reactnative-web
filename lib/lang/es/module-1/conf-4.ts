import type { CurriculumTopic } from '../../../types';

export const conference4: CurriculumTopic = {
    id: 'conf-4',
    title: 'Conf. 4: Componentes UI II',
    content: [
      { type: 'heading', text: 'Conferencia 4: Componentes Esenciales de la UI II (2h)' },
      { type: 'list', items: [
          '**TouchableOpacity**: Creación de botones con retroalimentación visual al tacto.',
          '**ScrollView**: Haciendo que tu contenido sea desplazable para listas largas.',
          '**SafeAreaView**: Componente crucial para evitar superposiciones con la barra de estado, muescas y el área de gestos en dispositivos modernos.',
          '**KeyboardAvoidingView**: Ajustando la UI automáticamente para evitar que el teclado virtual oculte los inputs.',
          'Comparativa de componentes y conceptos entre el desarrollo web y React Native.',
      ]},
    ]
};