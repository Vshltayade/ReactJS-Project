import "../Stylings/topProducts.css";
import productsData from "../data/productsData";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Rate from "./Rate";

const TopProducts = () => {
  return (
    <div className="px-5 pt-5" style={{ color: "#c5c5c5" }}>
      <h2 className="text-center h3 fw-semibold my-5 py-5">Top Products</h2>

      <Tab.Container defaultActiveKey="first">
        
        <div className="d-flex justify-content-center">
          <Nav className="flex-row">
            <Nav.Item className="mx-5">
              <Nav.Link
                eventKey="first"
                className="nav-link"
                style={{ color: "#c5c5c5" }}
              >
                All
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mx-5">
              <Nav.Link
                eventKey="second"
                className="nav-link"
                style={{ color: "#c5c5c5" }}
              >
                Headphones
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mx-5">
              <Nav.Link
                eventKey="third"
                className="nav-link"
                style={{ color: "#c5c5c5" }}
              >
                Earbuds
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mx-5">
              <Nav.Link
                eventKey="fourth"
                className="nav-link"
                style={{ color: "#c5c5c5" }}
              >
                Earphones
              </Nav.Link>
            </Nav.Item>
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
        
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <div id="product_grid">
              {productsData &&
                productsData.map((product) => {
                  return (
                    <div className="product_items" key={product["id"]}>
                      <img src={product["images"][0]} alt={product["title"]} />
                      <div>
                        <Rate rateCount={product['rateCount']}/>
                      </div>
                      <h3>{product["title"]}</h3>
                      <p>{product["info"]}</p>
                      <hr />
                      <h4>
                        ₹{product["originalPrice"]}{" "}
                        <del className="text-secondary">
                          ₹{product["finalPrice"]}
                        </del>
                      </h4>
                      <button>Add to cart</button>
                    </div>
                  );
                })}
              <div id="browse-all-products" className="product_items">
                <div>Browse All Products →</div>
              </div>
            </div>
          </Tab.Pane>
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
                            <Rate rateCount={product['rateCount']}/>
                        </div>
                        <h3>{product["title"]}</h3>
                        <p>{product["info"]}</p>
                        <hr />
                        <h4>
                          ₹{product["originalPrice"]}{" "}
                          <del className="text-secondary">
                            ₹{product["finalPrice"]}
                          </del>
                        </h4>
                        <button>Add to cart</button>
                      </div>
                    );
                  })}
              <div id="browse-all-products" className="product_items">
                <div>Browse All Products →</div>
              </div>
            </div>
          </Tab.Pane>
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
                            <Rate rateCount={product['rateCount']}/>
                        </div>
                        <h3>{product["title"]}</h3>
                        <p>{product["info"]}</p>
                        <hr />
                        <h4>
                          ₹{product["originalPrice"]}{" "}
                          <del className="text-secondary">
                            ₹{product["finalPrice"]}
                          </del>
                        </h4>
                        <button>Add to cart</button>
                      </div>
                    );
                  })}
              <div id="browse-all-products" className="product_items">
                <div>Browse All Products →</div>
              </div>
            </div>
          </Tab.Pane>
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
                            <Rate rateCount={product['rateCount']}/>
                        </div>
                        <h3>{product["title"]}</h3>
                        <p>{product["info"]}</p>
                        <hr />
                        <h4>
                          ₹{product["originalPrice"]}{" "}
                          <del className="text-secondary">
                            ₹{product["finalPrice"]}
                          </del>
                        </h4>
                        <button>Add to cart</button>
                      </div>
                    );
                  })}
              <div id="browse-all-products" className="product_items">
                <div>Browse All Products →</div>
              </div>
            </div>
          </Tab.Pane>
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
                            <Rate rateCount={product['rateCount']}/>
                        </div>
                        <h3>{product["title"]}</h3>
                        <p>{product["info"]}</p>
                        <hr />
                        <h4>
                          ₹{product["originalPrice"]}{" "}
                          <del className="text-secondary">
                            ₹{product["finalPrice"]}
                          </del>
                        </h4>
                        <button>Add to cart</button>
                      </div>
                    );
                  })}
              <div id="browse-all-products" className="product_items">
                <div>Browse All Products →</div>
              </div>
            </div>
          </Tab.Pane>
        </Tab.Content>

      </Tab.Container>

    </div>
  );
};

export default TopProducts;
