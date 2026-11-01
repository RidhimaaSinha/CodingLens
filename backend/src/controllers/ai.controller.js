import generateContent from "../services/ai.service.js";

export const generateCode = async (req, res) => {
  try {
    const prompt = req.query.prompt;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }
    const response = await generateContent(prompt);
    res.send(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};