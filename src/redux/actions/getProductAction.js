export const getSingleProduct = (id,subCat,catName) =>{
    // console.log("action",id,subCat);
     return{
         type:"GET_SINGLE_PRODUCT",
         payload:{
             id:id,
             subCat:subCat,
             catName:catName
         }
     }
 }
 
 
 export const getSelectedCategory = (category)=>{
     return{
         type:"GET_SELECTED_CATEGORY",
         payload:{
             category:category
         }
     }
 }
 
 export const getSelectedSubCategory = (subCategory) =>{
     return{
         type:"GET_SELECTED_SUB_CATEGORY",
         payload:{
             subCategory:subCategory
         }
     }
 }
 
 
 export const getProductListBySubCat = (category,subCategory)=>{
     return{
         type:"GEN_PRODUCTLIST_SUBCAT",
         payload:{
             category:category,
             subCategory:subCategory
         }
     }
 }

 export const selectedProductCategory = (cat)=>{
     return{
         type:"SELECTED_PRODUCT_CATEGORY",
         payload:{
             category:cat
         }
     }
 }
 export const selectedProductSubCategory = (subCat,subCatName)=>{
    return{
        type:"SELECTED_PRODUCT_SUB_CATEGORY",
        payload:{
            subCategory:subCat,
            subCategoryName : subCatName
        }
    }
}
export const selectedProductProductId = (productId)=>{
    return{
        type:"SELECTED_PRODUCT_PRODUCTID",
        payload:{
            productId:productId
        }
    }
}