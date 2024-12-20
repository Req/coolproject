import { createContext, useState } from "react"

const cartContext = createContext()

function CartContextProvider({ children }) {
    const [selectedProducts, setSelectedProducts] = useState([])
    
    return (
        <cartContext.Provider value={{ selectedProducts, setSelectedProducts }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider