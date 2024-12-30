/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../Stylings/Cart.css";
import productsData from "../data/productsData";

const Cart = (props) => {
  let total = 0,
    discount = 0;

  const decreaseCount = (product) => {
    let obj = props.items;
    if (obj[product["id"]]["count"] === 1) {
      deleteItem(product);
      return;
    }
    props.setItems({
      ...obj,
      [product["id"]]: { count: obj[product["id"]]["count"] - 1 },
    });
  };

  const increaseCount = (product) => {
    let obj = props.items;
    props.setItems({
      ...obj,
      [product["id"]]: { count: obj[product["id"]]["count"] + 1 },
    });
  };

  const deleteItem = (product) => {
    let obj = props.items;
    delete obj[product["id"]];
    props.setItems({ ...obj });
  };

  return (
    <div className="px-5 pt-3">
      {Object.keys(props.items).length === 0 && (
        <div
          id="empty_cart"
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ color: "#c5c5c5", height: "80vh" }}
        >
          <i
            className="fa-solid fa-cart-plus m-4"
            style={{ fontSize: "150px" }}
          ></i>
          <p className="fs-3 fw-semibold">Your Cart is Empty</p>
          <Link to="/">
            <button>Start Shopping</button>
          </Link>
        </div>
      )}

      {Object.keys(props.items).length !== 0 && (
        <section
          id="cart-section"
          className="d-flex my-5"
          style={{ color: "#c5c5c5" }}
        >
          <div id="cart">
            {props.items &&
              Object.keys(props.items).length !== 0 &&
              productsData
                .filter((product) =>
                  Object.keys(props.items).includes(product["id"].toString())
                )
                .map((product) => {
                  total +=
                    product["originalPrice"] *
                    props.items[product["id"]]["count"];
                  discount +=
                    product["finalPrice"] * props.items[product["id"]]["count"];
                  return (
                    <div key={product["id"]}>
                      <div className="cart-items">
                        <div className="cart-image">
                          <img
                            src={product["images"][0]}
                            alt={product["title"]}
                            className="p-2"
                            width="200px"
                          />
                        </div>
                        <div className="p-2 cart-content">
                          <h3>
                            {product["title"]} {product["type"]}{" "}
                            {product["category"]}
                          </h3>
                          <p>
                            ₹{product["finalPrice"].toLocaleString("en-IN")}{" "}
                            <del className="text-secondary">
                              ₹{product["originalPrice"].toLocaleString("en-IN")}
                            </del>
                          </p>
                          <div>
                            <div>
                              <button onClick={() => decreaseCount(product)}>
                                -
                              </button>
                              {/* <p id="product_count"></p> */}
                              <input
                                type="text"
                                readOnly={true}
                                value={props.items[product["id"]]["count"]}
                              />
                              <button onClick={() => increaseCount(product)}>
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="cart-delete">
                          <button onClick={() => deleteItem(product)}>
                            <i
                              className="fa-solid fa-trash"
                              title="Remove Item"
                            ></i>
                          </button>
                        </div>
                      </div>
                      <hr />
                    </div>
                  );
                })}
          </div>

          <div id="order">
            <pre>
              <h2>
                Order Summary ( {Object.keys(props.items).length} items ){" "}
              </h2>
            </pre>
            <div>
              <p>Original Price</p>
              <p>₹{total.toLocaleString("en-IN")}</p>
            </div>
            <div>
              <p>Discount</p>
              <p className="free">- ₹{(total - discount).toLocaleString("en-IN")}</p>
            </div>
            <div>
              <p>Delivery</p>
              <p className="free">Free</p>
            </div>
            <hr />
            <div id="total-price">
              <p>Total Price</p>
              <p>₹{discount.toLocaleString("en-IN")}</p>
            </div>
            <button
              onClick={() => {
                props.setItems({});
              }}
            >
              Checkout
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default Cart;
