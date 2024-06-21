import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SIgnUp from './pages/signup/SIgnUp';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';


function App() {
  const {authUser} = useAuthContext();
  return (
		<div className='p-4 md:h-screen flex items-center justify-center'>
      <Routes>
      <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SIgnUp />} />
      </Routes>
      <Toaster/>
		</div>
	);
}

export default App
