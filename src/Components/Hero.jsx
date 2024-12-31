import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Stylings/hero.css";
import productsData from "../data/productsData";
import { Link } from "react-router-dom";

const Hero = () => {
  // slider settings
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="slider-container">
      {/* hero images and content */}
      <Slider {...settings}>
        {/* hero products */}
        {productsData &&
          productsData
            .filter((product) => product["tag"] === "hero-product")
            .map((product) => {
              return (
                <section className="px-5" key={product["id"]}>
                  <div id="bg-text">
                    <p>{product["type"]}</p>
                  </div>
                  <div id="carousel">
                    <div id="product_intro">
                      <h5 style={{ color: "#c5c5c5" }}>{product["title"]}</h5>
                      <h1 style={{ color: "#c5c5c5" }}>{product["tagline"]}</h1>
                      <h4
                        style={{
                          color: "#c5c5c5",
                          position: "relative",
                          left: 0,
                        }}
                      >
                        ₹{product["finalPrice"].toLocaleString("en-IN")}{" "}
                        <del className="text-secondary">
                          ₹{product["originalPrice"].toLocaleString("en-IN")}
                        </del>
                      </h4>
                      <Link to={`product-details/${product["id"]}`}>
                        <button className="btnn">Shop Now</button>
                      </Link>
                    </div>
                    <div>
                      <figure>
                        <img
                          src={product["heroImage"]}
                          alt={product["title"]}
                          width="650px"
                          height="600px"
                        />
                      </figure>
                    </div>
                  </div>
                </section>
              );
            })}
      </Slider>
    </div>
  );
};

export default Hero;
