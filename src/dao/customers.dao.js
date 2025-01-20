import Customer from "../models/Customer.js";

const customersDao = {};

customersDao.getAll = async () => {
    return await Customer.find();
}

customersDao.getOne = async (customer_number) => {
    return await Customer.findOne({ customer_number: customer_number });
}

export default customersDao;