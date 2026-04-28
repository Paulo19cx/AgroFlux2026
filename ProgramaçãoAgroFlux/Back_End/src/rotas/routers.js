import express from 'express';
import controllerFuncionario from '../controller/controllerFuncionario.js';
import controllerRaiz from '../controller/controllerRoot.js';

const router = express.Router();

router.get('/', controllerRaiz.raiz);

router.post('/login', controllerFuncionario.login);
router.post('/cadastrar-funcionario', controllerFuncionario.cadastrar);
router.get('/listar-funcionarios', controllerFuncionario.listar);
router.delete('/deletar-funcionario/:id', controllerFuncionario.deletar);

export default router;