import { Routes, Route } from "react-router-dom"
import ProductDetails from "../Components/ProductDetails"
import Main from "../Components/Main"

const Routing = () => {

    return(
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/product-details/:id" element={<ProductDetails/>} />
            {/* <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/allproducts" element={<AllProducts/>} /> */}
        </Routes>
    )
}

export default Routing