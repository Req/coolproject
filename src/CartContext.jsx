import { createContext, useContext, useState } from "react"

const cartContext = createContext()

function CartContextProvider({ children }) {
    const [selectedProducts, setSelectedProducts] = useState([])
    
    function clearCart() {
        setSelectedProducts([])
    }

    function add(toAdd) {
        console.log("Added to cart!")
        setSelectedProducts([...selectedProducts, toAdd])
    }

    return (
        <cartContext.Provider value={{ selectedProducts, add, clearCart }}>
            {children}
        </cartContext.Provider>
    )
}

function useCart() {
    return useContext(cartContext)
}

export { cartContext, useCart } 
export default CartContextProvider