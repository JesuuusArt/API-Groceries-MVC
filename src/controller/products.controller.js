import productsDao from "../dao/products.dao.js";
const productsController = {};

productsController.getAll = (req, res) => {
    productsDao.getAll()
        .then((products) =>
            res.json({
                data: products
            }))
        .catch((error) => 
        res.json({
            data:{
                "message": (error)
            }
        })
        );
};

export default productsController;
