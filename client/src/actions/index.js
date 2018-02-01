import axios from 'axios';
import { FETCH_PRODUCTS, BARCODE_SEARCH } from "./types";

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