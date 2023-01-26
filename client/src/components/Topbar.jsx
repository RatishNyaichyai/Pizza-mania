import React from "react";
// eslint-disable-next-line
import { Link, useParams, useNavigate } from "react-router-dom";

const Topbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">
            <img class="logo" alt="logo" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto  mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/aboutus" class="nav-link" href="#">
                  About us
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/contactus" class="nav-link">
                  Contact us
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/login" class="nav-link">
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/register" class="nav-link">
                  Register
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/cart" class="nav-link">
                  <span>
                    <i style={{ color: "#ffbc00" }} class="bi bi-cart-fill"></i>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
