import customersDAO from "../dao/customers.dao.js";
const customersController={};
customersController.getAll= (req,res) =>{
    customersDAO.getAll()
    .then((customers)=>{
        res.render('../src/views/indexcustomers.ejs', {customers})    
        /*res.json({
            data:customers
        })*/
    })
    .catch((error)=>{
        res.json({
            data:{
                "message": error
            }
        })
    });
};
customersController.getOne=(req,res)=>{
    customersDAO.getOne(req.params.customer_number)//Argumento de llamada 
    .then((customers)=>{
        /*if(customer!=null)
            res.json({data:customer});
        else
        res.json({data:{message:"Customer not found"}});*/
    res.render('../src/views/editcustomers.ejs', {customers})
    })
    .catch((error)=>{
        res.json({
            data:{message:error}});
    })
};

customersController.insert=(req,res)=>{
    customersDAO.insert(req.body)
    .then((response)=>{
        /*res.json({
            data:{
                message:"Customer inserted successfully",
                Customer:response
            }
        })*/
       res.redirect('/groceries/customers/getAll')
    })
    .catch((error)=>{
        res.json({
            data:{
                message:error.message
            }
        })
    });
};
customersController.updateOne=(req,res)=>{
    customersDAO.updateOne(req.body,req.params.customer_number)
    .then((result)=>{
        /*res.json({
            data:{
                message:"Customer update successfully",
                result:result
            }
        });*/
        res.redirect('/groceries/customers/getAll')
    })
    .catch((error)=>{
        res.json({
            data:{error:error}
        });
    });
}
customersController.deleteOne=(req,res)=>{
    customersDAO.deleteOne(req.params.customer_number)
    .then((customertDelete)=>{
        /*res.json({
            data:{
                message:"Product delete successfully",
                customertDelete:customertDelete
            }
        });*/
        res.redirect('/groceries/customers/getAll')
    })
    .catch((error)=>{
        res.json({
            data:{error:error}
        });
    });

}
export default customersController;
