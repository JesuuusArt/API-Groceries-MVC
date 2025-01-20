import Employee from "../models/Employee.js";

const employeesDao = {};

employeesDao.getAll = async () => {
    return await Employee.find();
}

export default employeesDao;