import { prisma } from "../../database/client.js"

export class GetAllEnderecoController { 

    async handle(request, response){
        const endereco = await prisma.endereco.findMany({
            include: {
                cidade: true
            }
        });
        return response.json(endereco);
    }
}