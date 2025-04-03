import React from 'react';
import logo from './logo.svg';
import './App.css';
import FileUploader from "./FileUploader";
import './style.css';

function App() {
  return (
    <div>
      <header>
        <h1>Joao's Computer| TI & Assistência</h1>
      </header>

      <div className="container">
        <nav className="sidebar">
          <ul>
            <li><a href="termos.html">Termos de Uso</a></li>
            <li><a href="politica.html">Política de Uso</a></li>
            <li><a href="sobre.html">Sobre Nós</a></li>
          </ul>
        </nav>

        <main className="content">
          <section>
            <h2>💻 Conserto de Computadores</h2>
            <p>Oferecemos serviços especializados de manutenção, formatação e reparo de computadores. Nosso suporte inclui a solução de problemas de hardware e software, garantindo o melhor desempenho para seus dispositivos.</p>
            <p>Para agendar o conserto do seu computador, entre em contato através dos nossos canais:</p>
            <ul>
              <li>📞 Telefone: <a href="tel:+5579988081729">(79) 98808-1729</a></li>
              <li>📧 E-mail: <a href="mailto:victor-souza1997@hotmail.com">victor-souza1997@hotmail.com</a></li>
            </ul>
          </section>

          <section>
            <h2>🖥️ Serviços de TI</h2>
            <p>Além do suporte técnico para computadores, também oferecemos uma ampla gama de serviços de TI, incluindo:</p>
            <ul>
              <li>🚀 Desenvolvimento de APIs para WhatsApp</li>
              <li>⚙️ Criação e manutenção de sistemas backend</li>
              <li>🎨 Desenvolvimento de interfaces frontend personalizadas</li>
            </ul>
            <p>Se você precisa de uma solução tecnológica sob medida, entre em contato conosco para discutir suas necessidades e obter um serviço personalizado.</p>
          </section>
        </main>
      </div>

      <footer>
        <h1>📜 Termos de Uso</h1>
        <p>Souza Tech © 2022 | CNPJ: 48.044.039/0001-37 | Razão Social: Joao's Computer</p>
        <p>Endereço: R. Jordão de Oliveira, 578, CEP 49037-330</p>
        <p>Telefone: <a href="tel:+5579988081729">(79) 98808-1729</a> | E-mail: <a href="mailto:victor-souza1997@hotmail.com">victor-souza1997@hotmail.com</a></p>
        <p><a href="politica.html">Políticas de Uso</a> | <a href="termos.html">Termo de Uso</a></p>
        <p>Art. 49 do Código de Defesa do Consumidor | Garantia total de 7 dias</p>
      </footer>
    </div>
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