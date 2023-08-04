import { response } from "express";
import { prisma } from "../../database/clients.js";


export class CreateEnderecoController{

    async handle(request, response) {
        const {id, usuario_id, rua, numero, bairro, cidade_id, telefone} = request.body;

        if(usuario_id == "")
        {
            return response.status(400).json({
                    message: "Erro! Informe o nome de usuário."
                }
            );
        }
         
        if(cidade_id == null) {
            return response.status(400).json({
                    message: "Erro! Informe o nome da cidade."
                }
            )
        }

        const endereco = await prisma.endereco.create({
            data: {
                id, 
                usuario_id, 
                rua, 
                numero, 
                bairro,
                telefone, 
                cidade_id,
                created_at: new Date(),
                updated_at: new Date()
            }
        });

        console.log(endereco);
        return response.json(endereco);
    }
}