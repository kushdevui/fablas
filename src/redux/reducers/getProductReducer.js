
export const initialState = {
    singleSelectedProduct:"",
    selectedSubCategory:"",
    selectedCategory:"Homecare"
}

const getProductReducer = (state = initialState, action) => {
   console.log("reducer",action);
    switch (action.type){
        case "GET_SINGLE_PRODUCT":
        return{
            ...state,
            singleSelectedProduct:action.payload
        }
        case "GEN_PRODUCTLIST_SUBCAT":
        return{
            ...state,
            selectedSubCat:action.payload
        }
        case "GET_SELECTED_CATEGORY":
        return{
            ...state,
            selectedCategory:action.payload.category
        }
        case "GET_SELECTED_SUB_CATEGORY":
        return{
            ...state,
            selectedSubCategory:action.payload.subCategory
        }
        default : ""
    }
    return state
}

export default getProductReducer;

