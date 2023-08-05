import { Router } from "express";

import { GetAllProdutosController } from "../controller/produtos/GetAllProdutosController.js";
import { GetByIdProdutosController } from "../controller/produtos/GetByIdProdutosController.js";
import { CreateProdutosController } from "../controller/produtos/CreateProdutosController.js";
import { UpdateProdutosController } from "../controller/produtos/UpdateProdutosController.js";
import { DeleteProdutosController } from "../controller/produtos/DeleteProdutosController.js";

const produtoRouter = Router();

const getAllProdutosController = new GetAllProdutosController();
const getByIdProdutosController = new GetByIdProdutosController();
const createProdutosController = new CreateProdutosController();
const updateProdutosController = new UpdateProdutosController();
const deleteProdutosController = new DeleteProdutosController();

produtoRouter.get('/produtos',getAllProdutosController.handle);
produtoRouter.get('/produtos/:id',getByIdProdutosController.handle);

//post
produtoRouter.post('/produtos', createProdutosController.handle)

//put
produtoRouter.put('/produtos/:id', updateProdutosController.handle)

//delete
produtoRouter.delete('/produtos/:id',deleteProdutosController.handle);

export {produtoRouter}