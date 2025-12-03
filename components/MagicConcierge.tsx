import React, { useState } from 'react';
import { GoogleGenAI, Type, Schema } from "@google/genai";
import { SparklesIcon, SendIcon, ArrowRightIcon } from './ui/Icons';
import { MagicResponse } from '../types';

const MagicConcierge: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<MagicResponse | null>(null);

  const handleMagic = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResult(null);

    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        throw new Error("API Key not found");
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
        setResult(JSON.parse(text) as MagicResponse);
      }
    } catch (e) {
      console.error(e);
      // Fallback for demo purposes if API fails or no key
      setResult({
        title: "Néant",
        tagline: "Là où le silence rencontre le bruit numérique.",
        concept: "Les esprits de l'API sont silencieux aujourd'hui. Vérifiez votre clé et réessayez d'invoquer les démons numériques."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative group overflow-hidden rounded-3xl p-8 h-full min-h-[400px] flex flex-col justify-between glass-card border-t border-white/10 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)]">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-woodoo-accent/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4 text-woodoo-accent">
          <SparklesIcon className={`w-5 h-5 ${loading ? 'animate-spin-slow' : ''}`} />
          <span className="text-xs font-bold uppercase tracking-widest opacity-80">IA Woodoo</span>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-light leading-tight mb-2">
          Invoquer un <span className="font-serif italic text-white">Concept</span>
        </h3>
        <p className="text-neutral-500 text-sm mb-6">
          Murmurez une idée à notre concierge IA et regardez-la tisser une prophétie numérique.
        </p>
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-end">
        {result ? (
          <div className="mb-6 animate-[fadeIn_0.5s_ease-out]">
            <div className="text-4xl font-serif italic mb-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
              {result.title}
            </div>
            <div className="text-xs font-bold tracking-widest text-woodoo-accent mb-3 uppercase">
              {result.tagline}
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed border-l-2 border-woodoo-accent/20 pl-3">
              {result.concept}
            </p>
            <button 
              onClick={() => { setResult(null); setPrompt(''); }}
              className="mt-4 text-xs text-white/40 hover:text-white transition-colors flex items-center gap-1"
            >
              Réinitialiser le Rituel <ArrowRightIcon className="w-3 h-3" />
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="ex: Un réseau social pour rêver..."
              className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-woodoo-accent/50 focus:ring-1 focus:ring-woodoo-accent/50 transition-all resize-none h-24"
              disabled={loading}
            />
            <button
              onClick={handleMagic}
              disabled={loading || !prompt}
              className={`w-full py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                loading || !prompt 
                  ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed' 
                  : 'bg-white text-black hover:bg-woodoo-accent hover:text-white shadow-lg shadow-white/5'
              }`}
            >
              {loading ? (
                <span>Incantation...</span>
              ) : (
                <>
                  <span>Manifester</span>
                  <SendIcon className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MagicConcierge;