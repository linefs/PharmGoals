
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from './pages/cadastro/Cadastro';
import FormularioCategoria from './components/categorias/formularioCategorias/FormularioCategorias';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';


function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/temas" element={<ListaCategorias />} />
              <Route path="/cadastroTema" element={<FormularioCategoria/>} />
              <Route path="/editarTema/:id" element={<FormularioCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;