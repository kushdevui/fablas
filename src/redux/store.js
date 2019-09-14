import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage";
import rootReducer from "./reducers";

import thunk from "redux-thunk";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

const persistConfig = {
    key: "root",
    storage: storageSession,
    stateReconciler: hardSet
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    let store = createStore(
      persistedReducer,
      composeEnhancers(applyMiddleware(thunk))
    );
    let persistor = persistStore(store);
    return { store, persistor };
};









// import { createLogger } from "redux-logger";
// Thunk is for receiving Async Actions


// import { reducer as formReducer } from "redux-form";



// // Initial State of Store
// const initialStoreState = () => {
//     return {};
// };

// /**
//  * Store Module
//  * 
//  * Parameters of createStore:-
//  * 
//  * 1. combineReducers is to combine all reducers for the store to use as store can use only one reducer
//  * 2. InitialState of store, here {} as can be overwritten by each reducer's own initial state
//  * 3. applyMiddlware takes every middleware stack them and performs each's tasks everytime store's state is updated
//  */
// export default createStore(
//     combineReducers({
//         resizeReducer  : resizeReducer,
//         form : formReducer,
//         getProductReducer:getProductReducer,
//         productReducer : productReducer,
//         cartReducer:cartReducer
//     }),
//     initialStoreState(),
//     applyMiddleware(createLogger() , thunk)
// );