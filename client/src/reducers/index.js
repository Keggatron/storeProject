import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ProductsReducer from './reducer_products';
import BarcodeReducer from './reducer_barcode';


const rootReducer = combineReducers({
  products: ProductsReducer,
  newProduct: BarcodeReducer, 
  form: formReducer
});

export default rootReducer;