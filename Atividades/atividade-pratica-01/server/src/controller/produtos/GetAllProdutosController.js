import { prisma } from "../../database/clients.js"

export class GetAllProdutosController { 

    async handle(request, response){
        const produtos = await prisma.produto.findMany(); 
        return response.json(produtos);
    }
}