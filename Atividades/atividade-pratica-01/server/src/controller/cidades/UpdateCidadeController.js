import { prisma } from "../../database/clients.js";
import { GetByIdCidadeController } from "./GetByIdCidadeController.js";

export class UpdateCidadeController {
  async handle(request, response) {
    const { id, nome, estado_id } = request.body;

    if (nome == "" ) {
      return response.status(400).json({
        message: "Favor informar o nome.",
      });
    }

    const cidade = await prisma.cidade.findUnique({
      
      where: {
        id: parseInt(id),
      },
    });
    console.log(cidade);

    if (cidade != null) {
      const cidadeUpdate = await prisma.cidade.update({
        where: {
          id: parseInt(id),
        },
        data: {
          nome,
          estado_id,
          updated_at: new Date(),
        },
      });

      return response.json(cidadeUpdate);
    } else {
      return response.status(400).json({
        message: "ID não existe.",
      });
    }
  }
}
