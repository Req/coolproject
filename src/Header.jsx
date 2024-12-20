import { Link } from "react-router-dom"
import { useCart } from "./CartContext.jsx"

function Header() {
    const { selectedProducts } = useCart()

    return (
        <header>
            <nav>
                <Link to="/home">Home</Link> | 
                <Link to="/products">Products</Link> | 
                <Link to="/cart">Cart ({selectedProducts.length})</Link> | 
                <Link to="/contact">Contact us</Link>
            </nav>
        </header>
    )

}

export default Header