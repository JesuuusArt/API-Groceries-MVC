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

employeesController.getOne = (req, res) => {
    console.log(req.params.employee_number);
    employeesDao.getOne(req.params.employee_number)
    .then((employee) => {
        console.log(employee)
        if(employee != null) {
            res.json({
                data: employee
            });
        } else {
            res.json({
                data: {
                    "message": "Employee not found"
                }
            });
        }
    })
    .catch((error) => {
        res.json({
            data: {
                "message": (error)
            }
        });
    });
}

export default employeesController;