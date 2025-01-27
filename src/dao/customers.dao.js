import Customer from "../models/Customer.js";

const customersDao = {};

customersDao.getAll = async () => {
    return await Customer.find();
}

customersDao.getOne = async (customer_number) => {
    return await Customer.findOne({ customer_number: customer_number });
}

customersDao.insert = async (customer) => {
    return await Customer.create(customer)
}

customersDao.updateOne = async (name, customer_number) => {
    return await Customer.findOneAndUpdate({customer_number: customer_number}, name)
}

customersDao.deleteOne = async (customer_number) => {
    return await Customer.deleteOne({customer_number: customer_number})
}

export default customersDao;