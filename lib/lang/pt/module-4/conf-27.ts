import type { CurriculumTopic } from '../../../types';

export const conference27: CurriculumTopic = {
    id: 'conf-27',
    title: 'Conf. 27: Consumo de APIs',
    content: [
        { type: 'heading', text: 'Palestra 27: Consumo de APIs Externas (2h)' },
        { type: 'list', items: [
            'Realização de requisições HTTP utilizando **fetch** ou **axios** para interagir com serviços web.',
            'Manuseio e transformação de dados no formato JSON.',
            'Trabalho com APIs REST públicas (ex. TheMovieDB para filmes, TheMealDB para receitas).',
            'Gerenciamento seguro de chaves de API e outras variáveis de ambiente locais (.env).',
        ]},
    ]
};