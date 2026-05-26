import express from 'express';
import controllerCliente from '../controller/controllerCliente.js';

const routerCliente = express.Router();

routerCliente.post('/cadastrar-cliente', controllerCliente.cadastrar);
routerCliente.get('/listar-clientes', controllerCliente.listar);
routerCliente.get('/listar-cliente/:id', controllerCliente.listarPorId);
routerCliente.get('/pesquisar-cliente', controllerCliente.pesquisar);
routerCliente.put('/editar-cliente/:id', controllerCliente.atualizar);
routerCliente.delete('/deletar-cliente/:id', controllerCliente.deletar);

export default routerCliente;