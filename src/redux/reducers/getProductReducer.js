
export const initialState = {
    selectedProductCategory:"Homecare",
    selectedProductSubCategory:"",
    selectedProductId:""
}

const getProductReducer = (state = initialState, action) => {
    switch (action.type){
        case "SELECTED_PRODUCT_CATEGORY":
            return{
            ...state,
            selectedProductCategory:action.payload.category
            }
        case "SELECTED_PRODUCT_SUB_CATEGORY":
            return{
            ...state,
            selectedProductSubCategory:action.payload,

        }
        case "SELECTED_PRODUCT_PRODUCTID":
            return{
            ...state,
            selectedProductId:action.payload.productId
        }        
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

