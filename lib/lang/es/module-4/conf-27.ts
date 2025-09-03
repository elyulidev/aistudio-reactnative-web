import type { CurriculumTopic } from '../../../types';

export const conference27: CurriculumTopic = {
    id: 'conf-27',
    title: 'Conf. 27: Consumo de APIs',
    content: [
        { type: 'heading', text: 'Conferencia 27: Consumo de APIs Externas (2h)' },
        { type: 'list', items: [
            'Realización de peticiones HTTP utilizando **fetch** o **axios** para interactuar con servicios web.',
            'Manejo y transformación de datos en formato JSON.',
            'Trabajo con APIs REST públicas (ej. TheMovieDB para películas, TheMealDB para recetas).',
            'Gestión segura de claves API y otras variables de entorno locales (.env).',
        ]},
    ]
};