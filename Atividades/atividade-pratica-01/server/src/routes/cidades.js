import { Router } from "express";

import { GetAllCidadeController } from "../controller/cidades/GetAllCidadeController.js"
import { CreateCidadeController } from "../controller/cidades/CreateCidadeController.js"
import { DeleteCidadeController } from "../controller/cidades/DeleteCidadeController.js"
import { GetByIdCidadeController } from "../controller/cidades/GetByIdCidadeController.js"
import { UpdateCidadeController } from "../controller/cidades/UpdateCidadeController.js"

const cidadeRouter = Router();


const getAllCidadeController = new GetAllCidadeController();
const createCidadeController = new CreateCidadeController();
const getByIdCidadeController = new GetByIdCidadeController();
const updateCidadeController = new UpdateCidadeController();
const deleteCidadeController = new DeleteCidadeController();

// Get All
cidadeRouter.get('/cidades', getAllCidadeController.handle);

// Get By Id 
cidadeRouter.get('/cidades/:id', getByIdCidadeController.handle);

// Create
cidadeRouter.post('/cidades', createCidadeController.handle);

// Update
cidadeRouter.put('/cidades/:id', updateCidadeController.handle);

// Delete
cidadeRouter.delete('/cidades/:id', deleteCidadeController.handle);


// Export - router
export { cidadeRouter }