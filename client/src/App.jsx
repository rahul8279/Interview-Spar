import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Toaster} from "react-hot-toast"
import LandingPage from './pages/LandingPage';
import Auth from "./pages/Auth"


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
       <Route path='/auth' element={<Auth />} />
      </Routes>
    </Router>
    <Toaster />
    </>
    
  )
}

export default App