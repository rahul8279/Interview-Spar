import Session from "../models/session.model.js";
import Question from "../models/question.model.js";

export const createSession = async (req, res) => {
  try {  
     const { role, experience, topicsTofocus, description,questions } = req.body;
     if (!role || !experience || !topicsTofocus || !description ) {
              return res.status(400).json({
                message:"All field are required.",
                success:false
              })
     }
     
    const userId = req.user._id;
    const newSession = new Session({
      user: userId,
      role,
      experience,
      topicsTofocus,
      description
    })
     const qustionsDoc = await Promise.all(
        questions.map(async (q) =>{
            const question = await Question.create({
                session: newSession._id,
                question: q.question,
                answer: q.answer,
            })
            return question._id;
        })
     )
     newSession.questions = qustionsDoc;
    await newSession.save();
    res.status(201).json({
      session: newSession,
      message: "Session created successfully",
      success: true,
    });

  } catch (error) {
    console.error("Error creating session:", error);
    res.status(500).json({ 
      message: "Internal server error" ,
      success: false
    });
  }
};

export const getMySessions = async (req, res) => {
  try {
    const userId = req.user._id;
    const sessions = await Session.find({ user: userId }).sort
    ({createdAt:-1}).populate("questions");
    res.status(200).json({
      sessions,
      message: "Sessions fetched successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error fetching sessions:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getSessionById = async (req, res) => {
  try {
    const sessionId = req.params.id;
    const session = await Session.findById(sessionId).populate({path: "questions", 
        options: { sort: { createdAt: -1, isPinned: -1 } }
    });
    if (!session) {
      return res.status(404).json({
        message: "Session not found",
        success: false,
      });
    }
    res.status(200).json({
      session,
      message: "Session fetched successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error fetching session:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteSession = async (req, res) => {
  try {
    const sessionId = req.params.id;
    await Question.deleteMany({ session: sessionId });
    const session = await Session.findByIdAndDelete(sessionId);
    if (!session) {
      return res.status(404).json({
        message: "Session not found",
        success: false,
      });
    }
    res.status(200).json({
      message: "Session deleted successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error deleting session:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
