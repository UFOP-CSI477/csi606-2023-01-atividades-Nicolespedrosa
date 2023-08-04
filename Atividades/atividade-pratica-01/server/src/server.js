import express from 'express'

import { mainRouter } from './routes/main.js';
import { estadoRouter } from './routes/estados.js'
import { cidadeRouter } from './routes/cidades.js';
import { comprasRouter } from './routes/compras.js';
import { enderecosRouter } from './routes/endereco.js';
import { produtoRouter } from './routes/produtos.js';

import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5555;

// Routes: 
app.use(mainRouter);
app.use(estadoRouter);
app.use(cidadeRouter);
app.use(comprasRouter);
app.use(enderecosRouter);
app.use(produtoRouter);

// Server - start/listen
app.listen(PORT, () =>{
    console.log(`[SERVER] Server is running on port ${PORT}`);
});