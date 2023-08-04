import { prisma } from "../../database/clients.js";

export class UpdateProdutosController {
  async handle(request, response) {
    const { id, descricao, valor_unitario  } = request.body;

    if (descricao == "") {
      return response.status(400).json({
        message: "Favor informar a descrição completa.",
      });
    }

    const ExistirProduto = await prisma.produto.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    console.log(ExistirProduto);

    if (ExistirProduto != null) {
      const produtoUpdate = await prisma.produto.update({
        where: {
          id: parseInt(id),
        },
        data: {
            descricao, 
            valor_unitario,
            updated_at: new Date(),
        },
      });

      return response.json(produtoUpdate);
    } else {
      return response.status(400).json({
        message: "ID não existe.",
      });
    }
  }
}
