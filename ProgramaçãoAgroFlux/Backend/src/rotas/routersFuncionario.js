import express from 'express';
import upload from '../../config/multer.js';
import controllerFuncionario from '../controller/controllerFuncionario.js';

const routerFuncionario = express.Router();

routerFuncionario.post('/login', controllerFuncionario.login);
routerFuncionario.post('/cadastrar-funcionario', upload.single('file'), controllerFuncionario.cadastrar);
routerFuncionario.get('/listar-funcionarios', controllerFuncionario.listar);
routerFuncionario.get('/listar-funcionario/:id', controllerFuncionario.listarPorId);
routerFuncionario.put('/editar-funcionario/:id', controllerFuncionario.atualizar);

routerFuncionario.post('/cadastro-foto', upload.single('file'), controllerFuncionario.testeFoto);

export default routerFuncionario;