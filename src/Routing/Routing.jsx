import { Routes, Route } from "react-router-dom"
import Hero from '../Components/Hero'

const Routing = () => {

    return(
        <Routes>
            <Route path="/" element={<Hero />} />
            {/* <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/allproducts" element={<AllProducts/>} /> */}
        </Routes>
    )
}

export default Routing