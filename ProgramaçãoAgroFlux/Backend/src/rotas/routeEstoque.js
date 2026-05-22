import express from 'express';
import controllerEstoque from '../controller/controllerEstoque.js';

const routerEstoque = express.Router();

routerEstoque.post('/cadastrar-Estoque', controllerEstoque.cadastrar);


export default routerEstoque;