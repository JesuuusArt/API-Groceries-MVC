import Employee from "../models/Employee.js";

const employeesDao = {};

employeesDao.getAll = async () => {
    return await Employee.find();
}

employeesDao.getOne = async (employee_number) => {
    return await Employee.findOne({ employee_numer: employee_number });
}

employeesDao.insert = async (product) => {
    return await Employee.create(product);
}

employeesDao.updateOne = async (name, employee_numer) => {
    return await Employee.findOneAndUpdate({ employee_numer: employee_numer}, name)
}

employeesDao.deleteOne = async (employee_numer) => {
    return await Employee.deleteOne({employee_numer: employee_numer})
}

export default employeesDao;