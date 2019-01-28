import mongoose from "mongoose";
const product_schema=mongoose.Schema({
            categoryName:{
                type:String,
                required:true
            },
            categoryId:{
                type:String,
                required:true
            },
            subCategory:[{
                name:{
                    type:String,
                    required:true
                },
                id:{
                    type:String,
                    required:true
                },
                productsList:[
                    {
                        name:{
                            type:String,
                            required:true
                        },
                        imagepath:{
                            type:String,
                            required:true
                        },
                        isFeatured:{
                            type:Boolean,
                            required:true,
                            default:false
                        },
                        price:{
                            type:String,
                            required:true
                        }
                    }
                ]
            }]
            
        
    

    // id:{
    //  type:String,
    //  required: [true , "Cannot Be Blank"],
    //  unique:true,
    //  index:true
    // },
    // name:{
    //  type:String,
    //  required:true,
    // },
    // category:{
    //  name:{
    //      type:String,
    //      required:true
    //  },
    //  subCategory:{
    //      type:String,
    //      required:false
    //  }
    // },
    // price:{
    //  type:Number,
    //  required: [true, "Product should have a price!"]
    // },
    // image_path:{
    //  type:String,
    //  required:[true, "Product should have a price!"]
    // },
    // isFeatured:{
    //  type:Boolean,
    //  required:true,
    //  default:false
    // }
    
});
export default mongoose.model("products" , product_schema);