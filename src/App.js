import React from 'react';
import './style.css';
import Termos from './pages/Termos';
import Politica from './pages/Politica';
import Sobre from './pages/Sobre';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <section className="content">
    <div className="card">
      <h2>🧰 Conserto de Computadores</h2>
      <p>
        Oferecemos serviços especializados de manutenção, formatação e reparo de computadores. Nosso suporte inclui a solução de problemas de hardware e software, garantindo o melhor desempenho para seus dispositivos.
      </p>
      <p>Para agendar o conserto do seu computador, entre em contato através dos nossos canais:</p>
      <ul className="contact-info">
        <li>📞 Telefone: <a href="tel:+5579988081729">(79) 98808-1729</a></li>
        <li>📧 E-mail: <a href="mailto:joao.computer2024@gmail.com">joao.computer2024@gmail.com</a></li>
      </ul>
    </div>
  
    <div className="card">
      <h2>💼 Serviços de TI</h2>
      <p>Além do suporte técnico para computadores, também oferecemos uma ampla gama de serviços de TI, incluindo:</p>
      <ul>
        <li>🚀 Desenvolvimento de APIs para WhatsApp</li>
        <li>🛠️ Criação e manutenção de sistemas backend</li>
        <li>🎨 Desenvolvimento de interfaces frontend personalizadas</li>
      </ul>
      <p>Se você precisa de uma solução tecnológica sob medida, entre em contato conosco para discutir suas necessidades e obter um serviço personalizado.</p>
    </div>
  </section>
  );
}

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Joao's Computer | TI & Assistência</h1>
        </header>

        <div className="container">
          <nav className="sidebar">
            <ul>
              <li><Link to="/termos">Termos de Uso</Link></li>
              <li><Link to="/politica">Política de Uso</Link></li>
              <li><Link to="/sobre">Sobre Nós</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/politica" element={<Politica />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </div>

        <footer>
          <h1>📜 <Link to="/termos">Termos de Uso</Link></h1>
          <p>Joao's Computer © 2022 | CNPJ: 48.044.039/0001-37 | Razão Social: João Victor Lima de Souza</p>
          <p>Endereço: R. Jordão de Oliveira, 578, CEP 49037-330</p>
          <p>Telefone: <a href="tel:+5579988081729">(79) 98808-1729</a> | E-mail: <a href="mailto:joao.computer2022@gmail.com">joao.computer2022@gmail.com</a></p>
          <p><Link to="/">Página Principal</Link> | <Link to="/politica">Políticas de Uso</Link> | <Link to="/sobre">Sobre</Link></p>
          <p>Art. 49 do Código de Defesa do Consumidor | Garantia total de 7 dias</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

/* 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>. Dockerized React App.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */