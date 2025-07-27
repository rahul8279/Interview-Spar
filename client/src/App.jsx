import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import {Toaster} from "react-hot-toast"
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    <Toaster />
    </>
    
  )
}

export default App