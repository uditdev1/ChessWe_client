import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ToastContainer
      position='bottom-right' autoClose={5000} hideProgressBar={false}
      newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable 
      pauseOnHover theme='dark'
    />
  </>,
)
