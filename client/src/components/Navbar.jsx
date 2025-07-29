import { Link } from "react-router-dom"

function Navbar() {
  return (
    <header className="max-w-full">
        <div className="p-3">
          <div className="flex justify-between items-center p-3.5 md:px-40 md:py-10">
             <h1 className="font-bold md:text-3xl">INTERVIEW <span className="text-amber-400">SPAR </span></h1>
             <button className="font-medium md:text-xl bg-amber-400 rounded-2xl px-3 p-2">
              <Link to="/auth">signup/login</Link>
             </button>
          </div>
        </div>
    </header>
  )
}

export default Navbar