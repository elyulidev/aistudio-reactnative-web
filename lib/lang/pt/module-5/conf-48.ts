import type { CurriculumTopic } from '../../../types';

export const conference48: CurriculumTopic = {
    id: 'conf-48',
    title: 'Conf. 48: Recapitulação',
    content: [
        { type: 'heading', text: 'Conferência 48: Recapitulação e Rota de Aprendizagem Contínua (2h)' },
        { type: 'list', items: [
            'Resumo exaustivo de todos os conceitos, ferramentas e tecnologias abordadas no bootcamp.',
            'Orientação sobre recursos para a aprendizagem contínua (documentação oficial, comunidades, cursos avançados de React Native).',
            'Dicas para o desenvolvimento profissional como engenheiro móvel e como continuar crescendo na indústria.',
        ]},
        { type: 'divider' },
        { type: 'heading', text: 'Exame Final: Teste os seus conhecimentos!' },
        { 
          type: 'quiz', 
          questions: [
            { 
              "question": "Qual é o componente principal no React Native para criar contentores e aplicar estilos de layout, semelhante a um `<div>` na web?", 
              "options": ["<Text>", "<View>", "<Container>", "<Box>"], 
              "correctAnswer": 1 
            },
            { 
              "question": "No Expo Router, como se cria uma rota dinâmica para exibir os detalhes de um produto com um ID específico?", 
              "options": ["app/products/(id).tsx", "app/products/[id].tsx", "app/products/{id}.tsx", "app/products/id.tsx"], 
              "correctAnswer": 1 
            },
            { 
              "question": "Qual é a principal vantagem de usar `FlatList` em vez de `ScrollView` para exibir uma longa lista de dados?", 
              "options": ["`FlatList` é mais fácil de estilizar.", "`FlatList` renderiza apenas os itens visíveis na tela, melhorando o desempenho.", "`ScrollView` não permite rolagem vertical.", "`FlatList` tem suporte para animações por padrão."], 
              "correctAnswer": 1 
            },
            { 
              "question": "Que comando do Drizzle Kit é utilizado para gerar os ficheiros de migração SQL a partir das alterações no seu esquema?", 
              "options": ["drizzle-kit push", "drizzle-kit apply", "drizzle-kit generate", "drizzle-kit migrate"], 
              "correctAnswer": 2
            },
            { 
              "question": "Para aplicar classes do Tailwind CSS num componente React Native usando NativeWind, que prop é utilizada?", 
              "options": ["style", "tw", "className", "css"], 
              "correctAnswer": 2
            }
          ]
        }
    ]
};