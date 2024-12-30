/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom";
import ProductDetails from "../Components/ProductDetails";
import Main from "../Components/Main";
import Cart from "../Components/Cart";

const Routing = (props) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Main items={props.items} setItems={props.setItems} />}
      />
      <Route
        path="/product-details/:id"
        element={
          <ProductDetails items={props.items} setItems={props.setItems} />
        }
      />
      <Route
        path="/cart"
        element={<Cart items={props.items} setItems={props.setItems} />}
      />
      {/* <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/allproducts" element={<AllProducts/>} /> */}
    </Routes>
  );
};

export default Routing;
