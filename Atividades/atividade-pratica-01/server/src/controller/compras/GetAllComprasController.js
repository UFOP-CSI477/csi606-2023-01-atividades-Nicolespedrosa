import { prisma } from "../../database/clients.js"

export class GetAllComprasController { 

    async handle(request, response){
        const compras = await prisma.compras.findMany({
            select: {
                usuario_id: true,
                endereco_id: true

            }
        }); 
        return response.json(compras);
    }
}
