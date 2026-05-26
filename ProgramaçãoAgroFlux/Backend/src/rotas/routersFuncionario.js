import express from 'express';
import upload from '../../config/multer.js';
import controllerFuncionario from '../controller/controllerFuncionario.js';

const routerFuncionario = express.Router();

routerFuncionario.post('/login', controllerFuncionario.login);
routerFuncionario.post('/cadastrar-funcionario', controllerFuncionario.cadastrar);
routerFuncionario.get('/listar-funcionarios', controllerFuncionario.listar);
routerFuncionario.get('/listar-funcionario/:id', controllerFuncionario.listarPorId);
routerFuncionario.get('/pesquisar-funcionario', controllerFuncionario.pesquisar);
routerFuncionario.put('/editar-funcionario/:id', controllerFuncionario.atualizar);
routerFuncionario.delete('/deletar-funcionario/:id', controllerFuncionario.deletar);

export default routerFuncionario;