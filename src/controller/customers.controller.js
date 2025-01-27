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
                    "message": error
                }
            })
        );
}

customersController.insert = (req, res) => {
    customersDao.insert(req.body)
    .then((response) => {
        res.json({
            data: {
                "message": "Customer inserted succesfully",
                "customer": response
            }
        })
    })
    .catch((error) => {
        res.json({
            data: {
                "message": (error)
            }
        })
    })
}

customersController.updateOne = (req, res) => {
    customersDao.updateOne(req.body, req.params.customer_number)
    .then((result) => {
        res.json({
            data:{
                "message": "Customer updated succesfully",
                result: result
            }
        })
    })
    .catch((error) => {
        res.json({
            data:{
                "message": error
            }
        })
    })
}

customersController.deleteOne = (req, res) => {
    customersDao.deleteOne(req.params.customer_number)
    .then((result) => {
        res.json({
            data: {
                "message": "Customer deleted succesfully",
                "result": result
            }
        })
    })
    .catch((error) => {
        res.json({
            data: {
                "message": error
            }
        })
    })
}

export default customersController;