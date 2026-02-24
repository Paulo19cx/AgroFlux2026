import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/dashboard.css'
import './App.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
//import './assets/js/dashboard'
import Navbar from './components/Template/Navbar'
import Sidebar from './components/Template/Sidebar'


function App() {
  return (
    <>  
      <Navbar/>
      <Sidebar/>
    </>
  )
}

export default App
