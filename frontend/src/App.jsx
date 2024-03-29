import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Loginpage from './pages/Login/Loginpage'
import SignUppage from './pages/SignUp/SignUppage'
import Home from './pages/Home/Home'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/authcontext.jsx'
import { Navigate } from 'react-router-dom'
function App() {


  const {authUser} = useAuthContext();
  if(authUser) console.log(authUser);
  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>
             
             <Toaster/>
             <Routes>
              <Route path='/' element={!authUser? (<Navigate to="/login"/>):(<Home/>)}
              ></Route>
              <Route path='/login' element={authUser? (<Navigate to="/"/>):(<Loginpage/>)}
              ></Route>
              <Route path='/signup' element={authUser? (<Navigate to="/"/>):(<SignUppage/>)}
              ></Route>
             </Routes>
            
            
     

      </div>
    
    </>
  )
}

export default App
