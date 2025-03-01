import { response } from "express";
import productsDAO from "../dao/products.dao.js";
const productsController = {};

/*productsController.getAll= (req,res) =>{
    productsDAO.getAll()
    .then((products)=>{
        res.render('../src/views/indexproducts.ejs', {products})
        res.json({
            data:products
        })
    })
    .catch((error)=>{
        res.json({
            data:{
                "message": error
            }
        })
    });
};*/

productsController.getAll = async (req, res) => {
    try {
        const products = await productsDAO.getAll();
        console.log("Datos enviados al frontend:", products); // <- Agrega este log
        res.json({ data: products });
    } catch (error) {
        console.error("Error en getAll:", error);
        res.status(500).json({ error: error.message });
    }
};

productsController.getOne = (req, res) => {
    productsDAO.getOne(req.params.barcode)//Argumento de llamada 
        .then((products) => {
            /*if(product!=null)
                res.json({data:product});
            else
            res.json({data:{message:"Product not found"}});*/
            res.render('../src/views/editproducts.ejs', { products })
        })
        .catch((error) => {
            res.json({
                data: { message: error }
            });
        })
};
productsController.insert = (req, res) => {
    productsDAO.insert(req.body)
        .then((response) => {
            /*res.json({
                data:{
                    message:"Product inserted successfully",
                    product:response
               }
            })*/
            res.redirect('/groceries/products/getAll')
        })
        .catch((error) => {
            res.json({
                data: {
                    message: error
                }
            })
        });
};
productsController.updateOne = (req, res) => {
    productsDAO.updateOne(req.body, req.params.barcode)
        .then((result) => {
            /*res.json({
                data:{
                    message:"Product update successfully",
                    result:result
                }
            });*/
            res.redirect('/groceries/products/getAll')
        })
        .catch((error) => {
            res.json({
                data: { error: error }
            });
        });
}
productsController.deleteOne = (req, res) => {
    productsDAO.deleteOne(req.params.barcode)
        .then((productDelete) => {
            /*res.json({
                data:{
                    message:"Product delete successfully",
                    product_delete:productDelete
                }
            });*/
            res.redirect('/groceries/products/getAll')
        })
        .catch((error) => {
            res.json({
                data: { error: error }
            });
        });

}
export default productsController;
