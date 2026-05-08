import express from 'express';
import controllerRaiz from '../controller/controllerRoot.js';

const routerRaiz = express.Router();

routerRaiz.get('/', controllerRaiz.raiz);

export default routerRaiz;