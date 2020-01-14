import React from "react";

import { connect } from "react-redux";

import ProductItem from "./ProductItem";
import DropDown from "./DropDown";

const visual_options = ["none", "low to high", "high to low"];
const actual_options = [0, 1, 2];

function Products(props) {
  const [filter, setFilter] = React.useState(0);
  const onOptionChange = selected_option => {
    setFilter(selected_option);
  };
  return (
    <React.Fragment>
      <div className="d-flex justify-content-between">
        <span>Products</span>
        <div>
          <span className="h6 mx-2">Filters</span>
          <DropDown
            visual_options={visual_options}
            actual_options={actual_options}
            onChange={onOptionChange}
          />
        </div>
      </div>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 p-3 justify-content-center">
        {getSortTypeList(
          applyFilters(props.filters, [...props.products]),
          filter
        ).map(product => {
          return <ProductItem key={product.id} data={product} />;
        })}
      </div>
    </React.Fragment>
  );
}

const applyFilters = (filters = [], products) => {
  if (filters.length === 0) return products;
  return products.filter(product => {
    for (let i in filters) {
      return product.availableSizes.includes(filters[i]);
    }
  });
};

const getSortTypeList = (resultList, filterType) => {
  if (filterType === 0) return resultList;
  return resultList.sort((product1, product2) => {
    if (filterType === 1) {
      if (parseInt(product1.price) < parseInt(product2.price)) return -1;
      else return 0;
    } else if (filterType === 2) {
      if (parseInt(product1.price) > parseInt(product2.price)) return -1;
      else return 0;
    } else return 0;
  });
};

const getState = state => {
  return {
    products: state.products,
    filters: state.filters
  };
};

export default connect(getState)(Products);
