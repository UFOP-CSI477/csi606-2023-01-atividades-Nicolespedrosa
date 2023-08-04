import { prisma } from "../../database/clients.js";

export class UpdateComprasController {
  async handle(request, response) {
    const { id, usuario_id, endereco_id, data } = request.body;

    const ExistirCompra = await prisma.compras.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    console.log(ExistirCompra);

    if (ExistirCompra != null) {
      const compraUpdate = await prisma.compras.update({
        where: {
          id: parseInt(id),
        },
        data: {
            usuario_id, 
            endereco_id, 
            data,
            updated_at: new Date(),
        },
      });

      return response.json(compraUpdate);
    } else {
      return response.status(400).json({
        message: "ID não existe.",
      });
    }
  }
}