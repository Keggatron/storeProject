import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { barcodeSearch } from '../actions/index';

class BarcodeNew extends Component {
  renderBarcodeField(field) {
    const { meta: { touched, error} } = field
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    
    return (
      <div className={className}>
        <label>Barcode</label>
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
    this.props.barcodeSearch(values)
    .then(() => {
      this.props.history.push('/product/new')
    });
  }
  
  render() {
    const { handleSubmit } = this.props;
    
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            name="barcode"
            component={this.renderBarcodeField}
          />
          <button type="submit" className="btn btn-primary"> 
            
              Submit 
            
          </button>
          <Link to="/" className="btn btn-danger"> Cancel </Link>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors =  {}
  
  if (!values.barcode) {
    errors.barcode = "Enter a barcode!"
  }    
    
  return errors;
}


export default reduxForm({
  validate,
  form: 'BarcodeNewForm'
})(
  connect(null,{ barcodeSearch })(BarcodeNew)
);