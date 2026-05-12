import express from 'express';
import controllerCliente from '../controller/controllerCliente.js';

const routerCliente = express.Router();

routerCliente.post('/cadastrar-cliente', controllerCliente.cadastrar);

export default routerCliente;