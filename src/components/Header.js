import React from "react";
import Cart from "../assets/images/cart.svg";

import { connect } from "react-redux";

function Header(props) {
  return (
    <nav
      className="navbar navbar-light bg-dark shadow fixed-top"
      style={{ zIndex: "1" }}
    >
      <a className="navbar-brand" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          viewBox="0 0 231 44"
        >
          <g fill="#fff" fillRule="evenodd">
            <path
              fill="#fff"
              d="M81.355 35.837V25.87c0-.1-3.496-.1-10.49 0v-4.8c0-.098 3.497-.098 10.49 0h4.166V38.27c-4.048 3.266-9.739 5.403-15.254 5.403-11.909 0-21.413-9.262-21.413-20.959 0-11.696 9.563-21.43 21.648-21.43 5.94 0 10.986 2.077 15.136 6.23a4.95 4.95 0 0 1-6.245 1.226c-3.13-1.727-6.093-2.59-8.89-2.59-9.388 0-16.897 7.361-16.897 16.564 0 9.263 7.568 16.625 16.955 16.625 3.696 0 7.626-1.306 10.794-3.503zM145.76 1.816a5.217 5.217 0 0 1 5.217 5.217v36.344h-5.217V1.816zm18.442 0h24.95a4.924 4.924 0 0 1-4.923 4.924h-15.912a.578.578 0 0 0-.578.578v13.264h19.184a4.864 4.864 0 0 1-4.864 4.864h-14.32v17.931h-4.693V2.972c0-.638.517-1.156 1.156-1.156zm66.01 4.577l-13.603 22.73v14.254h-4.946V28.008L195.764 1.816h2.954c1.514 0 2.919.79 3.706 2.083l11.933 19.618 13.258-21.701a3.024 3.024 0 0 1 2.595 4.577zM96.838 1.908h1.194c2.31 0 4.48 1.104 5.84 2.97l22.475 30.814V1.908a4.635 4.635 0 0 1 4.635 4.635V43.47h-4.811l-24.64-33.724V43.47h-4.693V1.908z"
            />
            <g>
              <ellipse
                cx="29.857"
                cy="22.265"
                fill="#EC4C6F"
                rx="7.857"
                ry="7.952"
              />
              <path
                fill="#fff"
                d="M22.436 1.98C30.248-1.256 37.993.305 45.672 6.663a4.82 4.82 0 0 1-6.358 1.204c-5.14-3.144-10.203-3.545-15.19-1.204-6.12 2.872-9.65 7.235-10.593 13.088v4.334c1.188 5.928 4.459 10.297 9.812 13.107 5.354 2.81 11.847 1.813 19.48-2.99l2.849 3.434c-8.345 5.66-16.09 6.948-23.236 3.862C11.716 36.87 8.905 28.815 8.905 21.761c0-7.054 2.98-15.48 13.53-19.78z"
              />
              <path
                fill="#fff"
                d="M0 28.096l24.075-6.476a3.508 3.508 0 0 0 1.966-1.38 1.59 1.59 0 0 1 1.912-.558l3.696 1.533a.145.145 0 0 1 .058.223l-2.275 2.863a1.774 1.774 0 0 1-2.026.552 3.479 3.479 0 0 0-2.44-.021l-19.487 7.1A4.082 4.082 0 0 1 0 28.095z"
              />
            </g>
          </g>
        </svg>
      </a>
      <div className="position-relative">
        <img
          className="hand"
          src={Cart}
          width="30px"
          alt="Cart"
          onClick={props.drawerHandler}
        />
        <div
          className="position-absolute"
          style={{ right: "-10px", top: "-8px" }}
        >
          <div
            className="rounded-circle bg-white p-2 d-flex align-items-center justify-content-center"
            style={{ height: "20px", width: "20px" }}
          >
            <span className="">{props.checkOutCount}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

const getState = state => {
  return {
    checkOutCount: state.checkOutItems.length
  };
};

export default connect(getState)(Header);
