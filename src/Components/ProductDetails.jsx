/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import "../Stylings/productDetails.css";
import productsData from "../data/productsData";
import Rate from "./Rate";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import reviewsData from "../data/reviewsData";
import { FaUserEdit } from "react-icons/fa";

const ProductDetails = (props) => {

  const { id } = useParams();

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
    <div className="px-5 my-5" style={{ color: "#c5c5c5" }}>
      {/* product images and pricing */}
      <main id="selected-product" className="d-flex">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Nav variant="" className="flex-column">
            <div id="different_images">
              <Nav.Item>
                <Nav.Link eventKey="first">
                  <img
                    src={productsData[id - 1]["images"][0]}
                    alt={productsData[id - 1]["title"]}
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">
                  <img
                    src={productsData[id - 1]["images"][1]}
                    alt={productsData[id - 1]["title"]}
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  <img
                    src={productsData[id - 1]["images"][2]}
                    alt={productsData[id - 1]["title"]}
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">
                  <img
                    src={productsData[id - 1]["images"][3]}
                    alt={productsData[id - 1]["title"]}
                  />
                </Nav.Link>
              </Nav.Item>
            </div>
          </Nav>
          <div id="one_image">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <img
                  src={productsData[id - 1]["images"][0]}
                  alt={productsData[id - 1]["title"]}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <img
                  src={productsData[id - 1]["images"][1]}
                  alt={productsData[id - 1]["title"]}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <img
                  src={productsData[id - 1]["images"][2]}
                  alt={productsData[id - 1]["title"]}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <img
                  src={productsData[id - 1]["images"][3]}
                  alt={productsData[id - 1]["title"]}
                />
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
        <div id="product_add_to_cart">
          <div id="one_product_info">
            <h1>{productsData[id - 1]["title"]}</h1>
            <p>{productsData[id - 1]["info"]}</p>
            <div>
              <div>
                <Rate rateCount={productsData[id - 1]["rateCount"]} />
              </div>
              <span>|</span>
              <span>{productsData[id - 1]["ratings"]} Ratings</span>
            </div>
          </div>
          <hr />
          <div id="one_product_pricing">
            <div>
              <h2>
                ₹{productsData[id - 1]["finalPrice"].toLocaleString("en-IN")}{" "}
                <del className="text-secondary">
                  ₹{productsData[id - 1]["originalPrice"].toLocaleString("en-IN")}
                </del>
              </h2>
              <p className="one_product_pricing_save">You save: ₹5,000 (33%)</p>
              <p className="one_product_pricing_incl">
                (inclusive of all taxes)
              </p>
            </div>
            <div>
              <div id="in_stock">
                <i className="fa-solid fa-check"></i>In Stock
              </div>
            </div>
          </div>
          <hr />
          <div id="offers_discounts">
            <h3>Offers and Discounts</h3>
            <div>
              <p>No cost EMI on Credit Card</p>
              <p>Pay Later & Avail Cashback</p>
            </div>
          </div>
          <hr />
          <button onClick={(e) => handleClick(e, productsData[id - 1])}>
            Add to Cart
          </button>
        </div>
      </main>

      {/* product specification, overview, reviews */}
      <section className="my-5 py-5">
        <Tab.Container defaultActiveKey="first">
          <div className="d-flex justify-content-center">
            <Nav className="flex-row">
              <Nav.Item className="mx-5">
                <Nav.Link
                  eventKey="first"
                  className="nav-link"
                  style={{ color: "#c5c5c5" }}
                >
                  Specifications
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-5">
                <Nav.Link
                  eventKey="second"
                  className="nav-link"
                  style={{ color: "#c5c5c5" }}
                >
                  Overview
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-5">
                <Nav.Link
                  eventKey="third"
                  className="nav-link"
                  style={{ color: "#c5c5c5" }}
                >
                  Reviews
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          <Tab.Content>
            <Tab.Pane eventKey="first">
              <div id="product_detail_info" className="px-5">
                <div>
                  <p>Brand</p>
                  <p>{productsData[id - 1]["brand"]}</p>
                </div>
                <div>
                  <p>Model</p>
                  <p>{productsData[id - 1]["title"]}</p>
                </div>
                <div>
                  <p>Generic Name</p>
                  <p>{productsData[id - 1]["category"]}</p>
                </div>
                <div>
                  <p>Headphone Type</p>
                  <p>{productsData[id - 1]["type"]}</p>
                </div>
                <div>
                  <p>Connectivity</p>
                  <p>{productsData[id - 1]["connectivity"]}</p>
                </div>
                <div>
                  <p>Microphone</p>
                  <p>Yes</p>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div id="product_overview" className="px-5 my-5">
                <h5 className=" fw-semibold">
                  The{" "}
                  <span style={{ color: "#cc0909" }}>
                    {productsData[id - 1]["title"]}
                  </span>{" "}
                  {productsData[id - 1]["type"]}{" "}
                  {productsData[id - 1]["connectivity"]}{" "}
                  {productsData[id - 1]["category"]} provides with fabulous
                  sound quality
                </h5>

                <ul className="my-4">
                  <li>Sound Tuned to Perfection</li>
                  <li>Comfortable to Wear</li>
                  <li>Long Hours Playback Time</li>
                </ul>

                <p className="lh-lg">
                  Buy the{" "}
                  <span className="fw-bold">
                    {productsData[id - 1]["title"]}{" "}
                    {productsData[id - 1]["type"]}{" "}
                    {productsData[id - 1]["connectivity"]}{" "}
                    {productsData[id - 1]["category"]}
                  </span>{" "}
                  which offers you with fabulous music experience by providing
                  you with awesome sound quality that you can never move on
                  from. Enjoy perfect flexibility and mobility with amazing
                  musical quality with these {productsData[id - 1]["category"]}{" "}
                  giving you a truly awesome experience. It blends with
                  exceptional sound quality and a range of smart features for an
                  unrivalled listening experience.
                </p>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <div className="px-5 my-5">
                {reviewsData &&
                  reviewsData.map((review) => {
                    return (
                      <div className="my-5" key={review["id"]}>
                        <div className="d-flex">
                          <div className="pe-3">
                            <FaUserEdit size={50} />
                          </div>
                          <div>
                            <h6 className="fw-semibold">{review["name"]}</h6>
                            <div className="d-inline-block">
                              <Rate rateCount={review["rateCount"]} />
                            </div>
                            <span className="px-2">|</span>
                            <span className="text-secondary">
                              {review["date"]}
                            </span>
                          </div>
                        </div>
                        <p className="my-2 fw-light">{review["review"]}</p>
                      </div>
                    );
                  })}
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </section>

      {/* related products */}
      <section>
        <h2 className="text-center h3 fw-semibold my-5 py-5">
          Related Products
        </h2>

        <div id="product_grid">
          {productsData &&
            productsData
              .filter(
                (product) =>
                  product["category"] === productsData[id - 1]["category"]
              )
              .map((product) => {
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
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
