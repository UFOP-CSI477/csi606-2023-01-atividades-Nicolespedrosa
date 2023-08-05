import { prisma } from '../../database/clients.js';

export class GetByIdCidadeController {
    async handle(request, response)
    {
        const {id} = request.params;

        const cidade = await prisma.cidade.findUnique({

            where: 
            {
                id: parseInt(id)
            }
        });

        return response.json(cidade);
    } 
}