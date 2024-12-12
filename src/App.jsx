import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Cadastro from './pages/cadastro'
import Grafico from './pages/grafico';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/grafico" element={<Grafico/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
