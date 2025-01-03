/* eslint-disable react/prop-types */
import "../Stylings/topProducts.css";
import productsData from "../data/productsData";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Rate from "./Rate";
import { Link } from "react-router-dom";

const TopProducts = (props) => {
  // add to cart function
  const handleClick = (e, product) => {
    let obj = props.items;
    if (props.items[product["id"]])
      props.setItems({
        ...obj,
        [product["id"]]: { count: obj[product["id"]]["count"] + 1 },
      });
    else props.setItems({ ...obj, [product["id"]]: { count: 1 } });
    e.target.style.background = "rgb(0, 136, 0)";
    e.target.style.transition = "background .2s ease-in";
    e.target.innerText = "Added";
    setTimeout(() => {
      e.target.style.background = "#d00000";
      e.target.style.transition = "background .2s ease-in";
      e.target.innerText = "Add to Cart";
    }, 2000);
  };

  return (
    <div className="px-5 pt-5" style={{ color: "#c5c5c5" }}>
      <h2 className="text-center h3 fw-semibold my-5 py-5">Top Products</h2>

      {/* products filter options based on category */}
      <Tab.Container defaultActiveKey="first">
        <div className="d-flex justify-content-center">
          <Nav className="flex-row">
            {/* all products */}
            <Nav.Item className="mx-5">
              <Nav.Link
                eventKey="first"
                className="nav-link"
                style={{ color: "#c5c5c5" }}
              >
                All
              </Nav.Link>
            </Nav.Item>
            {/* headphones */}
            <Nav.Item className="mx-5">
              <Nav.Link
                eventKey="second"
                className="nav-link"
                style={{ color: "#c5c5c5" }}
              >
                Headphones
              </Nav.Link>
            </Nav.Item>
            {/* earbuds */}
            <Nav.Item className="mx-5">
              <Nav.Link
                eventKey="third"
                className="nav-link"
                style={{ color: "#c5c5c5" }}
              >
                Earbuds
              </Nav.Link>
            </Nav.Item>
            {/* earphones */}
            <Nav.Item className="mx-5">
              <Nav.Link
                eventKey="fourth"
                className="nav-link"
                style={{ color: "#c5c5c5" }}
              >
                Earphones
              </Nav.Link>
            </Nav.Item>
            {/* neckbands */}
            <Nav.Item className="mx-5">
              <Nav.Link
                eventKey="fifth"
                className="nav-link"
                style={{ color: "#c5c5c5" }}
              >
                Neckbands
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        {/* products filtered content based on category */}
        <Tab.Content>
          {/* all products */}
          <Tab.Pane eventKey="first">
            <div id="product_grid">
              {productsData &&
                productsData.map((product) => {
                  return (
                    <div className="product_items" key={product["id"]}>
                      <img src={product["images"][0]} alt={product["title"]} />
                      <div>
                        <Rate rateCount={product["rateCount"]} />
                      </div>
                      <h3>{product["title"]}</h3>
                      <p>{product["info"]}</p>
                      <hr />
                      <h4>
                        ₹{product["finalPrice"].toLocaleString("en-IN")}{" "}
                        <del className="text-secondary">
                          ₹{product["originalPrice"].toLocaleString("en-IN")}
                        </del>
                      </h4>
                      <button onClick={(e) => handleClick(e, product)}>
                        Add to cart
                      </button>
                    </div>
                  );
                })}
              <div id="browse-all-products" className="product_items">
                <Link to="allproducts" className="text-decoration-none">
                  <div>Browse All Products →</div>
                </Link>
              </div>
            </div>
          </Tab.Pane>
          {/* headphones */}
          <Tab.Pane eventKey="second">
            <div id="product_grid">
              {productsData &&
                productsData
                  .filter((product) => product["category"] === "Headphones")
                  .map((product) => {
                    return (
                      <div className="product_items" key={product["id"]}>
                        <img
                          src={product["images"][0]}
                          alt={product["title"]}
                        />
                        <div>
                          <Rate rateCount={product["rateCount"]} />
                        </div>
                        <h3>{product["title"]}</h3>
                        <p>{product["info"]}</p>
                        <hr />
                        <h4>
                          ₹{product["finalPrice"].toLocaleString("en-IN")}{" "}
                          <del className="text-secondary">
                            ₹{product["originalPrice"].toLocaleString("en-IN")}
                          </del>
                        </h4>
                        <button onClick={(e) => handleClick(e, product)}>
                          Add to cart
                        </button>
                      </div>
                    );
                  })}
              <div id="browse-all-products" className="product_items">
                <Link to="allproducts" className="text-decoration-none">
                  <div>Browse All Products →</div>
                </Link>
              </div>
            </div>
          </Tab.Pane>
          {/* earbuds */}
          <Tab.Pane eventKey="third">
            <div id="product_grid">
              {productsData &&
                productsData
                  .filter((product) => product["category"] === "Earbuds")
                  .map((product) => {
                    return (
                      <div className="product_items" key={product["id"]}>
                        <img
                          src={product["images"][0]}
                          alt={product["title"]}
                        />
                        <div>
                          <Rate rateCount={product["rateCount"]} />
                        </div>
                        <h3>{product["title"]}</h3>
                        <p>{product["info"]}</p>
                        <hr />
                        <h4>
                          ₹{product["finalPrice"].toLocaleString("en-IN")}{" "}
                          <del className="text-secondary">
                            ₹{product["originalPrice"].toLocaleString("en-IN")}
                          </del>
                        </h4>
                        <button onClick={(e) => handleClick(e, product)}>
                          Add to cart
                        </button>
                      </div>
                    );
                  })}
              <div id="browse-all-products" className="product_items">
                <Link to="allproducts" className="text-decoration-none">
                  <div>Browse All Products →</div>
                </Link>
              </div>
            </div>
          </Tab.Pane>
          {/* earphones */}
          <Tab.Pane eventKey="fourth">
            <div id="product_grid">
              {productsData &&
                productsData
                  .filter((product) => product["category"] === "Earphones")
                  .map((product) => {
                    return (
                      <div className="product_items" key={product["id"]}>
                        <img
                          src={product["images"][0]}
                          alt={product["title"]}
                        />
                        <div>
                          <Rate rateCount={product["rateCount"]} />
                        </div>
                        <h3>{product["title"]}</h3>
                        <p>{product["info"]}</p>
                        <hr />
                        <h4>
                          ₹{product["finalPrice"].toLocaleString("en-IN")}{" "}
                          <del className="text-secondary">
                            ₹{product["originalPrice"].toLocaleString("en-IN")}
                          </del>
                        </h4>
                        <button onClick={(e) => handleClick(e, product)}>
                          Add to cart
                        </button>
                      </div>
                    );
                  })}
              <div id="browse-all-products" className="product_items">
                <Link to="allproducts" className="text-decoration-none">
                  <div>Browse All Products →</div>
                </Link>
              </div>
            </div>
          </Tab.Pane>
          {/* neckbands */}
          <Tab.Pane eventKey="fifth">
            <div id="product_grid">
              {productsData &&
                productsData
                  .filter((product) => product["category"] === "Neckbands")
                  .map((product) => {
                    return (
                      <div className="product_items" key={product["id"]}>
                        <img
                          src={product["images"][0]}
                          alt={product["title"]}
                        />
                        <div>
                          <Rate rateCount={product["rateCount"]} />
                        </div>
                        <h3>{product["title"]}</h3>
                        <p>{product["info"]}</p>
                        <hr />
                        <h4>
                          ₹{product["finalPrice"].toLocaleString("en-IN")}{" "}
                          <del className="text-secondary">
                            ₹{product["originalPrice"].toLocaleString("en-IN")}
                          </del>
                        </h4>
                        <button onClick={(e) => handleClick(e, product)}>
                          Add to cart
                        </button>
                      </div>
                    );
                  })}
              <div id="browse-all-products" className="product_items">
                <Link to="allproducts" className="text-decoration-none">
                  <div>Browse All Products →</div>
                </Link>
              </div>
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default TopProducts;
