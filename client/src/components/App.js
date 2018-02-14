import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import ProductsIndex from './products-index';
import ProductNew from './product-new';
import BarcodeNew from './barcode-new';


class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/product/barcode" render={props => <BarcodeNew {...props} /> } />
              <Route path="/product/new" render={props => <ProductNew {...props} /> } />
              <Route path="/" component={ProductsIndex} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;


    