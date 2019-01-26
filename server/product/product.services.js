
// import config from '../bone_helpers/bone.config';
import db from "../bone_helpers/bone.db";
// const MongoClient=require('mongodb').MongoClient;
const Product = db.Product;



const getProduct=() => {
	return new Promise((resolve,reject) => {
		// getting all Users
		Product.find()
			.then( (success) => {
				resolve(success);
			})
			.catch( (err) => {
				reject(err);
			});
	});
};
const getProductById=(id) => {
	return new Promise((resolve,reject) => {
		Product.find({"id":id}).then((success) => {
			resolve(success);
		}).catch((err) => {
			reject(err);
		});
	});
	
};
export default{
    
getProduct,getProductById
};

