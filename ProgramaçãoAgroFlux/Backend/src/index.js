import express from 'express';
import conexao from '../config/db.js';
import routersCliente from './rotas/routersCliente.js';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import routerFuncionario from './rotas/routersFuncionario.js';
import routerProduto from './rotas/routersProduto.js';
import verificarToken from './middleware/token.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const swaggerDocument = YAML.load('./src/swagger.yaml');
app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.use("/files", express.static("uploads"));
app.use(routersCliente);
app.use(routerFuncionario);
app.use(routerProduto);



conexao.query("select 1").then(() => {
    console.log("sucesso");

    app.listen(3001, () => {
        console.log('swagger disponivel em');
        console.log('http://localhost:3301/docs')
        console.log("servidor rodando na url:http://localhost:3001");
    });
    
})
.catch(erro => console.log("falha na conexão\n" + erro));