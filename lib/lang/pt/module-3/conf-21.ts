import type { CurriculumTopic } from '../../../types';

export const conference21: CurriculumTopic = {
    id: 'conf-21',
    title: 'Conf. 21: Migrações',
    content: [
        { type: 'heading', text: 'Palestra 21: Geração e Aplicação de Migrações (2h)' },
        { type: 'list', items: [
            'O que são migrações de bancos de dados e sua importância no ciclo de vida do desenvolvimento?',
            'Uso do **drizzle-kit generate** para criar arquivos de migração a partir das mudanças no esquema.',
            'Análise do conteúdo dos arquivos de migração gerados.',
            'Implementação da lógica para aplicar as migrações ao iniciar a aplicação.',
            'Prática: Gerar e aplicar migrações para os esquemas de usuários e tarefas.',
        ]},
    ]
};