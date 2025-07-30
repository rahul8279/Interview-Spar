import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Toaster} from "react-hot-toast"
import LandingPage from './pages/LandingPage';
import Auth from "./pages/Auth"
import DashBoardLayout from './pages/DashBoardLayout';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/home" element={<LandingPage />} />
       <Route path='/auth' element={<Auth />} />
       <Route path='/' element={<DashBoardLayout />} />
      </Routes>
    </Router>
    <Toaster />
    </>
    
  )
}

export default App