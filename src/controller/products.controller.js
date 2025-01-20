import productsDao from "../dao/products.dao.js";
const productsController = {};

productsController.getAll = (req, res) => {
    productsDao
        .getAll()
        .then((products) =>
            res.json({
                data: products
            })
        )
        .catch((error) =>
            res.json({
                data: {
                    message: error
                },
            })
        );
};

productsController.getOne = (req, res) => {
    productsDao.getOne(req.params.barcode) // ? Argumento de llamada a la función getOne
        .then((product) => {
            if (product != null)
                res.json({
                    data: product
                });
            else
                res.json({
                    data: {
                        message: "Product not found"
                    },
                });
        })
        .catch((error) =>
            res.json({
                data: {
                    message: error
                },
            })
        );
};

export default productsController;
