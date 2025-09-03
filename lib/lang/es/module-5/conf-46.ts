import type { CurriculumTopic } from '../../../types';

export const conference46: CurriculumTopic = {
    id: 'conf-46',
    title: 'Conf. 46: Mini Proyecto Social Media',
    content: [
        { type: 'heading', text: 'Conferencia 46: Mini Proyecto: Social Media (Feed y Posts Locales) (2h)' },
        { type: 'list', items: [
            'Proyecto: Diseño de un feed de publicaciones (similar a X/Twitter o Instagram) donde los posts se gestionan localmente.',
            'Implementación de la creación de publicaciones con texto e imágenes (almacenadas localmente con **expo-file-system**).',
            'Interacciones básicas como "Likes" y "Comentarios" (gestionados completamente en SQLite).',
            'Práctica: Construcción de la UI del feed y la lógica para crear y interactuar con publicaciones.',
        ]},
    ]
};