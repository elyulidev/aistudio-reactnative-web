
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might show an error to the user or disable AI features.
  // For this example, we'll throw an error if the key is missing.
  // This helps identify configuration issues early.
  console.error("API_KEY is not set in environment variables.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const createChatSession = (topicContext: string): Chat => {
  const model = 'gemini-2.5-flash';
  const chat = ai.chats.create({
    model: model,
    config: {
      systemInstruction: `Eres un asistente experto y amigable para estudiantes universitarios que aprenden a programar con React Native y Expo. Tu objetivo es explicar conceptos de forma clara y concisa. 
      Contexto actual del estudiante: ${topicContext}. 
      Responde siempre en español. No uses markdown en tus respuestas.`,
    },
  });
  return chat;
};

export const sendMessageToAI = async (chat: Chat, message: string): Promise<AsyncGenerator<GenerateContentResponse>> => {
  const result = await chat.sendMessageStream({ message });
  return result;
};
