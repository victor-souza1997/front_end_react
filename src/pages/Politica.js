// src/pages/Politica.js
import React from 'react';
import { Link } from 'react-router-dom';

function Politica() {
  return (
    <div>
      <header>
        <h1>🔒 Política de Privacidade</h1>
      </header>

      <section className="content">
        <h2>1. Introdução</h2>
        <p>Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações ao utilizar nossos serviços de assistência técnica de computadores e serviços de TI.</p>

        <h2>2. Coleta de Informações</h2>
        <p>Coletamos informações pessoais fornecidas por você ao solicitar nossos serviços, como nome, telefone e e-mail.</p>

        <h2>3. Uso das Informações</h2>
        <p>Usamos suas informações para fornecer suporte técnico, agendar atendimentos e comunicar informações sobre nossos serviços.</p>

        <h2>4. Compartilhamento de Informações</h2>
        <p>Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para a prestação do serviço ou exigido por lei.</p>

        <h2>5. Segurança das Informações</h2>
        <p>Implementamos medidas de segurança adequadas para proteger suas informações contra acessos não autorizados, alterações, divulgações ou destruições.</p>

        <h2>6. Alterações na Política de Privacidade</h2>
        <p>Podemos atualizar esta Política de Privacidade a qualquer momento. Notificaremos sobre quaisquer mudanças através dos meios de comunicação fornecidos.</p>

        <h2>7. Contato</h2>
        <p>Para dúvidas ou mais informações sobre esta Política de Privacidade, entre em contato conosco através dos canais fornecidos.</p>
      </section>

      <footer>
        <h1>📜 Termos de Uso</h1>
        <p>Souza Tech © 2022 | CNPJ: 48.044.039/0001-37 | Razão Social: Souza Tech</p>
        <p>Endereço: R. Jordão de Oliveira, 578, CEP 49037-330</p>
        <p>Telefone: <a href="tel:+5579988081729">(79) 98808-1729</a> | E-mail: <a href="mailto:victor-souza1997@hotmail.com">victor-souza1997@hotmail.com</a></p>
        <p><Link to="/">Página Inicial</Link> | <Link to="/termos">Termo de Uso</Link></p>
        <p>Art. 49 do Código de Defesa do Consumidor | Garantia total de 7 dias</p>
      </footer>
    </div>
  );
}

export default Politica;