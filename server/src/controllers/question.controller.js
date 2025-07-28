import Question from "../models/question.model.js";
import Session from "../models/session.model.js";

export const addQuestionsToSession = async (req, res) => {
  try {
    const { sessionId, questions } = req.body;

    if (!sessionId || !questions || !Array.isArray(questions)) {
      return res.status(400).json({ 
          message: "Invalid request data", 
          success: false 
        });
    }

    const session = await Session.findById(sessionId);
    if (!session) {
      return res
        .status(404)
        .json({ message: "Session not found", success: false });
    }

    const createQuestions = await Question.insertMany(
      questions.map((q) => ({
        session: sessionId,
        question: q.question,
        answer: q.answer,
      }))
    );

    session.questions.push(...createQuestions.map((q) => q._id));
    await session.save();

    res
      .status(200)
      .json({
        message: "Questions added to session successfully",
        success: true,
        createQuestions,
      });
  } catch (error) {
    console.error("Error adding questions to session:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

export const togglePinnedQuestion = async (req,res) => {
    try {
        const question = await Question.findById(req.params.id);
        if (!question) {    
            return res.status(404).json({
                message: "Question not found",
                success: false
            });
        }
        question.isPinned = !question.isPinned;
        await question.save();
        res.status(200).json({
            message: "Question pinned status updated",
            success: true,
            question
        });
    } catch (error) {
        console.error("Error toggling pinned question:", error);
        res.status(500).json({
             message: "Internal server error", 
            success: false 
        });
        
    }
}

export const updateQuestionNotes = async (req, res) => {
    try {
        const { note } = req.body;
        const question = await Question.findById(req.params.id);
        if (!question) {
            return res.status(404).json({
                message: "Question not found",
                success: false
            });
        }
        question.note = note || "";
        await question.save();
        res.status(200).json({
            message: "Question notes updated successfully",
            success: true,
            question
        });
    } catch (error) {
        console.error("Error updating question notes:", error);
        res.status(500).json({ 
            message: "Internal server error", 
            success: false 
        });
        
    }
}