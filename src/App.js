import React from "react";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Filters from "./components/Filters";
import Products from "./components/Products";

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Header drawerHandler={() => setOpen(!open)} />
      <div className="container-fluid px-md-5 pt-5">
        <div className="d-flex flex-row flex-wrap flex-lg-nowrap">
          <div className="d-flex justify-content-center px-2 py-3 mx-auto">
            <Filters />
          </div>
          <div className="w-100 px-2 py-3">
            <Products />
          </div>
        </div>
      </div>
      <Drawer open={open} />
    </React.Fragment>
  );
}

export default App;
