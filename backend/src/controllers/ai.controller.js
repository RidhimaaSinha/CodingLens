import {aiService} from '../services/ai.service.js'

export const generateCode = async (req, res) => {
   const prompt = req.query.prompt
   if(!prompt) {
      return res.status(400).json({error: 'Prompt is required'})
   }
   const response = await aiService(prompt)
   res.send(response)
}