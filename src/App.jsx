import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Products from './Products'

function App() {

  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/home" element={<p>HOME HERE</p>} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<p>CART PAGE</p>} />
      </Routes>
    </>
  )
}

export default App
