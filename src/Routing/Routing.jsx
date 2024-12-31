/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom";
import ProductDetails from "../Components/ProductDetails";
import Main from "../Components/Main";
import Cart from "../Components/Cart";
import AllProducts from "../Components/AllProducts";

const Routing = (props) => {
  return (
    // include route
    <Routes>
      {/* default */}
      <Route
        path="/"
        element={<Main items={props.items} setItems={props.setItems} />}
      />
      {/* product details */}
      <Route
        path="/product-details/:id"
        element={
          <ProductDetails items={props.items} setItems={props.setItems} />
        }
      />
      {/* cart */}
      <Route
        path="/cart"
        element={<Cart items={props.items} setItems={props.setItems} />}
      />
      {/* all products with filter */}
      <Route
        path="/allproducts"
        element={<AllProducts items={props.items} setItems={props.setItems} />}
      />
    </Routes>
  );
};

export default Routing;
