/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../Stylings/header.css";
import { dropdownMenu } from "../data/headerData";
import productsData from "../data/productsData";
import { useState } from "react";

const Header = (props) => {
  // search state for searching products
  const [search, setSearch] = useState("");

  // input product name
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top background px-5 pt-3">
        <div className="container-fluid px-0">
          {/* brand name */}
          <Link to="" className="navbar-brand">
            <h1 className="fw-semibold fc1" style={{ fontSize: "24px" }}>
              Tech-Shop
            </h1>
          </Link>
          {/* collapse button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* collapsible content - icons */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* search icon - search products*/}
              <li className="nav-item me-5">
                <i
                  className="fa-solid fa-magnifying-glass fc1 fs-5"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <div id="title-search">Search</div>
                </i>
              </li>
              {/* cart icon - go to cart*/}
              <li className="nav-item me-5">
                {Object.keys(props.items).length !== 0 && (
                  <div id="count_cart">{Object.keys(props.items).length}</div>
                )}
                <Link to="cart">
                  <i
                    id="cart_icon"
                    className="fa-solid fa-cart-shopping fc1 fs-5"
                  >
                    <div id="title-cart">Cart</div>
                  </i>
                </Link>
              </li>
              {/* user icon - login / signup */}
              <li className="nav-item">
                <i className="fa-solid fa-user fc1 fs-5">
                  <div id="signup">
                    <h4>Hello!</h4>
                    <p>Access account and manage orders</p>
                    <button
                      data-bs-target="#exampleModalToggle"
                      data-bs-toggle="modal"
                    >
                      Login / Signup
                    </button>
                    <hr />
                    <span>{dropdownMenu[0]["link"]}</span>
                  </div>
                </i>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* modals */}
      {/* login modal */}
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content text-white"
            style={{ background: "#151515" }}
          >
            <div className="modal-body">
              <button
                type="button"
                className="btn-close float-end bg-light"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div id="form_div">
                <form>
                  <h2>Login</h2>
                  <p>
                    New to Tech-Shop ?{" "}
                    <span
                      data-bs-target="#exampleModalToggle2"
                      data-bs-toggle="modal"
                    >
                      Create an account
                    </span>
                  </p>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                  <br />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                  <br />
                  <button>Signup</button>
                  <div className="line-text-line">or login with</div>
                  <div id="login_links">
                    <div>Facebook</div>
                    <div>Google</div>
                    <div>Twitter</div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* signup modal */}
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content text-white"
            style={{ background: "#151515" }}
          >
            <div className="modal-body m-0 p-0">
              <button
                type="button"
                className="btn-close float-end bg-light"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div id="form_div">
                <form>
                  <h2>Signup</h2>
                  <p>
                    Already have an account ?{" "}
                    <span
                      data-bs-target="#exampleModalToggle"
                      data-bs-toggle="modal"
                    >
                      Login
                    </span>
                  </p>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                  />
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                  <br />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                  <br />
                  <input
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="Confirm Password"
                  />
                  <br />
                  <button>Signup</button>
                  <div className="line-text-line">or login with</div>
                  <div id="login_links">
                    <div>Facebook</div>
                    <div>Google</div>
                    <div>Twitter</div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* search modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body" style={{ background: "#151515" }}>
              <form>
                {/* search items */}
                <input
                  type="search"
                  name="search"
                  value={search}
                  placeholder="Search for product..."
                  style={{ background: "#202020", height: "45px" }}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </form>
              <br />
              <div>
                {/* view searched products */}
                <ul id="search-list" style={{ background: "#252525" }}>
                  {search &&
                    productsData
                      .filter((product) =>
                        product["title"]
                          .toLowerCase()
                          .includes(search.toLowerCase())
                      )
                      .map((product) => {
                        return (
                          <Link
                            to={`product-details/${product["id"]}`}
                            className="text-decoration-none text-white"
                            key={product["id"]}
                          >
                            <li
                              onClick={() => setSearch("")}
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              {product["title"]}
                            </li>
                          </Link>
                        );
                      })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
