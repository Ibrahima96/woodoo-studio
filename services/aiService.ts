import { GoogleGenAI, Type, Schema } from "@google/genai";
import { MagicResponse } from "../types";

/**
 * Generates a magic concept using AI.
 * Tries Gemini first, then falls back to Groq if Gemini fails.
 */
export async function generateMagicConcept(prompt: string): Promise<MagicResponse> {
    // Try Gemini first
    try {
        const apiKey = process.env.API_KEY;
        if (!apiKey) {
            throw new Error("Gemini API Key not found");
        }

        const ai = new GoogleGenAI({ apiKey });

        const schema: Schema = {
            type: Type.OBJECT,
            properties: {
                title: { type: Type.STRING, description: "A mystical, one-word title for the project in French" },
                tagline: { type: Type.STRING, description: "A short, punchy, 5-word tagline in French" },
                concept: { type: Type.STRING, description: "A 2-sentence mysterious description of the digital experience in French." },
            },
            required: ["title", "tagline", "concept"],
        };

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `You are Woodoo, a digital alchemy studio. The user has an idea: "${prompt}". Transform this simple idea into a high-end, mysterious digital product concept. Respond in French.`,
            config: {
                responseMimeType: "application/json",
                responseSchema: schema,
                systemInstruction: "You are a creative director at a high-end avant-garde design studio. You speak in riddles and elegance. Language: French.",
            }
        });

        const text = response.text;
        if (text) {
            console.log("✅ Gemini API succeeded");
            return JSON.parse(text) as MagicResponse;
        }
    } catch (geminiError) {
        console.warn("⚠️ Gemini API failed, trying Groq fallback...", geminiError);

        // Try Groq as fallback
        try {
            const groqApiKey = process.env.GROQ_API_KEY;
            if (!groqApiKey) {
                throw new Error("Groq API Key not found");
            }

            const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${groqApiKey}`,
                },
                body: JSON.stringify({
                    model: "llama-3.3-70b-versatile",
                    messages: [
                        {
                            role: "system",
                            content: "You are a creative director at a high-end avant-garde design studio. You speak in riddles and elegance. Language: French. Always respond with valid JSON in this exact format: {\"title\": \"one word\", \"tagline\": \"5 words max\", \"concept\": \"2 sentences\"}",
                        },
                        {
                            role: "user",
                            content: `You are Woodoo, a digital alchemy studio. The user has an idea: "${prompt}". Transform this simple idea into a high-end, mysterious digital product concept. Respond in French with JSON only.`,
                        },
                    ],
                    temperature: 0.8,
                    response_format: { type: "json_object" },
                }),
            });

            if (!groqResponse.ok) {
                throw new Error(`Groq API error: ${groqResponse.status} ${groqResponse.statusText}`);
            }

            const groqData = await groqResponse.json();
            const content = groqData.choices?.[0]?.message?.content;

            if (content) {
                console.log("✅ Groq API succeeded");
                return JSON.parse(content) as MagicResponse;
            }
        } catch (groqError) {
            console.error("❌ Groq API also failed:", groqError);
        }
    }

    // Static fallback if both fail
    console.log("⚠️ Using static fallback");
    return {
        title: "Néant",
        tagline: "Là où le silence rencontre le bruit numérique.",
        concept: "Les esprits de l'API sont silencieux aujourd'hui. Vérifiez vos clés et réessayez d'invoquer les démons numériques."
    };
}
