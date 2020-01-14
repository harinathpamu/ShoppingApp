import React from "react";

import { connect } from "react-redux";
import { actionFilter } from "../actions";

const filter_types = ["XS", "S", "M", "ML", "X", "XL", "XXL"];

function Filters(props) {
  const [filters, setFilters] = React.useState(
    new Array(filter_types.length).fill(false)
  );
  return (
    <div>
      <p className="h6">Sizes</p>
      <div className="d-flex flex-row justify-content-center flex-wrap">
        {filter_types.map((filter, index) => {
          return (
            <div
              key={index}
              className={`d-flex justify-content-center align-items-center rounded-circle p-2 m-2 filter border hand ${
                filters[index] ? "shadow-lg" : ""
              }`}
              onClick={() => {
                filters[index] = !filters[index];
                setFilters([...filters]);
                const applied_filters = [];
                filters.forEach((data, index) => {
                  if (data) return applied_filters.push(filter_types[index]);
                });
                props.actionFilter(applied_filters);
              }}
              style={{
                backgroundColor: `${filters[index] ? "#000" : ""}`,
                color: `${filters[index] ? "#fff" : ""}`
              }}
            >
              <span>{filter}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default connect(null, { actionFilter })(Filters);
