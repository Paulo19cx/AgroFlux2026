import conexao from '../config/db.js';
import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

import routersCliente from './rotas/routersCliente.js';
import routerFuncionario from './rotas/routersFuncionario.js';
import routerProduto from './rotas/routersProduto.js';
import routerFornecedor from './rotas/routersFornecedor.js';
import routerEstoque from './rotas/routeEstoque.js';
import routerRaiz from './rotas/routeRaiz.js';
import verificarToken from './middleware/token.js';

const app = express();

app.use(express.json());
app.use(cors()); // Biblioteca para permitir a comunicação http de servidores externos (web)

app.use("/files", express.static("uploads"));

const swaggerDocument = YAML.load('./src/swagger.yaml');

// Swagger
app.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

// Rotas públicas
app.use(routerRaiz);

// Todas as rotas que começarem com /api exigem token
app.use('/api', verificarToken);
app.use(routersCliente);
app.use(routerFuncionario);
app.use(routerProduto);
app.use(routerFornecedor);
app.use(routerEstoque);

conexao.query("select 1").then(() => {
    console.log("sucesso");
    app.listen(3001, () => {
        console.log("servidor rodando em:");
        console.log("http://localhost:3001");
        
        console.log("Swagger disponível em:");
        console.log("http://localhost:3001/docs");
    });
})
.catch(erro => console.log("falha na conexão\n" + erro));