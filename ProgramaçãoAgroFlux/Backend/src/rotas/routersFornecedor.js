import express from 'express';
import controllerFornecedor from '../controller/controllerFornecedor.js';

const routerFornecedor = express.Router();

routerFornecedor.post('/cadastrar-fornecedor', controllerFornecedor.cadastrar);
routerFornecedor.get('/listar-fornecedores', controllerFornecedor.listar);
routerFornecedor.get('/listar-fornecedor/:id', controllerFornecedor.listarPorId);
routerFornecedor.get('/pesquisar-fornecedor', controllerFornecedor.pesquisar);
routerFornecedor.put('/editar-fornecedor/:id', controllerFornecedor.atualizar);
routerFornecedor.delete('/deletar-fornecedor/:id', controllerFornecedor.deletar);

export default routerFornecedor;
