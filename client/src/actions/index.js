import axios from 'axios';
import { FETCH_PRODUCTS, BARCODE_SEARCH, UPDATE_PRODUCTS } from "./types";

export const fetchProducts = () => async dispatch => {
  const res = await axios.get('/api/fetchproducts');
  
  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};


export const barcodeSearch = (values) => async dispatch => {
  const request = await axios.get('/api/barcodesearch' ,  {
    params: {
      upc: values.barcode
    }
  });
    
  dispatch ({
    type: BARCODE_SEARCH,
    payload: request.data
  });
};

export const updateProducts = (values) => async dispatch => {
  const request = await axios.get('/api/updateproducts', {
    params: {
      upc: values.upc,
      brand: values.brand,
      category: values.category,
      description: values.description,
      images: values.images,
      name: values.name,
      price: values.price,
      quantity: values.quantity
    }
  });
  
  dispatch ({
    type: UPDATE_PRODUCTS,
    payload: request.data
  });
};

