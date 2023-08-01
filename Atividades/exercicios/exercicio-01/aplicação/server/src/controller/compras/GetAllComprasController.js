import { prisma } from "../../database/client.js"

export class GetAllComprasController { 

    async handle(request, response){
        const compras = await prisma.compras.findMany({
            include: {
                usuario: true,
                enderecoCompra: true

            }
        }); 
        return response.json(compras);
    }
}
