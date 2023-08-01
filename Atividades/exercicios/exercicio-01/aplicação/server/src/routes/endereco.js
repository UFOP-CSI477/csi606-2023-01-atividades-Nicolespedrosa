import { Router } from "express";
import { GetAllEnderecoController } from "../controller/endereco/GetAllEnderecoController.js";
import { GetByIdEnderecoController } from "../controller/endereco/GetByIdEnderecoController.js";
import { CreateEnderecoController } from "../controller/endereco/CreateEnderecoController.js";
import { UpdateEnderecoController } from "../controller/endereco/UpdateEnderecoController.js";
import { DeleteEnderecoController } from "../controller/endereco/DeleteEnderecoController.js";

const enderecosRouter = Router();

const getAllEnderecoController = new GetAllEnderecoController();
const getByIdEnderecoController = new GetByIdEnderecoController();
const createEnderecoController = new CreateEnderecoController();
const updateEnderecoController = new UpdateEnderecoController();
const deleteEnderecoController = new DeleteEnderecoController();

enderecosRouter.get('/endereco', getAllEnderecoController.handle);
enderecosRouter.get('/endereco/:id',getByIdEnderecoController.handle);
//post
enderecosRouter.post('/endereco',createEnderecoController.handle);
//put
enderecosRouter.put('/endereco',updateEnderecoController.handle);
//delete
enderecosRouter.delete('/endereco',deleteEnderecoController.handle);

export {enderecosRouter}