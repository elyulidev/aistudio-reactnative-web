import type { CurriculumTopic } from '../../../types';

export const conference25: CurriculumTopic = {
    id: 'conf-25',
    title: 'Conf. 25: Drizzle Studio',
    content: [
        { type: 'heading', text: 'Palestra 25: Drizzle Studio e Depuração de Dados Locais (2h)' },
        { type: 'list', items: [
            'Integração e uso do Drizzle Studio como ferramenta visual para inspecionar e manipular o banco de dados local.',
            'Benefícios de uma interface gráfica para a depuração e compreensão da estrutura de dados.',
            'Visualização de tabelas, colunas e conteúdo do banco de dados.',
            'Prática: Utilizar o Drizzle Studio para verificar os dados da aplicação de Lista de Tarefas e corrigir possíveis erros.',
        ]},
    ]
};