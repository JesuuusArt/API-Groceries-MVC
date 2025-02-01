import productsDao from "../dao/products.dao.js";
const productsController = {};

productsController.getAll = (req, res) => {
    productsDao
        .getAll()
        .then((products) =>
            /*res.json({
                data: products
            })*/
            res.render('index.ejs', {products})
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
    productsDao.getOne(req.params.barcode)
        .then((product) => {
            if (product != null) {
                res.render('edit.ejs', { product });
            } else {
                res.json({
                    data: {
                        message: "Product not found"
                    },
                });
            }
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
            /*res.json({
                data: {
                    message: "Product inserted successfully",
                    product: response
                }
            })*/
            res.redirect('/groceries/products/getAll')
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
    .then(() => {
        res.redirect("/groceries/products/getAll");
    })
    .catch((error) => {
        res.json({
            data: { error: error }
        });
    });
};


productsController.deleteOne = (req, res) => {
    productsDao.deleteOne(req.params.barcode)
    .then((productDelete) => {
        /*res.json({
            data: {
                message: "Product deleted successfully",
                product_deleted: productDelete
            }
        })*/
        res.redirect('/groceries/products/getAll')
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
