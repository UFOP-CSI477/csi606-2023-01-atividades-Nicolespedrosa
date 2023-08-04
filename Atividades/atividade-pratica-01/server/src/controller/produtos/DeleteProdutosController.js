import { prisma } from "../../database/clients.js";


export class DeleteProdutosController{

    async handle(request, response){

        const { id } = request.body;

        try {
            const produto = await prisma.produto.delete({
                where: {
                    id: parseInt(id)
                }
            });
            
            return response.json(produto);
        } catch(error) {
             
            if(error.code === "P2025"){
                 return response.status(400).json({
                    message: `Id informado: ${id} não existe!`
                 });
            }
        }

    }
}