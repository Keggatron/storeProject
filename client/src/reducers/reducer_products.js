import { FETCH_PRODUCTS } from '../actions/types';
import _ from 'lodash';

export default function (state = {}, action) {
  switch(action.type) {
    case FETCH_PRODUCTS:
      return _.mapKeys(action.payload.data, 'id'); 
    default:
      return state;
  }
}