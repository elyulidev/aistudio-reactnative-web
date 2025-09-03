import { esCurriculum } from './lang/es/index';
import { ptCurriculum } from './lang/pt/index';

export const translations = {
  es: {
    ui: {
      copy: 'Copiar',
      copied: 'Copiado',
      chatTitle: 'Asistente IA',
      chatGreeting: '¡Hola! Soy tu asistente de IA. ¿Tienes alguna pregunta sobre "{topicContext}"?',
      chatPlaceholder: 'Haz una pregunta...',
      chatError: 'Lo siento, ha ocurrido un error. Por favor, inténtalo de nuevo.',
      sidebarTitle: 'Opcional I',
      sidebarSubtitle: 'React Native + Expo',
      moduleOverview: 'Resumen del Módulo',
      quizQuestion: 'Pregunta {current} de {total}',
      quizNext: 'Siguiente',
      quizSubmit: 'Enviar',
      quizYourScore: 'Tu Puntuación',
      quizScore: '{score}% Correcto',
      quizTryAgain: 'Intentar de nuevo',
    },
    curriculum: esCurriculum,
  },
  pt: {
    ui: {
      copy: 'Copiar',
      copied: 'Copiado',
      chatTitle: 'Assistente de IA',
      chatGreeting: 'Olá! Sou seu assistente de IA. Você tem alguma pergunta sobre "{topicContext}"?',
      chatPlaceholder: 'Faça uma pergunta...',
      chatError: 'Desculpe, ocorreu um erro. Por favor, tente novamente.',
      sidebarTitle: 'Opcional I',
      sidebarSubtitle: 'React Native + Expo',
      moduleOverview: 'Resumo do Módulo',
      quizQuestion: 'Pergunta {current} de {total}',
      quizNext: 'Próximo',
      quizSubmit: 'Enviar',
      quizYourScore: 'Sua Pontuação',
      quizScore: '{score}% Correto',
      quizTryAgain: 'Tentar novamente',
    },
    curriculum: ptCurriculum,
  },
};