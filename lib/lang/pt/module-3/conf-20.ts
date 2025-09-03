import type { CurriculumTopic } from '../../../types';

export const conference20: CurriculumTopic = {
    id: 'conf-20',
    title: 'Conf. 20: Esquemas Drizzle II',
    content: [
        { type: 'heading', text: 'Palestra 20: Definição de Esquemas com Drizzle ORM II (2h)' },
        { type: 'list', items: [
            'Implementação de colunas com valores padrão (**default**).',
            'Configuração de colunas únicas (**unique**) e obrigatórias (**notNull**).',
            'Estabelecimento de relações entre tabelas (ex. um-para-muitos, muitos-para-um) com **relations** do Drizzle.',
            'Uso de tipos **enum** para limitar valores a opções predefinidas.',
            'Prática: Definição do esquema para tarefas, incluindo relações com usuários.',
        ]},
    ]
};