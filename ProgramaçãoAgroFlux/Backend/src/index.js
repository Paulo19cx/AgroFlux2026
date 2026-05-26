import express from 'express';
import conexao from '../config/db.js';
import routersCliente from './rotas/routersCliente.js';
import routerFuncionario from './rotas/routersFuncionario.js';
import routerProduto from './rotas/routersProduto.js';
import routerFornecedor from './rotas/routersFornecedor.js';
import routerEstoque from './rotas/routeEstoque.js';
import routerRaiz from './rotas/routeRaiz.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/files", express.static("uploads"));
app.use(routerRaiz);
app.use(routersCliente);
app.use(routerFuncionario);
app.use(routerProduto);
app.use(routerFornecedor);



conexao.query("select 1").then(() => {
    app.listen(3001, () => {
        console.log("servidor rodando na url:http://localhost:3001");
    });
    
})
.catch(erro => console.log("falha na conexão\n" + erro));