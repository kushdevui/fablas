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