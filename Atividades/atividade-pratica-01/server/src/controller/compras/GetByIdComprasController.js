import { prisma } from '../../database/clients.js';

export class GetByIdComprasController {
    async handle(request, response){
        const {id} = request.params;

        const compras = await prisma.compras.findUnique({
            where: {
                id: parseInt(id)
            }
        });

        return response.json(compras);
    }  
}