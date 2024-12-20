import { Link } from "react-router-dom"

function Header() {

    return (
        <header>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">Cart (0)</Link>
            </nav>
        </header>
    )

}

export default Header