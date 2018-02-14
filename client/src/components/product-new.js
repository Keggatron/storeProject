import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateProducts } from '../actions';

class ProductNew extends Component {
  constructor(props) {
    super(props);
    
    this.renderProductField = this.renderProductField.bind(this);
    this.handleInitialize = this.handleInitialize.bind(this);
  }
  
  componentDidMount() {
    
    if(!this.props.product || this.props.product.length < 1){
      
      this.props.history.push('/product/barcode');
    } else {
      this.handleInitialize();
    }
  }
  
  handleInitialize() {
    const initData = {
      "name":this.props.product.name || this.props.product.title,
      "brand":this.props.product.brand,
      "description":this.props.product.description,
      "quantity": this.props.product.quantity || 0,
      "category": this.props.product.category || "",
      "upc": this.props.product.upc,
      "images":this.props.product.images,
      "price": this.props.product.price
    };
    
    this.props.initialize(initData);
  }
  
  
  renderProductField(field) {
    const { meta: { touched, error} } = field
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input 
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''} 
        </div>
      </div>  
    
    
    );
  }
  
  onSubmit(values) {
    this.props.updateProducts(values)
    .then(() => {
      this.props.history.push('/');
    });
  }
  
  render() {
    const { handleSubmit } = this.props;
    
    
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Name of Product"
            name="name"
            component={this.renderProductField}
          />
          <Field
            label="Brand"
            name="brand"
            component={this.renderProductField}
          />
          <Field
            label="Description"
            name="description"
            component={this.renderProductField}
          />
          <Field
            label="Quantity"
            name="quantity"
            component={this.renderProductField}
          />
          <Field
            label="Price"
            name="price"
            component={this.renderProductField}
          />
          <Field
            label="Category"
            name="category"
            component={this.renderProductField}
          />
          <Field
            label="UPC Code"
            name="upc"
            component={this.renderProductField}
          />
          <Field
            label="Images"
            name="images"
            component={this.renderProductField}
          />
          
          <button type="submit" className="btn btn-primary"> Submit </button>
          <Link to="/" className="btn btn-danger"> Cancel </Link>
        </form>
      </div>
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
  if(!newProduct || newProduct.length < 1) {
    return { product: [] };
  } else {
    return { product: newProduct[0][0] };
  }
}

export default reduxForm({
  validate,
  form: 'ProductNewForm'
})(
  connect(mapStateToProps, { updateProducts })(ProductNew)
);