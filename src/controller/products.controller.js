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

productsController.insert = (req, res) => {
    productsDao.insert(req.body)
        .then((response) =>
            res.json({
                data: {
                    message: "Product inserted successfully",
                    product: response
                }
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

productsController.updateOne = (req, res) => {
    productsDao.updateOne(req.body, req.params.barcode)
    .then((result) => {
        res.json({
            data: {
                message: "Product updated successfully",
                result: result
            }
        })
    })
    .catch((error) => {
        res.json({
            data: {
                error: error
            }
        })
    });
};

productsController.deleteOne = (req, res) => {
    productsDao.deleteOne(req.params.barcode)
    .then((productDelete) => {
        res.json({
            data: {
                message: "Product deleted successfully",
                product_deleted: productDelete
            }
        })
    })
    .catch((error) => {
        res.json({
            data: {
                error: error
            }
        })
    });
}

export default productsController;
