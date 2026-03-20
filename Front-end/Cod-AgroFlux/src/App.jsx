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
import Relatorio from './components/paginas/Relátorios/Relatorios'
import Fornecedores from './components/paginas/Fornecedores/Fornecedores'
import CadastrarCliente from './components/paginas/Cliente/CadastrarCliente'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/clientes' element={<Cliente />} />
        <Route path='/funcionarios' element={<Funcionario />} />
        <Route path='/editar-funcionario' element={<Funcionario />} />
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/vendas' element={<Vendas />} />
        <Route path='/fornecedores' element={<Fornecedores />} />
        <Route path='/estoque' element={<Estoque />} />
        <Route path='/relatorios' element={<Relatorio />} />
        <Route path='/cadastrar-cliente' element={<CadastrarCliente />} />
      </Routes>
    </>
  )
}
export default App
