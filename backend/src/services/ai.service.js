import { GoogleGenAI } from "@google/genai";

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is missing. Add it to your .env file.");
}
if (!process.env.GEMINI_MODEL) {
  throw new Error("GEMINI_MODEL is missing. Add it to your .env file.");
}

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const model = process.env.GEMINI_MODEL;

async function generateContent(prompt) {
  if (!prompt || typeof prompt !== "string") {
    throw new Error("Prompt must be a non-empty string");
  }

  const response = await ai.models.generateContent({
    model,
    contents: prompt,
  });

  return response.text;
}

export default generateContent;