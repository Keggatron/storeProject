import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/index';
import _ from 'lodash';

class ProductsIndex extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  
  renderProducts() {
    return _.map(this.props.products, product => {
      return (
        <li className="list-group-item" key={product.id}>
          {product.name}
        </li>  
      )
    });
  }
  
  render() {
    return (
      <div>
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