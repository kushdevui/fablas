import express from "express";
import productServices from "./product.services";
const router = express.Router();

//get all products
router.get("/getProducts",(req,res,next) => {
	productServices.getProduct().then((result) => {
		res.json(result);
}).catch((err) => {
		res.sendStatus(404);
    
});
});
router.post("/getProductsById",(req,res,next) => {
	const id=req.body.id;
	productServices.getProductById(id).then((result) => {
		res.json(result);
	}).catch((err) => {
		res.sendStatus(404);
	});

	
});
export default router;