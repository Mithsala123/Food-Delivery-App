import React from 'react'
import Navbar from './components/navbar/navbar.jsx'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Cart from './pages/Cart/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import Menu from './pages/Menu/Menu.jsx'


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/PlaceOrder' element={<PlaceOrder />} />
        <Route path='/Menu' element={<Menu />} />

      </Routes>
      
    </div>
  )
}

export default App
