import React from "react";

import { connect } from "react-redux";

import CheckOutItem from "./CheckOutItem";

function Drawer(props) {
  const { open } = props;
  let total_sum = 0;
  props.checkOutItems.forEach(data => {
    total_sum += data.product.price * data.quantity;
  });

  return (
    <div
      className={`sidenav bg-dark shadow-sm${open ? " navopen" : " navclose"}`}
      style={{ overflowY: "auto" }}
    >
      <div className="d-flex flex-column text-nowrap h-100">
        <div
          className="p-3 flex-grow-1"
          style={{ overflowY: "auto", overflowX: "hidden" }}
        >
          {props.checkOutItems.map((data, index) => {
            return <CheckOutItem key={index} data={data} />;
          })}
        </div>
        <div
          className="px-3 py-2"
          style={{ boxShadow: "0px 0px 20px 15px #212428" }}
        >
          <div className="d-flex flex-row justify-content-between align-items-center">
            <span className="text-secondary">SUBTOTAL</span>
            <div className="text-right">
              <span className="text-warning h5">$ {parseFloat(total_sum)}</span>
              <br />
              <span className="text-secondary small">
                OR UP TO 12 x $ {parseInt(total_sum / 12)}
              </span>
            </div>
          </div>
          <div
            className="rounded p-2 my-3 text-white text-center hand"
            style={{ backgroundColor: "#000" }}
            onClick={() => alert(`Total Payable $${total_sum}`)}
          >
            CHECKOUT
          </div>
        </div>
      </div>
    </div>
  );
}

const getState = state => {
  return {
    checkOutItems: state.checkOutItems
  };
};

export default connect(getState)(Drawer);
