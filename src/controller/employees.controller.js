import employeesDao from "../dao/employees.dao.js";
const employeesController = {};

employeesController.getAll = (req, res) => {
    employeesDao.getAll()
        .then((employees) =>
            res.json({
                data: employees
            }))
        .catch((error) => 
            res.json({
                data:{
                    "message": (error)
            }
        })
        );
}

export default employeesController;