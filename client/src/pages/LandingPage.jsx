import Navbar from "../components/Navbar";
import { APP_FEATURES } from "../utils/data";
import { LuSparkles } from "react-icons/lu";


function LandingPage() {
  return (
    <>
      <div className="w-full h-screen bg-[#fffcef] ">
        <div className=" h-fit bg-amber-200/20  blur-[65%] left-0">
          <div className="container mx-auto px-4 pt-6 pb-[200px] relative z-10 ">
            <Navbar />
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 pr-4  md:mb-0">
                <div className="flex items-center justify-left mb-2">
                  <div className="flex items-center gap-2 text-[13px] text-amber-600 font-semibold bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
                    <LuSparkles /> AI powered
                  </div>
                </div>
                <h1 className="text-5xl text-black font-medium  leading-tight">
                  Ace Interview with <br />
                  <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#ff9324_0%,_#fcd760_100%)] bg-[length:200%_200%] animate-text-shine font-semibold">
                    AI-powered
                  </span>
                  Learning
                </h1>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-[17px] text-gray-900 mr-0 md:mr-20 mb-6">
                  Get Role-specific interview questions and model answers,
                  tailored to your experience level and focus areas. when you
                  need them, dive deeper into concepts with AI-generated
                  explanations, and organize your learning with personal notes
                  and saved sets.
                </p>
                <button className="bg-black text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-yellow-100 hover:text-black border border-yellow-500 hover:border-yellow-300  transition-colors cursor-pointer">
                  Get Started
                </button>
              </div>
              -
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 absolute  top-90">
            <h1 className="text-3xl font-bold text-center py-8">
              Features That Make you shine
            </h1>
            <div className="flex justify-center items-center p-2  bg-amber-200/20 ">
              {APP_FEATURES.slice(0, 3).map((feature) => (
                <div key={feature.id} className="w-[400px] mx-auto px-2  rounded-4xl shadow-2xl  py-8 ">
                  <h2 className="text-2xl font-semibold mb-2">
                    {feature.title}
                  </h2>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center bg-amber-200/20 p-3">
              {APP_FEATURES.slice(3).map((feature) => (
                <div key={feature.id} className="w-[400px] mx-auto px-2  rounded-4xl shadow-2xl  py-8">
                  <h2 className="text-2xl font-semibold mb-2">
                    {feature.title}
                  </h2>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
