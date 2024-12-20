import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Products from './Products'
import ShoppingCart from './ShoppingCart'
import ContactForm from './ContactForm.jsx'

function App() {

  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/home" element={<p>HOME HERE</p>} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </>
  )
}

export default App
