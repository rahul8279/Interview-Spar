import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 import {getInitials} from "../utils/helper.js"
import { useSessionStore } from "../store/useSessionStore";
import Questions from "../components/Question.jsx";

function QuestionsPage() {
  
  const { id } = useParams();
  const { singleSession, GetSessionByID } = useSessionStore();
 
  useEffect(() => {
    GetSessionByID(id);
  }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-full cursor-pointer ">
        <div className="p-3">
          <div className="md:px-32 ">
            <div className=" w-full p-3 shadow-2xl  rounded-2xl flex flex-col gap-y-5">
              <div className="flex  p-1.5 rounded-xl gap-2  ">
                <span className="p-3  text-xl font-bold bg-white text-gray-800 rounded-2xl">
                  {getInitials(singleSession?.role)}
                </span>
                <div className="flex flex-col w-[60%] md:w-[75%] ">
                  <h1 className=" font-bold md:text-xl w-full truncate ">{singleSession?.role}</h1>
                  <p className="truncate w-full">
                   {singleSession?.topicsTofocus}

                  </p>
                </div>
              </div>
              <div className="flex gap-10">
                <div className="badge badge-md rounded-[10px] border-white p-1 w-fit h-fit ">
                  Experience : {singleSession?.experience}
                </div>
                <div className="badge badge-md rounded-[10px] border-white p-1 w-fit h-fit">
                  Question : {singleSession?.questions.length}
                </div>
                <div className="badge badge-md rounded-[10px] border-white p-1 w-fit h-fit">
                 Last Update : {(() => {
                      const dateObj = new Date(singleSession?.updatedAt);
                      const day = String(dateObj.getDate()).padStart(2, "0");
                      const month = String(dateObj.getMonth() + 1).padStart(
                        2,
                        "0"
                      );
                      const year = String(dateObj.getFullYear()).slice(-2);
                      return `${day}-${month}-${year}`;
                    })()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     <Questions />
      
    </>
  );
}

export default QuestionsPage;
