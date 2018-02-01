import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { barcodeSearch } from '../actions';

class ProductNew extends Component {
  renderProductField(field) {
    const { meta: { touched, error} } = field
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    // console.log(this.props.product);

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input 
          className="form-control"
          type="text"
          value={field.value}
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''} 
        </div>
      </div>  
    
    
    );
  }
  
  onSubmit(values) {
    console.log(values);
  }
  
  render() {
    const { handleSubmit } = this.props;
    
    
    return (
      <div>{console.log(this.props.product)}</div>
      // <div>
      //   <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      //     <Field
      //       label="Name of Product"
      //       name="name"
      //       value={this.props.product.name}
      //       component={this.renderProductField}
      //     />
      //     <Field
      //       label="Brand"
      //       name="brand"
      //       component={this.renderProductField}
      //     />
      //     <Field
      //       label="Description"
      //       name="description"
      //       component={this.renderProductField}
      //     />
      //     <Field
      //       label="Quantity"
      //       name="quantity"
      //       component={this.renderProductField}
      //     />
      //     <Field
      //       label="Price"
      //       name="price"
      //       component={this.renderProductField}
      //     />
      //     <Field
      //       label="Category"
      //       name="category"
      //       component={this.renderProductField}
      //     />
      //     <Field
      //       label="UPC Code"
      //       name="upc"
      //       component={this.renderProductField}
      //     />
      //     <Field
      //       label="Images"
      //       name="images"
      //       component={this.renderProductField}
      //     />
          
      //     <button type="submit" className="btn btn-primary"> Submit </button>
      //     <Link to="/" className="btn btn-danger"> Cancel </Link>
      //   </form>
      // </div>
    )
  }
}

function validate(values) {
  const errors =  {}
  
  if (!values.name) {
    errors.name = "Enter a name for the product!"
  } 
  if(!values.brand) {
    errors.brand = "Enter a brand for the product!";
  }
  if(!values.description) {
    errors.description = "Enter a description!";
  }
  if(!values.quantity) {
    errors.quantity = "Enter a quantity!";
  }
  if(!values.price) {
    errors.price = "Enter a price!";
  }
  if(!values.category) {
    errors.category = "Enter a category!";
  }
  if(!values.upc) {
    errors.upc = "Enter a UPC!";
  }
    
  return errors;
}

function mapStateToProps({ newProduct }, ownProps) {
  return { product: newProduct[0][0] };
}

export default reduxForm({
  validate,
  form: 'ProductNewForm'
})(
  connect(mapStateToProps, { barcodeSearch })(ProductNew)
);