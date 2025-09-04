import type { CurriculumTopic } from '../../../types';

export const conference48: CurriculumTopic = {
    id: 'conf-48',
    title: 'Conf. 48: Recapitulación',
    content: [
        { type: 'heading', text: 'Conferencia 48: Recapitulación y Ruta de Aprendizaje Continuo (2h)' },
        { type: 'list', items: [
            'Resumen exhaustivo de todos los conceptos, herramientas y tecnologías cubiertas en el bootcamp.',
            'Orientación sobre recursos para el aprendizaje continuo (documentación oficial, comunidades, cursos avanzados de React Native).',
            'Consejos para el desarrollo profesional como ingeniero móvil y cómo seguir creciendo en la industria.',
        ]},
        { type: 'divider' },
        { type: 'heading', text: 'Examen Final: ¡Pon a prueba tus conocimientos!' },
        { 
          type: 'quiz', 
          questions: [
            { 
              "question": "¿Cuál es el componente principal en React Native para crear contenedores y aplicar estilos de layout, similar a un `<div>` en la web?", 
              "options": ["<Text>", "<View>", "<Container>", "<Box>"], 
              "correctAnswer": 1 
            },
            { 
              "question": "En Expo Router, ¿cómo se crea una ruta dinámica para mostrar el detalle de un producto con un ID específico?", 
              "options": ["app/products/(id).tsx", "app/products/[id].tsx", "app/products/{id}.tsx", "app/products/id.tsx"], 
              "correctAnswer": 1 
            },
            { 
              "question": "¿Cuál es la principal ventaja de usar `FlatList` en lugar de `ScrollView` para mostrar una lista larga de datos?", 
              "options": ["`FlatList` es más fácil de estilizar.", "`FlatList` solo renderiza los elementos visibles en pantalla, mejorando el rendimiento.", "`ScrollView` no permite el desplazamiento vertical.", "`FlatList` tiene soporte para animaciones por defecto."], 
              "correctAnswer": 1 
            },
            { 
              "question": "¿Qué comando de Drizzle Kit se utiliza para generar los archivos de migración SQL a partir de los cambios en tu esquema?", 
              "options": ["drizzle-kit push", "drizzle-kit apply", "drizzle-kit generate", "drizzle-kit migrate"], 
              "correctAnswer": 2
            },
            { 
              "question": "Para aplicar clases de Tailwind CSS en un componente de React Native usando NativeWind, ¿qué prop se utiliza?", 
              "options": ["style", "tw", "className", "css"], 
              "correctAnswer": 2
            }
          ]
        }
    ]
};