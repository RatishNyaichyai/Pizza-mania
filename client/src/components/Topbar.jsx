import React from "react";
// eslint-disable-next-line
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from '../actions/userAction';

const Topbar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
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
              {currentUser ? (<>
                <li class="nav-item">
                  <Link class="nav-link">
                    {currentUser.user[0].name}
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="" class="nav-link">
                    My order
                  </Link>
                </li>
                <li class="nav-item">
                  <Link onClick={() => {
                    dispatch(logoutUser())
                  }} class="nav-link">
                    Logout
                  </Link>
                </li>

              </>


              ) : (<>
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
              </>)}

              <li class="nav-item">
                <Link to="/cart" class="nav-link">
                  <span>
                    <i style={{ color: "#ffbc00" }} class="bi bi-cart-fill"></i>
                  </span>
                  <sup> {cartState.cartItems.length}</sup>
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
