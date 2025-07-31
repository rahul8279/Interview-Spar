import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Toaster} from "react-hot-toast"
import LandingPage from './pages/LandingPage';
import Auth from "./pages/Auth"
import DashBoardLayout from './pages/DashBoardLayout';
import QuestionsPage from './pages/QuestionsPage';
import { useAuthStore } from './store/useAuth.store';


function App() {
  const {user} = useAuthStore()
  return (
    <>
    <Router>
      <Routes>        
      <Route path="/" element={!user ? <LandingPage /> : <DashBoardLayout />  } />
       <Route path='/auth' element={<Auth />} />
       <Route path='/questions/:id' element={<QuestionsPage />} />
      </Routes>
    </Router>
    <Toaster />
    </>
    
  )
}

export default App