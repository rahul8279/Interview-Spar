import { LuPlus } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSessionStore } from "../store/useSessionStore";
import { getInitials } from "../utils/helper";


function DashboardCard({ openSessionForm }) {
  const {allSession,GetAllSession,DeleteSession}= useSessionStore()
  
  const navigate = useNavigate();
  useEffect(() => {
    GetAllSession();
  }, [GetAllSession,DeleteSession]);

  return (
    <>
      <div className="max-w-full h-screen relative">
        <div className="p-3">
          <div className=" flex flex-col items-center md:flex-row gap-8  md:items-center p-2 md:px-20 md:py-10 flex-wrap">
            {allSession?.map((data) => (
              <div
                key={data?._id}
                className=" cursor-pointer md:w-[420px] w-[99%] h-[195px] p-3 shadow-2xl border-gray-300 border-1 rounded-2xl flex flex-col gap-y-5"
              >
                <div className="flex  p-1.5 rounded-xl justify-evenly relative">
                  <span className="p-3  text-xl font-bold bg-white text-gray-800 rounded-2xl">
                    {getInitials(data.role)}
                  </span>
                  <div 
                  onClick={() => navigate(`/questions/${data._id}`)}
                  className="flex flex-col w-[60%] md:w-[75%] ">
                    <h1 className=" font-bold ">{data?.role}</h1>
                    <p className="truncate w-full">{data?.topicsTofocus} </p>
                  </div>
                   <RxCross1 
                   className="text-2xl absolute top-0 right-0"
                   onClick={() => DeleteSession(data?._id) }
                    />
                </div>
                
                <div className="flex justify-evenly items-center">
                 
                  <div className="badge badge-md rounded-2xl border-white p-1">
                    {" "}
                    Experience : {data.experience}
                  </div>
                  <div className="badge badge-md rounded-2xl border-white p-1">
                    Question : {data.questions.length}
                  </div>
                  <div className="badge badge-md rounded-2xl border-white p-1">
                   
                    {(() => {
                      const dateObj = new Date(data.updatedAt);
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
                <div className="px-4  w-full">
                  <p className="w-full truncate">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={openSessionForm}
          className=" bg-amber-400 rounded-3xl flex gap-4 p-6 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg fixed md:bottom-10 bottom-4 md:right-10 shadow-2xl right-4"
        >
          <LuPlus className="h-6 w-6" />
          new
        </button>
      </div>
    </>
  );
}


export default DashboardCard;
