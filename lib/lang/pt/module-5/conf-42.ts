import type { CurriculumTopic } from '../../../types';

export const conference42: CurriculumTopic = {
    id: 'conf-42',
    title: 'Conf. 42: Mini Projeto de Imóveis II',
    content: [
        { type: 'heading', text: 'Palestra 42: Aplicação de Imóveis (Detalhes e Formulários) (2h)' },
        { type: 'list', items: [
            'Desenvolvimento de uma tela de detalhes de propriedade com múltiplas seções (galeria de imagens, descrição, características, avaliações, etc.).',
            'Criação de formulários para adicionar ou editar propriedades, com validação de entrada de dados, armazenando as alterações localmente.',
            'Prática: Implementação da tela de detalhes de propriedade e formulários interativos.',
        ]},
    ]
};