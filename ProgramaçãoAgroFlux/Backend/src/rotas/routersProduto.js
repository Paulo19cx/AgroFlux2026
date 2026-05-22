import express from 'express';
import controllerProduto from '../controller/controllerProduto.js'

const routerProduto = express.Router();

routerProduto.post('/cadastrar-produto', controllerProduto.cadastrar);
routerProduto.get('/listar-produtos', controllerProduto.listar);
routerProduto.get('/listar-produto/:id', controllerProduto.listarPorId);
routerProduto.put('/editar-produto/:id', controllerProduto.atualizar);
routerProduto.delete('/deletar-produto/:id', controllerProduto.deletar);

export default routerProduto;
