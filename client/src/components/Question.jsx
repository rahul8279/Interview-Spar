import { RiPushpin2Line } from "react-icons/ri";
import { MdKeyboardArrowDown, MdClose } from "react-icons/md";
import { LuSparkles } from "react-icons/lu";
import { useQuestionStore } from "../store/useQuestions";
import { useSessionStore } from "../store/useSessionStore";
import Apires from "./Apires";

function Questions() {
  const { singleSession } = useSessionStore();
  const {
    pinnedQuestions,
    openAnswerIndex,
    openConceptIndex,
    togglePin,
    fetchExplanation,
    toggleAnswer,
    isLoading
  } = useQuestionStore();

  const allQuestions = [
    ...(Array.isArray(pinnedQuestions) ? pinnedQuestions : []),
    ...(Array.isArray(singleSession?.questions)
      ? singleSession.questions.filter(
          (q) => !pinnedQuestions?.some((p) => p._id === q._id)
        )
      : []),
  ];
  return (
    <div className="md:p-4">
      <div className="w-full md:max-w-7xl mx-auto flex flex-col-reverse md:flex-row-reverse md:gap-6">
        
        {openConceptIndex !== null && <Apires /> }
        <div
          className={
            openConceptIndex !== null
              ? "w-full md:w-2/3"
              : "w-full md:max-w-4xl mx-auto"
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
                        <h3 className="text-xl  font-medium ">
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
                        {data.answer || "No answer provided yet."}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
