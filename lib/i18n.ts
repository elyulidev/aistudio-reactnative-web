import { esCurriculum } from './lang/es';
import { ptCurriculum } from './lang/pt';

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
    },
    curriculum: ptCurriculum,
  },
};
