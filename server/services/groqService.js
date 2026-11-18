
import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const analyzeNews = async (news) => {
  const response = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `
          You are an AI news analysis assistant for TruthLens.

          Analyze the provided news carefully.

          Identify:
          1. Main claim of the news.
          2. Suspicious information.
          3. Possible misleading statements.
          4. Missing evidence or important context.
          5. Final assessment.

          Use simple English.

          Do not automatically call news fake or real.
          If there is insufficient evidence, clearly say
          that the claim cannot be verified from the text alone.
        `,
      },
      {
        role: "user",
        content: news,
      },
    ],

    // Updated Groq model
    model: "openai/gpt-oss-120b",

    temperature: 0.5,
    max_tokens: 1000,
  });

  const result = response.choices[0].message.content;

  return result;
};

export default analyzeNews;
