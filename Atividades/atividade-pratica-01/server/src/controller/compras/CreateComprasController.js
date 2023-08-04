import { response } from "express";
import { prisma } from "../../database/clients.js";


export class CreateComprasController{

    async handle(request, response) {
        const {id, usuario_id, endereco_id, data} = request.body;

        const compras = await prisma.compras.create({
            data: {
                id,
                usuario_id,
                endereco_id,
                data,
                created_at: new Date(),
                updated_at: new Date()
            }
        }); 

        console.log(compras);
        return response.json(compras);
    }
}

