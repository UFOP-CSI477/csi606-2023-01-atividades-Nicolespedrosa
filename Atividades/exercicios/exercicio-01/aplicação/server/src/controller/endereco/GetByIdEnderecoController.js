import { prisma } from '../../database/client.js';

export class GetByIdEnderecoController {
    async handle(request, response)
    {
        const {id, cidade_id} = request.params;

        const endereco = await prisma.endereco.findUnique({
            where: {
                id: parseInt (id),
                cidade_id
            }
        });

        return response.json(endereco);
    }    
}