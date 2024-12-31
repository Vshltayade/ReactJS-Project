/* eslint-disable react/prop-types */
import "../Stylings/allproducts.css";
import productsData from "../data/productsData";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Rate from "./Rate";
import { useRef, useState } from "react";

const AllProducts = (props) => {
  // price range state
  const [amt, setAmt] = useState(449);

  // input price range
  const price = useRef(amt);

  // checkbox states for filtering
  const [check, setCheck] = useState({
    jbl: false,
    boat: false,
    sony: false,
    headphones: false,
    earbuds: false,
    earphones: false,
    neckbands: false,
    priceRange: false,
  });

  // sorting arrays
  let arr1 = [],
    arr2 = [];
  Object.assign(arr1, productsData);
  Object.assign(arr2, productsData);

  // checkbox changes handler
  const handleChange = (e) => {
    let obj = check;
    const { name, checked } = e.target;
    setCheck({ ...obj, [name]: checked });
  };

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

  // check price range
  const handleRange = () => {
    let obj = check;
    setCheck({ ...obj, priceRange: true });
    setAmt(price.current.value);
    console.log(price.current.value);
  };

  // clearing filter function
  const clearFilter = () => {
    setAmt(449);
    price.current.value = 449;
    // document.getElementsByClassName('nav-item')[3].children.item(0).classList.add('active')
    setCheck({
      jbl: false,
      boat: false,
      sony: false,
      headphones: false,
      earbuds: false,
      earphones: false,
      neckbands: false,
      priceRange: false,
    });
  };

  return (
    <div id="all_products" className="my-5" style={{ color: "#c5c5c5" }}>
      {/* container for filter options and filtered content */}
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="d-flex justify-content-around mx-0">
          {/* filtering options */}
          <Col id="side-bar" sm={2}>
            {(check.jbl ||
              check.boat ||
              check.priceRange ||
              check.sony ||
              check.headphones ||
              check.earbuds ||
              check.earphones ||
              check.neckbands) && (
              <button className="clear my-4 mx-4" onClick={clearFilter}>
                Clear Filters
              </button>
            )}

            {/* sort options */}
            <div id="sort-by">
              <h5>Sort By</h5>
              <hr />

              <Nav variant="" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Latest</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Featured</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Top Rated</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Price(Lowest First)</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Price(Highest First)</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>

            {/* filter options */}
            <div id="filter-by">
              <h5>Filter By</h5>
              <hr />
              <h6>Brand</h6>

              {/* filter by brands */}
              <form>
                <div className="form-check pe-3 py-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="jbl"
                    id="jbl"
                    checked={check.jbl}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <label className="form-check-label" htmlFor="jbl">
                    JBL
                  </label>
                </div>
                <div className="form-check pe-3 py-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="boat"
                    id="boat"
                    checked={check.boat}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <label className="form-check-label" htmlFor="boat">
                    BoAt
                  </label>
                </div>
                <div className="form-check pe-3 py-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="sony"
                    id="sony"
                    checked={check.sony}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <label className="form-check-label" htmlFor="sony">
                    Sony
                  </label>
                </div>
              </form>

              <h6 className="mt-4">Category</h6>

              {/* filter by category */}
              <form>
                <div className="form-check pe-3 py-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="headphones"
                    id="headphones"
                    checked={check.headphones}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <label className="form-check-label" htmlFor="headphones">
                    Headphones
                  </label>
                </div>
                <div className="form-check pe-3 py-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="earbuds"
                    id="earbuds"
                    checked={check.earbuds}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <label className="form-check-label" htmlFor="earbuds">
                    Earbuds
                  </label>
                </div>
                <div className="form-check pe-3 py-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="earphones"
                    id="earphones"
                    checked={check.earphones}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <label className="form-check-label" htmlFor="earphones">
                    Earphones
                  </label>
                </div>
                <div className="form-check pe-3 py-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="neckbands"
                    id="neckbands"
                    checked={check.neckbands}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <label className="form-check-label" htmlFor="neckbands">
                    Neckbands
                  </label>
                </div>
              </form>
            </div>

            {/* price range filter */}
            <label htmlFor="customRange2" className="form-label mt-4 h6">
              Price
            </label>
            <p>{amt}</p>
            <input
              type="range"
              name="price"
              className="form-range"
              min="449"
              max="19990"
              ref={price}
              onChange={handleRange}
              id="customRange2"
            />
          </Col>

          {/* filtered data */}
          <Col sm={9}>
            <Tab.Content>
              {/* default products */}
              <Tab.Pane eventKey="first">
                {!check.priceRange &&
                  !check.jbl &&
                  !check.boat &&
                  !check.sony &&
                  !check.headphones &&
                  !check.earbuds &&
                  !check.earphones &&
                  !check.neckbands && (
                    <div id="product_grid" className="my-0 mx-0">
                      {productsData &&
                        productsData.map((product) => {
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
                                  ₹
                                  {product["originalPrice"].toLocaleString(
                                    "en-IN"
                                  )}
                                </del>
                              </h4>
                              <button onClick={(e) => handleClick(e, product)}>
                                Add to cart
                              </button>
                            </div>
                          );
                        })}
                    </div>
                  )}
              </Tab.Pane>
              {/* featured products */}
              <Tab.Pane eventKey="second">
                {!check.priceRange &&
                  !check.jbl &&
                  !check.boat &&
                  !check.sony &&
                  !check.headphones &&
                  !check.earbuds &&
                  !check.earphones &&
                  !check.neckbands && (
                    <div id="product_grid" className="my-0 mx-0">
                      {productsData &&
                        productsData
                          .filter(
                            (product) => product["tag"] === "featured-product"
                          )
                          .map((product) => {
                            return (
                              <div
                                className="product_items"
                                key={product["id"]}
                              >
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
                                  ₹
                                  {product["finalPrice"].toLocaleString(
                                    "en-IN"
                                  )}{" "}
                                  <del className="text-secondary">
                                    ₹
                                    {product["originalPrice"].toLocaleString(
                                      "en-IN"
                                    )}
                                  </del>
                                </h4>
                                <button
                                  onClick={(e) => handleClick(e, product)}
                                >
                                  Add to cart
                                </button>
                              </div>
                            );
                          })}
                    </div>
                  )}
              </Tab.Pane>
              {/* top rated products */}
              <Tab.Pane eventKey="third">
                {!check.priceRange &&
                  !check.jbl &&
                  !check.boat &&
                  !check.sony &&
                  !check.headphones &&
                  !check.earbuds &&
                  !check.earphones &&
                  !check.neckbands && (
                    <div id="product_grid" className="my-0 mx-0">
                      {productsData &&
                        productsData
                          .filter((product) => product["rateCount"] === 5)
                          .map((product) => {
                            return (
                              <div
                                className="product_items"
                                key={product["id"]}
                              >
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
                                  ₹
                                  {product["finalPrice"].toLocaleString(
                                    "en-IN"
                                  )}{" "}
                                  <del className="text-secondary">
                                    ₹
                                    {product["originalPrice"].toLocaleString(
                                      "en-IN"
                                    )}
                                  </del>
                                </h4>
                                <button
                                  onClick={(e) => handleClick(e, product)}
                                >
                                  Add to cart
                                </button>
                              </div>
                            );
                          })}
                    </div>
                  )}
              </Tab.Pane>
              {/* price low to high */}
              <Tab.Pane eventKey="fourth">
                {!check.priceRange &&
                  !check.jbl &&
                  !check.boat &&
                  !check.sony &&
                  !check.headphones &&
                  !check.earbuds &&
                  !check.earphones &&
                  !check.neckbands && (
                    <div id="product_grid" className="my-0 mx-0">
                      {arr1 &&
                        arr1
                          .sort((a, b) => a["finalPrice"] - b["finalPrice"])
                          .map((product) => {
                            return (
                              <div
                                className="product_items"
                                key={product["id"]}
                              >
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
                                  ₹
                                  {product["finalPrice"].toLocaleString(
                                    "en-IN"
                                  )}{" "}
                                  <del className="text-secondary">
                                    ₹
                                    {product["originalPrice"].toLocaleString(
                                      "en-IN"
                                    )}
                                  </del>
                                </h4>
                                <button
                                  onClick={(e) => handleClick(e, product)}
                                >
                                  Add to cart
                                </button>
                              </div>
                            );
                          })}
                    </div>
                  )}
              </Tab.Pane>
              {/* price high to low */}
              <Tab.Pane eventKey="fifth">
                {!check.priceRange &&
                  !check.jbl &&
                  !check.boat &&
                  !check.sony &&
                  !check.headphones &&
                  !check.earbuds &&
                  !check.earphones &&
                  !check.neckbands && (
                    <div id="product_grid" className="my-0 mx-0">
                      {arr2 &&
                        arr2
                          .sort((a, b) => b["finalPrice"] - a["finalPrice"])
                          .map((product) => {
                            return (
                              <div
                                className="product_items"
                                key={product["id"]}
                              >
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
                                  ₹
                                  {product["finalPrice"].toLocaleString(
                                    "en-IN"
                                  )}{" "}
                                  <del className="text-secondary">
                                    ₹
                                    {product["originalPrice"].toLocaleString(
                                      "en-IN"
                                    )}
                                  </del>
                                </h4>
                                <button
                                  onClick={(e) => handleClick(e, product)}
                                >
                                  Add to cart
                                </button>
                              </div>
                            );
                          })}
                    </div>
                  )}
              </Tab.Pane>
            </Tab.Content>

            {/* filtering content based on brands and category and price range */}
            <div id="product_grid" className="my-0 mx-0">
              {/* JBL products */}
              {check.jbl &&
                productsData &&
                productsData
                  .filter((product) => product["brand"] === "JBL")
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
              {/* Boat products */}
              {check.boat &&
                productsData &&
                productsData
                  .filter((product) => product["brand"] === "boAt")
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
              {/* Sony products */}
              {check.sony &&
                productsData &&
                productsData
                  .filter((product) => product["brand"] === "Sony")
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
              {/* headphones products */}
              {check.headphones &&
                productsData &&
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
              {/* earbuds products */}
              {check.earbuds &&
                productsData &&
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
              {/* earphones products */}
              {check.earphones &&
                productsData &&
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
              {/* neckbands products */}
              {check.neckbands &&
                productsData &&
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
              {/* price range products */}
              {check.priceRange &&
                productsData &&
                productsData
                  .filter((product) => product["finalPrice"] <= amt)
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
            </div>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default AllProducts;
