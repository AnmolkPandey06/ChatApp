import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/authcontext.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
const clientId="798364514042-76irbnu36951tthhtt212dlvi1her8dm.apps.googleusercontent.com"
import { SocketContextProvider } from './context/socketcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <SocketContextProvider>
      <GoogleOAuthProvider clientId={clientId}><App />
      </GoogleOAuthProvider>;
           
      

      </SocketContextProvider>
       
    </AuthContextProvider>
   
    </BrowserRouter>
 
  </React.StrictMode>,
)
