import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateResumeSummary = async ({
  name,
  role,
  skills,
  experience,
  projects,
}) => {
  const prompt = `
Generate a professional resume summary for a job seeker.

Name: ${name}
Target Role: ${role}
Skills: ${skills || "Not provided"}
Experience: ${experience || "Not provided"}
Projects: ${projects || "Not provided"}

Requirements:
- Write 3-4 professional sentences.
- Keep it suitable for a resume.
- Keep it concise and professional.
- Do not create fake achievements or experience.
- Return only the resume summary.
`;

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const result = await model.generateContent(prompt);

  return result.response.text();
};
