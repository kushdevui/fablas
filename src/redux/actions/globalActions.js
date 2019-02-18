

/**
 * Global actions that used by several components
 * 
 */
//  Dependencies
import { RESIZE_VIEWPORT,ADD_TODO_SUCCESS,ADD_TO_CART } from "./constants";
import axios from 'axios';

export const addToDo  = () =>{
    return dispatch => {
        axios
        .get("https://fablasnode.herokuapp.com/products/getProducts", {
        })
        .then(res => {
           //console.log(res.data);
          dispatch(addToSucces(res.data));
        })
        .catch(err => {
         //nothing is happening here ...
        });
    }    
}

// const addToSucces = (todo) =>{
//     return{
//         type : ADD_TODO_SUCCESS,
//         payload :  [...todo]
//     }
// }



//  Action for Window Resize and Orientation Change
export const onResizeAction = (viewport) => {
    return {
        type : RESIZE_VIEWPORT,
        payload : viewport
    };
};

export const getProductList = (response) =>{
    return{
        type:GET_PRODUCT_LIST,
        payload:response
    }
}





