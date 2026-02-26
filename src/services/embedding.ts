import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function getEmbedding(text: string): Promise<number[]> {
  const model = genAI.getGenerativeModel({
    model: "embedding-001",
  });

  const result = await model.embedContent(text);
  return result.embedding.values;
}