import React from 'react';
import { Link } from 'react-router-dom';

function Sobre() {
  return (
    <div>
      <header>
        <h1>Sobre a Souza Tech</h1>
      </header>

      <section className="content">
        <p>A <strong>Souza Tech</strong> é uma empresa especializada em <strong>assistência técnica de computadores e soluções de tecnologia da informação</strong>, comprometida em oferecer suporte técnico eficiente e inovador. Com uma abordagem focada na qualidade e segurança, prestamos serviços como <strong>manutenção e formatação de computadores, desenvolvimento de APIs para WhatsApp, criação de sistemas backend e frontend personalizados</strong>.</p>

        <p>Nosso objetivo é proporcionar <strong>soluções tecnológicas confiáveis</strong> para empresas e indivíduos que necessitam de suporte especializado, seja para otimizar processos, melhorar a comunicação digital ou garantir o bom funcionamento de seus equipamentos. Trabalhamos com tecnologia de ponta para entregar resultados que atendam às necessidades dos nossos clientes com profissionalismo e dedicação.</p>

        <p>Estamos sempre prontos para oferecer o melhor suporte técnico e desenvolvimento de software, ajudando nossos clientes a alcançar <strong>maior eficiência e segurança em seus sistemas</strong>.</p>
      </section>

      <footer>
        <p>&copy; 2022 Souza Tech. Todos os direitos reservados.</p>
        <p><Link to="/">Voltar para a Página Principal</Link></p>
      </footer>
    </div>
  );
}

export default Sobre;