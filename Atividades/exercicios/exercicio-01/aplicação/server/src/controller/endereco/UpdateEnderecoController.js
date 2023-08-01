import { prisma } from "../../database/client.js";

export class UpdateEnderecoController {
  async handle(request, response) {
    const { id, usuario_id, rua, numero, bairro, cidade_id, telefone } = request.body;

    if (usuario_id == "") {
      return response.status(400).json({
        message: "Favor informar o usuário",
      });
    }
    if (rua == "") {
        return response.status(400).json({
          message: "Favor informar a rua.",
        });
    }
    if (bairro == "") {
        return response.status(400).json({
          message: "Favor informar o bairro.",
        });
    }
    if (telefone == "") {
        return response.status(400).json({
          message: "Favor informar o telefone.",
        });
    }

    const ExistirEndereco = await prisma.endereco.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    console.log(ExistirEndereco);

    if (ExistirEndereco != null) {
      const enderecoUpdate = await prisma.endereco.update({
        where: {
          id: parseInt(id),
        },
        data: {
            usuario_id, 
            rua, 
            numero,  
            bairro, 
            telefone,
            cidade_id,
            updated_at: new Date(),
        },
      });

      return response.json(enderecoUpdate);
    } else {
      return response.status(400).json({
        message: "ID não existe.",
      });
    }
  }
}
