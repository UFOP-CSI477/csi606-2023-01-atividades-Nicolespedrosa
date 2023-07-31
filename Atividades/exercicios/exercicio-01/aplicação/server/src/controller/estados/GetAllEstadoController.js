import { prisma } from '../../database/clients.js'




export class GetAllEstadoController {
    async handle(request, response){
        const estados = await prisma.estado.findMany({
            include: {
                Cidade: true
            }
        });
        return response.json(estados);
    }

} 