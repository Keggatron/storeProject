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
    
    
  console.log(request.data);
  
//   // if(request.data.length < 1) {
//     const request = await axios.get(`https://api.upcitemdb.com/prod/trial/lookup?upc=${values.barcode}`, {withCredentials: true}
   
    
// )
//   // }
  
//   console.log(request);



  // const config = {
  //   method: 'get',
  //   url: `https://api.upcitemdb.com/prod/trial/lookup?upc=${values.barcode}`,
  //   headers: { 
  //             "Access-Control-Allow-Origin": "*",
  //             "Access-Control-Allow-Methods": "POST,GET,PUT,DELETE",
  //             "Access-Control-Allow-Headers": "Authorization, Lang" 
      
  //   },
  //   responseType: 'json',
  //   withCredentials: true
  // }

  // const request = await axios.request(config)
  // console.log('response: ', request) 
  
  // const https = require('https')
  // var opts = {
  //   hostname: 'api.upcitemdb.com',
  //   path: '/prod/trial/lookup',
  //   method: 'POST',
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "POST,GET,PUT,DELETE",
  //     "Access-Control-Allow-Headers": "Authorization, Lang" 
  //   }
  // }
  // var req = https.request(opts, function(res) {
  //   console.log('statusCode: ', res.statusCode);
  //   console.log('headers: ', res.headers);
  //   res.on('data', function(d) {
  //     console.log('BODY: ' + d);
  //   })
  // })
  // req.on('error', function(e) {
  //   console.log('problem with request: ' + e.message);
  // })
  // req.write('{ "upc": "4002293401102" }')
  // // other requests
  // req.end()

  
  
  dispatch ({
    type: BARCODE_SEARCH,
    payload: values.data
  });
};