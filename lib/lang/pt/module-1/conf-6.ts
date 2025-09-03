import type { CurriculumTopic } from '../../../types';

export const conference6: CurriculumTopic = {
    id: 'conf-6',
    title: 'Conf. 6: NativeWind e Tailwind',
    content: [
      { type: 'heading', text: 'Palestra 6: Estilização Avançada com NativeWind e Tailwind CSS (2h)' },
      { type: 'list', items: [
          'Instalação e configuração do NativeWind para integrar o Tailwind CSS no React Native.',
          'Uso de classes do Tailwind CSS para estilos rápidos, consistentes e responsivos.',
          'Aproveitando a funcionalidade do IntelliSense e personalizando o tema do Tailwind.',
          'Gerenciamento de um arquivo **globals.css** para classes de utilidade reutilizáveis.',
          'Prática: Refatoração de estilos de componentes existentes usando NativeWind.',
      ]},
    ]
};