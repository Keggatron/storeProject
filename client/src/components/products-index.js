import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../actions/index';
import _ from 'lodash';

class ProductsIndex extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    
  }
  
  renderProducts() {
    return _.map(this.props.products, product => {
      return (
        <div className="col-sm-3" key={product._id}>
          <div className="">
            <img className="media-object thumbnails" src={product.images[0]}></img>
          </div>
          <div className="">{product.name}</div>
        </div>  
      )
    });
  }
  
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/product/barcode">
            Add a Product
          </Link>
        </div>
        <h3>Products</h3>
        <ul className="list-group">
          {this.renderProducts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { products: state.products };
}

export default connect(mapStateToProps, { fetchProducts })(ProductsIndex);