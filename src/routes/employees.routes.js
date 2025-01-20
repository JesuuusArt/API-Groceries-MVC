import { Router  } from "express";
import employeesController from "../controller/employees.controller.js";
const router = Router();

router.get("/getAll", employeesController.getAll);

export default router;