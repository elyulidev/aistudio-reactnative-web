import type { CurriculumTopic } from '../../../types';

export const conference33: CurriculumTopic = {
    id: 'conf-33',
    title: 'Conf. 33: Mini Projeto de Filmes II',
    content: [
        { type: 'heading', text: 'Palestra 33: App de Filmes/Receitas (Detalhes e Salvamento Local) (2h)' },
        { type: 'list', items: [
            'Projeto e desenvolvimento de uma tela de detalhes para exibir informações estendidas de um filme ou receita selecionada.',
            'Extração de parâmetros de rota para carregar os dados específicos do item.',
            'Implementação de uma funcionalidade para salvar itens como "favoritos" localmente utilizando SQLite e Drizzle ORM.',
            'Prática: Construção da UI de detalhes e da lógica para adicionar/remover dos favoritos.',
        ]},
    ]
};