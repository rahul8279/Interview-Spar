import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Toaster} from "react-hot-toast"
import LandingPage from './pages/LandingPage';
import Auth from "./pages/Auth"
import DashBoardLayout from './pages/DashBoardLayout';
import QuestionsPage from './pages/QuestionsPage';
import { useAuthStore } from './store/useAuth.store';
// import Test from './components/Test';


function App() {
  const {user} = useAuthStore()
  return (
    <>
    <Router>
      <Routes>        
      <Route path="/" element={!user ? <LandingPage /> : <DashBoardLayout />  } />
       <Route path='/auth' element={<Auth />} />
       <Route path='/questions/:id' element={<QuestionsPage />} />
       {/* <Route path='/test' element={<Test />} /> */}
      </Routes>
    </Router>
    <Toaster />
    </>
    
  )
}

export default App