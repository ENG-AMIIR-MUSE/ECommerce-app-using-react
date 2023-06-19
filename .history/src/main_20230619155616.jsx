import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Routes } from 'react-router-dom'
import { BrowserRouter }  from 'react-router-dom'
import ProductCard from './Components/ProductCard.jsx'
import ProductList from './Components/ProductList.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </React.StrictMode>,
  <Routes>
    <Route path="/"element={<ProductList/>}/>

  </Routes>
)
