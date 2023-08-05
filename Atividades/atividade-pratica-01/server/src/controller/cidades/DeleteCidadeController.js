import { prisma } from "../../database/clients.js";

export class DeleteCidadeController{

    async handle(request,response){

        const { id } = request.body;

        try{
            const cidade = await prisma.cidade.delete({
                where: {
                    id: parseInt(id)
                }
            });
            
            return response.json(cidade);
        } catch(error) {
            if(error.code === "P2025"){
                 return response.status(400).json({
                    message: `O id: ${id} não existe!`
                 });
            }
        }
    }
}