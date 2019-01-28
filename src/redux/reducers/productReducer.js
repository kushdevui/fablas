/**
 * Reducer for Window resize or orientation change
 * 
 */

// Dependencies
import { ADD_TODO_SUCCESS } from "../actions/constants";


const initialState = {
    productList : []
};

 const ProductReducer = ( state = initialState , action) => {
    switch (action.type) {
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                productList : action.payload
            };
        default : 
            return state;
    }
 };

 export default ProductReducer;
