import type { CurriculumTopic } from '../../../types';

export const conference9: CurriculumTopic = {
    id: 'conf-9',
    title: 'Conf. 9: Expo Router',
    content: [
      { type: 'heading', text: 'Palestra 9: Introdução à Navegação com Expo Router (2h)' },
      { type: 'list', items: [
          'Princípios fundamentais da navegação em aplicações móveis.',
          'Expo Router: Um sistema de roteamento moderno baseado na estrutura de arquivos do seu projeto.',
          'Stack Navigator: Criando pilhas de telas navegáveis. **_layout.tsx**, **index.tsx**, **screen.tsx** como arquivos especiais.',
          'Configuração de opções de tela: **headerShown**, **title** e personalização da barra de título.',
          'Gerenciamento de redirecionamentos e fluxos de navegação.',
      ]},
    ]
};