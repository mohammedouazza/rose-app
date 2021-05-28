import React from "react";
import Home from "../pages/home/Home";
import { Switch, Route } from "react-router-dom";
import Products from "../pages/products/Products";
import Contact from "../pages/contact/Contact";
import AddProduct from "../pages/products/AddProduct";

function Content() {
  return (
    <div className="app-content">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/create">
          <AddProduct />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default Content;
