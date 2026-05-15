import express from 'express';
import controllerCliente from '../controller/controllerCliente.js';

const routerCliente = express.Router();

routerCliente.post('/cadastrar-cliente', controllerCliente.cadastrar);
routerCliente.get('/listar-clientes', controllerCliente.listar);

export default routerCliente;