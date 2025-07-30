import { LuPlus } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";

const arry = [1, 2, 3, 4];
function DashboardCard({openSessionForm}) {
  return (
    <>
      <div className="max-w-full h-screen relative">
        <div className="p-3">
          <div className=" flex flex-col items-center md:flex-row gap-8  md:items-center p-2 md:px-20 md:py-10 flex-wrap">
            {arry.map((a) => (
              <div className=" md:w-[420px] w-[99%] h-[195px] p-3 shadow-2xl border-gray-300 border-1 rounded-2xl flex flex-col gap-y-5">
                <div className="flex  p-1.5 rounded-xl justify-evenly ">
                  <span className="p-3  text-xl font-bold bg-white text-gray-800 rounded-2xl">
                    FD
                  </span>
                  <div className="flex flex-col w-[60%] md:w-[75%] ">
                    <h1 className=" font-bold ">Frontend Developer</h1>
                    <p className="truncate w-full">lforoneb difbsf jijdinsi dcscscssfsv cscv sdvdvdv </p>
                  </div>
                  <RxCross1 className="h-5 w-5" />
                </div>
                <div className="flex justify-evenly items-center">
                  <div className="badge badge-md rounded-2xl border-white p-1">Medium</div>
                  <div className="badge badge-md rounded-2xl border-white p-1">Medium</div>
                  <div className="badge badge-md rounded-2xl border-white p-1">Medium</div>
                </div>
                <div className="px-4">
                  <p>hdhkadkkj hdssdsndjk jgdjahdkahd</p>
                </div>
              </div>
            ))}
          </div>
        </div>
         <button
     onClick={openSessionForm}
     className=" bg-amber-400 rounded-3xl flex gap-4 p-6 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg fixed md:bottom-10 bottom-4 md:right-10 shadow-2xl right-4">
      <LuPlus className='h-6 w-6' />
      new
    </button>
      </div>
    </>
  );
}

export default DashboardCard;
