import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { APP_FEATURES } from "../utils/data";
import { LuSparkles } from "react-icons/lu";

function LandingPage() {
  return (
    <>
      <Navbar />
    <div className="max-w-full">
      <div className="p-3">
        <div className=" flex flex-col md:flex-row gap-8  md:justify-evenly md:items-center p-3.5 md:px-32 md:py-10">
          <div className=" flex flex-col gap-4 md:w-[50%]">
            <span className=" flex items-center gap-1 w-fit px-3 py-1.5 md:px-5 bg-amber-400 text-amber-50 rounded-4xl">
              <LuSparkles />
              AI Powered
            </span>
            <div className="w-full">
              <h2 className="md:text-5xl  text-2xl font-bold  ">
                Ace-Interview with <br />
                <span className="text-amber-300">
                  {" "}
                  AI-Powered
                </span> Learning{" "}
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:w-[40%]">
            <p className="font-light md:font-medium">
              Ace your next interview with our intelligent AI-powered coach.
              Receive instant, personalized feedback on your answers, clarity,
              and confidence. Practice with tailored questions for any role,
              anytime you want. Transform your skills and land your dream job
              with unshakable confidence.
            </p>
            <span className=" flex items-center gap-1 w-fit px-3 py-1.5 bg-amber-400 text-amber-50 rounded-4xl">
              <Link to="/auth">Get Started</Link>
            </span>
          </div>
        </div>
        <div className=" p-5 md:px-20 md:py-10">
           <div className="flex flex-col gap-10">
               <div className="text-center text-2xl md:text-4xl font-medium ">
                Features That Make You Shine
               </div>
               <div className=" flex md:gap-x-10 flex-wrap justify-center md:gap-y-15 gap-y-6">
                {
                   APP_FEATURES.map((data) => (
                    <div key={data.id} className="flex w-[400px] flex-row">
                       <div className="p-3  flex  flex-col gap-3 bg-amber-200 rounded-3xl shadow-2xl text-gray-900">
                          <h3 className="text-xl font-bold">{data.title}</h3>
                          <p className="font-medium">{data.description}</p>
                       </div>
                    </div>
                   ))
                }
               </div>
           </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default LandingPage;
