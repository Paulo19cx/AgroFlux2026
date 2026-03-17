import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/css/dashboard.css'
import './App.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
//import './assets/js/dashboard'
import Home from './components/paginas/Home/Home';
import Produtos from './components/paginas/Produtos/Produtos'
import Cliente from './components/paginas/Cliente/Cliente'
import { Route, Routes } from 'react-router'
import Funcionario from './components/paginas/Funcionarios/Funcionarios'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/clientes' element={<Cliente />} />
        <Route path='/funcionarios' element={<Funcionario />} />
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/vendas' element={<Cliente />} />
        <Route path='/fornecedores' element={<Cliente />} />
        <Route path='/estoque' element={<Cliente />} />
        <Route path='/relatorios' element={<Cliente />} />
      </Routes>
    </>
  )
}
export default App
