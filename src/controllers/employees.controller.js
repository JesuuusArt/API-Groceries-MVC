import employeesDAO from "../dao/employees.dao.js";
const employeesController={};
employeesController.getAll= (req,res) =>{
    employeesDAO.getAll()
    .then((employees)=>{
        /*res.json({
            data:employees
        })*/
        res.render('../src/views/indexemployees.ejs', {employees})
    })
    .catch((error)=>{
        res.json({
            data:{
                "message": error
            }
        })
    });
};
employeesController.getOne=(req,res)=>{
    employeesDAO.getOne(req.params.employee_number)//Argumento de llamada 
    .then((employees)=>{
        /*if(employee!=null)
            res.json({data:employee});
        else
        res.json({data:{message:"employee not found"}});*/
    res.render('../src/views/editemployees.ejs', {employees})    
    })
    .catch((error)=>{
        res.json({
            data:{message:error}});
    })
};
employeesController.insert=(req,res)=>{
    employeesDAO.insert(req.body)
    .then((response)=>{
        /*res.json({
            data:{
                message:"Employee inserted successfully",
                employee:response
            }
        })*/
        res.redirect('/groceries/employees/getAll')
    })
    .catch((error)=>{
        res.json({
            data:{
                message:error
            }
        })
    });
};
employeesController.updateOne=(req,res)=>{
    employeesDAO.updateOne(req.body,req.params.employee_number)
    .then((result)=>{
        /*res.json({
            data:{
                message:"Employee update successfully",
                result:result
            }
        });*/
        res.redirect('/groceries/employees/getAll')
    })
    .catch((error)=>{
        res.json({
            data:{error:error}
        });
    });
}
employeesController.deleteOne=(req,res)=>{
    employeesDAO.deleteOne(req.params.employee_number)
    .then((employeeDelete)=>{
        /*res.json({
            data:{
                message:"Employe delete successfully",
                employeeDelete:employeeDelete
            }
        });*/
        res.redirect('/groceries/employees/getAll')
    })
    .catch((error)=>{
        res.json({
            data:{error:error}
        });
    });

}
export default employeesController;
