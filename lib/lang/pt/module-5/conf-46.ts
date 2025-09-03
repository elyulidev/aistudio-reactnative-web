import type { CurriculumTopic } from '../../../types';

export const conference46: CurriculumTopic = {
    id: 'conf-46',
    title: 'Conf. 46: Mini Projeto de Mídia Social',
    content: [
        { type: 'heading', text: 'Palestra 46: Mini Projeto: Mídia Social (Feed e Postagens Locais) (2h)' },
        { type: 'list', items: [
            'Projeto: Design de um feed de publicações (semelhante ao X/Twitter ou Instagram) onde as postagens são gerenciadas localmente.',
            'Implementação da criação de publicações com texto e imagens (armazenadas localmente com **expo-file-system**).',
            'Interações básicas como "Curtidas" e "Comentários" (gerenciadas completamente no SQLite).',
            'Prática: Construção da UI do feed e da lógica para criar e interagir com publicações.',
        ]},
    ]
};