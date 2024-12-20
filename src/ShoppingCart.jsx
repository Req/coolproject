import { useContext } from "react"
import { cartContext } from "./CartContext.jsx"

function ShoppingCart() {
    const { selectedProducts, clearCart } = useContext(cartContext)

    return (
        <div>
            <h2>Shopping cart contents</h2>
            <ul>
                {selectedProducts.map(p => (
                    <li>{p}</li>
                ))} 
            </ul>
            <button onClick={clearCart}>Clear</button>
        </div>
    )
}

export default ShoppingCart