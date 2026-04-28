import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/css/dashboard.css'
import './App.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/@flaticon/flaticon-uicons/css/all/all.css';
//import './assets/js/dashboard'
import Home from './components/paginas/Home/Home';
import Produtos from './components/paginas/Produtos/Produtos'
import Cliente from './components/paginas/Cliente/Cliente'
import { Route, Routes } from 'react-router'
import Funcionario from './components/paginas/Funcionarios/Funcionarios'
import Estoque from './components/paginas/Estoque/Estoque'
import Vendas from './components/paginas/Vendas/Vendas'
import Relatorio from './components/paginas/Relatorios/Relatorios'
import Fornecedores from './components/paginas/Fornecedores/Fornecedores'
import CadastrarCliente from './components/paginas/Cliente/CadastrarCliente'
import CadastrarFuncionario from './components/paginas/Funcionarios/CadastrarFuncionario'
import EditarCliente from './components/paginas/Cliente/EditarCliente'
import EditarFuncionario from './components/paginas/Funcionarios/EditarFuncionario'
import CadastrarProduto from './components/paginas/Produtos/CadastrarProduto'
import EditarProduto from './components/paginas/Produtos/EditarProduto'
import Login from './components/Login'
import ValidaLogin from './components/ValidaLogin'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/clientes' element={<Cliente />} />
        <Route path='/cadastrar-cliente' element={<CadastrarCliente />} />
        <Route path='/cadastrar-funcionario' element={<CadastrarFuncionario />} />
        <Route path='/editar-cliente/:id' element={<EditarCliente />} />
        <Route path='/funcionarios' element={<Funcionario />} />
        <Route path='/editar-funcionario/:id' element={<EditarFuncionario />} />
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/cadastrar-produto' element={<CadastrarProduto/>} />
        <Route path='/editar-produto/:id' element={<EditarProduto />} />
        <Route path='/vendas' element={<Vendas />} />
        <Route path='/fornecedores' element={<Fornecedores />} />
        <Route path='/estoque' element={<Estoque />} />
        <Route path='/relatorios' element={<Relatorio />} />
      </Routes>
    </>
  )
}
export default App
