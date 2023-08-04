import { response } from "express";
import { prisma } from "../../database/clients.js";


export class CreateProdutosController{

    async handle(request, response)
    {
        const { id, descricao, valor_unitario } = request.body;

        const produto = await prisma.produto.create({
            data: {
                id,
                descricao,
                valor_unitario,
                created_at: new Date(),
                updated_at: new Date()
            }
        }); 

        console.log(produto);
        return response.json(produto);
    }

}

