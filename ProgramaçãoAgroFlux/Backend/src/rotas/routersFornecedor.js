import express from 'express';
import controllerFornecedor from '../controller/controllerFornecedor.js';

const routerFornecedor = express.Router();

routerFornecedor.post('/cadastrar-fornecedor', controllerFornecedor.cadastrar);
routerFornecedor.get('/listar-fornecedores', controllerFornecedor.listar);
routerFornecedor.get('/listar-fornecedor/:id', controllerFornecedor.listarPorId);
routerFornecedor.put('/editar-fornecedor/:id', controllerFornecedor.atualizar);

export default routerFornecedor;
