/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../Stylings/header.css";
import { dropdownMenu } from "../data/headerData";

const Header = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top background px-5 pt-3">
        <div className="container-fluid px-0">
          <Link to="" className="navbar-brand">
            <h1 className="fw-semibold fc1" style={{ fontSize: "24px" }}>
              Tech-Shop
            </h1>
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-5">
                <Link to="search">
                  <i className="fa-solid fa-magnifying-glass fc1 fs-5">
                    <div id="title-search">Search</div>
                  </i>
                </Link>
              </li>
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
              <li className="nav-item">
                <i className="fa-solid fa-user fc1 fs-5">
                  <div id="signup">
                    <h4>Hello!</h4>
                    <p>Access account and manage orders</p>
                    <Link to="login">
                      <button>Login / Signup</button>
                    </Link>
                    <hr />
                    <span>{dropdownMenu[0]["link"]}</span>
                  </div>
                </i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
