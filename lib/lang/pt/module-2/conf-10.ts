import type { CurriculumTopic } from '../../../types';

export const conference10: CurriculumTopic = {
    id: 'conf-10',
    title: 'Conf. 10: Tab Navigator',
    content: [
      { type: 'heading', text: 'Palestra 10: Tab Navigator e Rotas Baseadas em Arquivos (2h)' },
      { type: 'list', items: [
          'Implementação da navegação inferior com Tab Navigator para diferentes seções da aplicação.',
          'Personalização detalhada de ícones, etiquetas e estilos das abas ativas e inativas.',
          'O papel do arquivo **_layout.tsx** dentro de um diretório de abas.',
          'Interação entre a navegação de abas e a pilha de navegação.',
      ]},
    ]
};