import mongoose from "mongoose";
const product_schema=mongoose.Schema({
	id:{
		type:String,
		required: [true , "Cannot Be Blank"],
		unique:true,
		index:true
	},
	name:{
		type:String,
		required:true,
	},
	category:{
		type:String,
		required:false
	},
	price:{
		type:Number,
		required: [true, "Product should have a price!"]
	},
	image_path:{
		type:String,
		required:[true, "Product should have a price!"]
	}
    
});
export default mongoose.model("products" , product_schema);