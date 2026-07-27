import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/dashboard.css';
import './App.css';                     
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/@flaticon/flaticon-uicons/css/all/all.css';
import { BrowserRouter as Router, Routes, Route, Navigate   } from 'react-router-dom';

import Login from './components/Login';
import ValidaLogin from './components/ValidaLogin';
import Protegida from './components/Protegida';

import Home from './components/paginas/Home/Home';

import Cliente from './components/paginas/Cliente/Cliente';
import CadastrarCliente from './components/paginas/Cliente/CadastrarCliente';
import EditarCliente from './components/paginas/Cliente/EditarCliente';

import Produtos from './components/paginas/Produtos/Produtos';
import CadastrarProduto from './components/paginas/Produtos/CadastrarProduto';
import EditarProduto from './components/paginas/Produtos/EditarProduto';

import Funcionarios from './components/paginas/Funcionarios/Funcionarios';
import CadastrarFuncionario from './components/paginas/Funcionarios/CadastrarFuncionario';
import EditarFuncionario from './components/paginas/Funcionarios/EditarFuncionario';

import Estoque from './components/paginas/Estoque/Estoque';
import CadastrarEstoque from  './components/paginas/Estoque/CadastrarEntradaEstoque';

import Vendas from './components/paginas/Vendas/Vendas';

import Relatorio from './components/paginas/Relatorios/Relatorios';

import Fornecedores from './components/paginas/Fornecedores/Fornecedores';
import CadastrarFornecedor from './components/paginas/Fornecedores/CadastrarFornecedor';
import EditarFornecedor from './components/paginas/Fornecedores/EditarFornecedor';


function App() {
  const token = sessionStorage.getItem("token");
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />

        <Route path='/clientes' element={ <Protegida regrasPermitidas={['ADMINISTRADOR', 'LEITOR']}> <Cliente /> </Protegida> } />
        <Route path='/cadastrar-cliente' element={ <Protegida regrasPermitidas={['ADMINISTRADOR']}> <CadastrarCliente /> </Protegida> } />
        <Route path='/editar-cliente/:id' element={ <Protegida regrasPermitidas={['ADMINISTRADOR']}> <EditarCliente /> </Protegida> } />
        
        <Route path='/produtos' element={ <Protegida regrasPermitidas={['ADMINISTRADOR', 'LEITOR']}> <Produtos /> </Protegida> } />
        <Route path='/cadastrar-produto' element={ <Protegida regrasPermitidas={['ADMINISTRADOR']}> <CadastrarProduto/> </Protegida> } />
        <Route path='/editar-produto/:id' element={ <Protegida regrasPermitidas={['ADMINISTRADOR']}> <EditarProduto /> </Protegida> } />
        
        <Route path='/funcionarios' element={ <Protegida regrasPermitidas={['ADMINISTRADOR', 'LEITOR']}> <Funcionarios /> </Protegida> } />
        <Route path='/cadastrar-funcionario' element={ <Protegida regrasPermitidas={['ADMINISTRADOR']}> <CadastrarFuncionario /> </Protegida> } />
        <Route path='/editar-funcionario/:id' element={ <Protegida regrasPermitidas={['ADMINISTRADOR']}> <EditarFuncionario /> </Protegida> } />
        
        <Route path='/estoque' element={ <Protegida regrasPermitidas={['ADMINISTRADOR']}> <Estoque /> </Protegida> } />
        <Route path='/cadastrar-estoque' element={ <Protegida regrasPermitidas={['ADMINISTRADOR']}> <CadastrarEstoque/> </Protegida>}/>

        <Route path='/vendas' element={ <Protegida regrasPermitidas={['ADMINISTRADOR']}> <Vendas /> </Protegida> } />
        
        <Route path='/relatorios' element={ <Protegida regrasPermitidas={['ADMINISTRADOR']}> <Relatorio /> </Protegida> } />

        <Route path='/fornecedores' element={ <Protegida regrasPermitidas={['ADMINISTRADOR', 'LEITOR']}> <Fornecedores /> </Protegida> } />
        <Route path='/cadastrar-fornecedor' element={ <Protegida regrasPermitidas={['ADMINISTRADOR']}> <CadastrarFornecedor /> </Protegida> } />
        <Route path='/editar-fornecedor/:id' element={ <Protegida regrasPermitidas={['ADMINISTRADOR']}> <EditarFornecedor /> </Protegida> } />
      </Routes>
    </Router>
  )
}
export default App
