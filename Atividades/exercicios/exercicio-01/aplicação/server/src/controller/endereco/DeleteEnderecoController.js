import { prisma } from "../../database/client.js";


export class DeleteEnderecoController{

    async handle(request, response){

        const { id } = request.body;

        try{
            const enderecos = await prisma.endereco.delete({
                where: {
                    id: parseInt(id)
                }
            });
            
            return response.json(enderecos);
        } catch(error) {
             
            if(error.code === "P2025"){
                 return response.status(400).json({
                    message: `Id: ${id} não existe!`
                 });
            }
        }
    }
}