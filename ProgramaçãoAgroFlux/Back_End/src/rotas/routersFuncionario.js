import express from 'express';
import controllerFuncionario from '../controller/controllerFuncionario.js';

const routerFuncionario = express.Router();

routerFuncionario.post('/login', controllerFuncionario.login);
routerFuncionario.post('/cadastrar-funcionario', controllerFuncionario.cadastrar);
routerFuncionario.get('/listar-funcionarios', controllerFuncionario.listar);
routerFuncionario.delete('/deletar-funcionario/:id', controllerFuncionario.deletar);

export default routerFuncionario;