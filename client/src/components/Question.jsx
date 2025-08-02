import { RiPushpin2Line } from "react-icons/ri";
import { MdKeyboardArrowDown, MdClose } from "react-icons/md";
import { LuSparkles } from "react-icons/lu";
import { useQuestionStore } from "../store/useQuestionStore";
import { useSessionStore } from "../store/useSessionStore";
import Apires from "./Apires";
import { AiOutlineMenuUnfold } from "react-icons/ai";

function Questions() {
  const { singleSession } = useSessionStore();
  const {
    pinnedQuestions,
    openAnswerIndex,
    openConceptIndex,
    togglePin,
    fetchExplanation,
    toggleAnswer,
    GenerateQuestions,
    generatedQuestions,
    AddQuestionsToSession
  } = useQuestionStore();

  const allQuestions = [
    ...(Array.isArray(pinnedQuestions) ? pinnedQuestions : []),
    ...(Array.isArray(singleSession?.questions)
      ? singleSession.questions.filter(
          (q) => !pinnedQuestions?.some((p) => p._id === q._id)
        )
      : []),
  ];
  const data = {
    role:singleSession?.role,
    experience:singleSession?.experience,
    topicsTofocus:singleSession?.topicsTofocus,

  }
  const LoadMoreQustions = async() => {
     await GenerateQuestions(data);
     if (generatedQuestions.length >= 0) {
      await AddQuestionsToSession(singleSession?._id,generatedQuestions)
     }
  }
  return (
    <div className="md:p-4 relative">
      <div className="w-full  md:max-w-7xl mx-auto flex flex-col md:flex-row md:gap-6">
        <div
          className={
            openConceptIndex !== null
              ? "w-full md:max-w-2xl"
              : "w-full md:w-5xl  "
          }
        >
          <div className="md:p-4  shadow-2xl border-gray-600 flex flex-col gap-3  ">
            {allQuestions.map((data, index) => {
              const isOpen = openAnswerIndex === index;
              return (
                <div
                  key={data._id || index}
                  className=" shadow-2xl rounded-xl overflow-hidden"
                >
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className="text-xl font-semibold text-indigo-600">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-[17px]  font-medium ">
                          {data.question}
                        </h3>
                      </div>
                      <div className="flex items-center gap-4">
                        <RiPushpin2Line
                          className={`cursor-pointer text-xl ${
                            pinnedQuestions?.some((p) => p._id === data._id)
                              ? "text-yellow-500"
                              : ""
                          }`}
                          onClick={() => togglePin(data._id)}
                        />
                        <LuSparkles
                          className="cursor-pointer text-xl "
                          onClick={() => fetchExplanation(data.question)}
                        />
                        <button
                          className="p-1 rounded-full  focus:outline-none"
                          onClick={() => toggleAnswer(index)}
                        >
                          <MdKeyboardArrowDown
                            className={`transform transition-transform duration-300  text-xl ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    {isOpen && (
                      <div className="mt-2 text-[17px] p-2  ">
                        <div className="shadow-xl  bg-gray-800 rounded-[8px] p-3">
                          <p>
                            {data.answer || "No answer provided yet."}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div 
          onClick={LoadMoreQustions}
          className=" p-3 rounded-xl cursor-pointer mt-3 w-fit bg-white flex gap-2 items-center ">
      <AiOutlineMenuUnfold className="text-xl text-gray-900" />
      <span className="text-black w-fit">Load More</span>
     </div>
        </div>
        {openConceptIndex !== null && <Apires /> }
      </div>
     
    </div>
  );
}

export default Questions;
