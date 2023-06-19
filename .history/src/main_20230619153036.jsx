import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BroswerRouter}  from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BroswerRouter>
    <App />
    </BroswerRouter>
    
  </React.StrictMode>,
)
