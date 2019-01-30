import mongoose from "mongoose";
const service_schema=mongoose.Schema({
	serviceId:{
		type:String,
		required:true
	},
	serviceName:{
		type:String,
		required:true
	},
	serviceImage:{
		type:String,
		required:true
	},
	serviceDescription:{
		type:String,
		required:true
	}
});
export default mongoose.model("services",service_schema);