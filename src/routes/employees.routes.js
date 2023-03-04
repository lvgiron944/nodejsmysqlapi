import { Router } from "express";
import {getEmployees, createEmployees, updateEmployees,
    deleteEmployees, getEmployee } from "../controllers/employees.controller.js";


const router = Router()


router.get('/employes',getEmployees)

router.get('/employes/:id',getEmployee)

router.post('/employes', createEmployees)

router.patch('/employes/:id', updateEmployees)

router.delete('/employes/:id', deleteEmployees)

export default router