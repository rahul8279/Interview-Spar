
function Navbar() {
  return (
    <header className="flex justify-between items-center mb-16 ">
   <div className="text-4xl text-black font-bold">
       INTERVIEW SPAR
   </div>
   <button className="bg-linear-to-r from-[#ff9324] to-[#e99a4b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer ">
       Login / Signup
   </button>
    </header>
  )
}

export default Navbar