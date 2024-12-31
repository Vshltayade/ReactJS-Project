/* eslint-disable react/prop-types */
import FeaturedProducts from "./FeaturedProducts";
import Hero from "./Hero";
import TopProducts from "./TopProducts";

const Main = (props) => {
  // includes Hero, FeaturedProducts, TopProducts Component
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <TopProducts items={props.items} setItems={props.setItems} />
    </>
  );
};

export default Main;
