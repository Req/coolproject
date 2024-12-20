import { useContext } from "react"
import { cartContext } from "./CartContext.jsx"

function Products() {
    const { selectedProducts, add } = useContext(cartContext)

    function handleClick(e) {
        add(e.target.innerText)
    }

    return (
        <ul>
            <li><button onClick={handleClick}>Apple iPhone 10</button></li>
            <li><button onClick={handleClick}>Apple iPhone SE 2022</button></li>
            <li><button onClick={handleClick}>Apple iPad Pro max</button></li>
        </ul>
    )
}

export default Products