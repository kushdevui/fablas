import axios from 'axios';
import { onGetProducts } from "../actions/globalActions";

export function someFunction() {
    return(dispatch) => {
        axios.get("http://localhost:8080/products/getProducts")
          .then((response) => {dispatch(onGetProducts.getProductList(response));})
          .catch((response) => {return Promise.reject(response);});
      };
}






