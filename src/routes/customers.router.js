import { Router } from "express";
import customersController from "../controller/customers.controller.js";
const router = Router();

router.get("/getAll", customersController.getAll);
router.get("/getOne/:customer_number", customersController.getOne);
router.post("/insert", customersController.insert);
router.put("/updateOne/:customer_number", customersController.updateOne);
router.delete("/deleteOne", customersController.deleteOne);

export default router;