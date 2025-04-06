// src/pages/Sobre.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sobre() {
  return (
    <div>
      <section className="content">
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Sobre a Joao's Computer</h2>
        <p className="sobre-paragrafo">
          A Joao's Computer é uma empresa especializada em assistência técnica de computadores e soluções de tecnologia da informação, comprometida em oferecer suporte técnico eficiente e inovador. Com foco na qualidade e segurança, prestamos serviços como manutenção e formatação de computadores, desenvolvimento de APIs para WhatsApp, e criação de sistemas backend e frontend personalizados.
        </p>

        <p className="sobre-paragrafo">
          Nosso objetivo é proporcionar soluções tecnológicas confiáveis para empresas e indivíduos que precisam de suporte especializado, seja para otimizar processos, melhorar a comunicação digital ou garantir o bom funcionamento de seus equipamentos. Trabalhamos com tecnologia de ponta para entregar resultados com profissionalismo e dedicação.
        </p>

        <p className="sobre-paragrafo">
          Estamos sempre prontos para oferecer o melhor suporte técnico e desenvolvimento de software, ajudando nossos clientes a alcançar maior eficiência e segurança em seus sistemas.
        </p>
      </section>

      <section className="content">
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Nossa Equipe</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src="images/sobre-equipe.jpg"
            alt="Equipe Joao's Computer"
            style={{ width: '80%', maxWidth: '800px', borderRadius: '12px', marginBottom: '2rem' }}
          />
        </div>
        <p className="sobre-paragrafo">
          Nossa equipe é formada por profissionais comprometidos com a qualidade, a segurança e a satisfação do cliente. Juntos, unimos conhecimentos técnicos e experiência para oferecer soluções completas em suporte e desenvolvimento tecnológico.
        </p>
      </section>

      <section className="content">
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Conheça o Fundador</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src="images/joao.jpg"
            alt="João Victor Lima de Souza"
            style={{ width: '240px', height: 'auto', borderRadius: '50%', marginBottom: '1.5rem' }}
          />
        </div>
        <p className="sobre-paragrafo">
          João Victor Lima de Souza é o fundador da Joao's Computer. Com ampla experiência em TI, desenvolvimento de sistemas e atendimento ao cliente, João lidera a empresa com dedicação e visão inovadora. Seu compromisso é garantir que cada cliente receba um serviço personalizado, eficiente e confiável.
        </p>
      </section>
    </div>
  );
}

export default Sobre;