import { combineReducers } from "redux";
import resizeReducer from "./resizeReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import getProductReducer from "./getProductReducer";

export default combineReducers({
    resizeReducer  : resizeReducer,
    getProductReducer:getProductReducer,
    productReducer : productReducer,
    cartReducer:cartReducer
});




