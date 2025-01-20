import customersDao from "../dao/customers.dao.js";
const customersController = {};

customersController.getAll = (req, res) => {
    customersDao.getAll()
        .then((customers) =>
            res.json({
                data: customers
            }))
        .catch((error) =>
            res.json({
                data: {
                    "message": (error)
                }
            })
        );
}

customersController.getOne = (req, res) => {
    customersDao.getOne(req.params.customer_number)
        .then((customer) => {
            if (customer != null) {
                res.json({
                    data: customer
                });
            } else {
                res.json({
                    data: {
                        "message": "Customer not found"
                    }
                });
            }
        })
        .catch((error) =>
            res.json({
                data: {
                    "message": (error)
                }
            })
        );
}

export default customersController;