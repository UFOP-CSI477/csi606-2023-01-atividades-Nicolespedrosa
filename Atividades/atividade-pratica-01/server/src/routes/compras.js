import { Router } from "express";

import { GetAllComprasController } from "../controller/compras/GetAllComprasController.js";
import { GetByIdComprasController } from "../controller/compras/GetByIdComprasController.js";
import { CreateComprasController } from "../controller/compras/CreateComprasController.js";
import { UpdateComprasController } from "../controller/compras/UpdateComprasController.js";
import { DeleteComprasController } from "../controller/compras/DeleteComprasController.js";

const comprasRouter = Router();

const getAllComprasController = new GetAllComprasController();
const getByIdComprasController = new GetByIdComprasController();
const createComprasController = new CreateComprasController();
const updateComprasController = new UpdateComprasController();
const deleteComprasController = new DeleteComprasController();

comprasRouter.get('/compras', getAllComprasController.handle);
comprasRouter.get('/compras/:id',getByIdComprasController.handle);

comprasRouter.post('/compras',createComprasController.handle);

comprasRouter.put('/compras/:id',updateComprasController.handle);

comprasRouter.delete('/compras/:id',deleteComprasController.handle);


export {comprasRouter}

