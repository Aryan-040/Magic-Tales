import { GoogleGenAI } from '@google/genai';

export async function generateStoryWithGemini(prompt: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('Gemini API key missing. Set GEMINI_API_KEY (preferred) or NEXT_PUBLIC_GEMINI_API_KEY in .env.local and restart.');
  }
  const ai = new GoogleGenAI({ apiKey });

  const model = 'gemini-1.5-flash';
  const contents = [
    {
      role: 'user',
      parts: [{ text: prompt }],
    },
  ];

  const response = await ai.models.generateContent({
    model,
    contents,
  });

  const parts = response?.candidates?.[0]?.content?.parts ?? [];
  const text = parts
    .map((p: any) => (typeof p.text === 'string' ? p.text : ''))
    .join('')
    .trim();
  return text;
}
  