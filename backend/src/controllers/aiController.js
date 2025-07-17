import { streamText } from 'ai';
import { google } from '@ai-sdk/google';
import dotenv from 'dotenv';

dotenv.config();

async function chatWithAI(req, res) {
    try {
        const { message } = req.body;
        
        if (!message) {
            return res.status(400).json({ error: "Message is required" });
        }

        if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
            console.error('Google AI API key not found in environment variables');
            return res.status(500).json({ error: "AI service configuration error" });
        }

        const result = await streamText({
            model: google('gemini-1.5-flash'),
            system: `Você é um assistente especializado em Blue Lock, o anime/mangá sobre futebol. 
            Você tem conhecimento sobre todos os personagens, jogadores, times, técnicas e história do Blue Lock.
            Responda de forma detalhada e entusiasmada sobre qualquer pergunta relacionada ao Blue Lock.
            Se perguntarem sobre algo não relacionado ao Blue Lock, gentilmente redirecione a conversa para o tema.`,
            messages: [
                {
                    role: 'user',
                    content: message
                }
            ]
        });

        let responseText = '';
        for await (const chunk of result.textStream) {
            responseText += chunk;
        }

        res.json({ response: responseText });
    } catch (error) {
        console.error('Error in AI chat:', error);
        res.status(500).json({ error: "Error processing AI request" });
    }
}

export {
    chatWithAI
}