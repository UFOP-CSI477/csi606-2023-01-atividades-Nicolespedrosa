-- CreateTable
CREATE TABLE "compras" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuario_id" INTEGER NOT NULL,
    "endereco_id" INTEGER NOT NULL,
    "data" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "compras_endereco_id_fkey" FOREIGN KEY ("endereco_id") REFERENCES "enderecos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "compras_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "produtos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "compra_id" INTEGER NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "endereco_id" INTEGER NOT NULL,
    "data" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "produtos_compra_id_fkey" FOREIGN KEY ("compra_id") REFERENCES "compras" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "usuario_cidade_id_fkey" FOREIGN KEY ("cidade_id") REFERENCES "cidades" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
