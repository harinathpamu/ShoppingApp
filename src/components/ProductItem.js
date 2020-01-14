import React from "react";

import { connect } from "react-redux";
import { actionAddToCart } from "../actions";

function ProductItem(props) {
  const { data } = props;
  const price_splits = data.price + "";
  const splits = price_splits.split(".");

  const [apply, setApply] = React.useState(false);
  return (
    <div
      className={`col p-2${apply ? " border" : ""}`}
      onMouseEnter={() => setApply(true)}
      onMouseLeave={() => setApply(false)}
    >
      <img
        className="img-fluid w-100"
        src={require(`../assets/images/products//${data.sku}_1.jpg`)}
        alt={data.sku}
      />
      <p
        className="text-center product-title position-relative font-weight-bold m-0 my-2"
        style={{ height: "45px" }}
      >
        {data.title}
      </p>
      <div className="text-center my-1">
        <div>
          <small>{data.currencyFormat}</small>
          <b className="h3">{splits[0]}</b>
          <span>.{splits[1] || 0}</span>
        </div>{" "}
        or{" "}
        <span className="font-weight-light">
          {data.installments} x ${parseInt(data.price / data.installments)}
        </span>
      </div>
      <div
        className={`rounded p-2 text-white text-center hand${
          apply ? " shadow bg-warning" : " bg-dark"
        }`}
        onClick={() => props.actionAddToCart(data)}
      >
        Add to Cart
      </div>
    </div>
  );
}

export default connect(null, { actionAddToCart })(ProductItem);
