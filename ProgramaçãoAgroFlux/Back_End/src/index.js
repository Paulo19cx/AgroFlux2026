import express from 'express';
import conexao from '../config/db.js';
import routers from './rotas/routers.js';

const app = express();

app.use(express.json());
app.use(routers);

conexao.query("select 1").then(() => {
    console.log("sucesso");
    app.listen(3001, () => {
        console.log("servidor rodando na url:http://localhost:3001");
    });
})
.catch(erro => console.log("falha na conexão\n" + erro));