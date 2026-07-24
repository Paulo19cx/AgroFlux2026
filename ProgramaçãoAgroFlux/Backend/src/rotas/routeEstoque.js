import express from "express";
import controllerEstoque from "../controller/controllerEstoque.js";

const routerEstoque = express.Router();

routerEstoque.get("/listar-estoques", controllerEstoque.listar);

export default routerEstoque;