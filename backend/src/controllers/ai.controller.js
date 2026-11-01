import generateContent from "../services/ai.service.js";

export const getReview = async (req, res) => {
  try {
    const code = req.body.code;
    if (!code) {
      return res.status(400).json({ error: "Code is required" });
    }
    const response = await generateContent(code);
    res.send(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};