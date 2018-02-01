import { BARCODE_SEARCH } from '../actions/types';
import _ from 'lodash';

export default function (state = [], action) {
  switch(action.type) {
    case BARCODE_SEARCH:
      return [ action.payload, ...state ];
      // return _.mapKeys(action.payload, 'upc');
    default:
      return state;
  }
}