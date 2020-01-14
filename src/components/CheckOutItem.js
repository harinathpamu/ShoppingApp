import React from "react";

import { connect } from "react-redux";
import {
  actionRemoveFromCart,
  actionAddQuantity,
  actionRemoveQuantity
} from "../actions";

function CheckOutItem(props) {
  const { data } = props;
  const [remove, setRemove] = React.useState(false);
  return (
    <div
      className={`d-flex flex-row flex-nowrap position-relative my-1${
        remove ? " shadow" : ""
      }`}
      onMouseEnter={() => setRemove(true)}
      onMouseLeave={() => setRemove(false)}
    >
      <img
        className="img-fluid rounded-lg shadow"
        src={require(`../assets/images/products//${data.product.sku}_1.jpg`)}
        style={{ width: "20%" }}
        alt={data.product.sku}
      />

      <div className="flex-grow-1 d-flex flex-column justify-content-center p-2">
        <div className="d-flex flex-row flex-nowrap align-items-center justify-content-between">
          <div>
            <p className="text-white m-0">{data.product.title}</p>
            <p className="text-secondary m-0">{data.product.style}</p>
          </div>
          <span className="text-warning font-weight-bold">
            $ {data.product.price}
          </span>
        </div>
        <div className="d-flex flex-row justify-content-between flex-nowrap">
          <span className="text-secondary">
            Quantity : <span className="text-white">{data.quantity}</span>
          </span>
          <div className="border-white">
            <span
              className="px-2 py-1 hand text-white font-weight-bold"
              onClick={() => props.actionRemoveQuantity(data.product.id)}
            >
              -
            </span>
            <span
              className="px-2 py-1 hand text-white font-weight-bold"
              onClick={() => props.actionAddQuantity(data.product.id)}
            >
              +
            </span>
          </div>
        </div>
      </div>
      {remove && (
        <div
          className="position-absolute hand"
          style={{ right: "0", top: "0" }}
        >
          <div
            className="rounded-circle bg-white p-2 d-flex align-items-center justify-content-center"
            style={{ height: "20px", width: "20px" }}
            onClick={() => props.actionRemoveFromCart(data.product.id)}
          >
            <span className="mb-1">x</span>
          </div>
        </div>
      )}
    </div>
  );
}

const getState = state => {
  return state;
};

export default connect(getState, {
  actionRemoveFromCart,
  actionAddQuantity,
  actionRemoveQuantity
})(CheckOutItem);
