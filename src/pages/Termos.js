// src/pages/Termos.js
import React from 'react';
import { Link } from 'react-router-dom';

function Termos() {
  return (
    <div className="content">
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Termos de Uso</h2>
      <p><strong>Data da disponibilidade:</strong> 01/01/2023</p>

      <h3>1. Aceitação dos Termos</h3>
      <p>
        Ao contratar os serviços da Joao's Computer, o cliente concorda com os termos aqui apresentados. O uso dos nossos serviços implica na aceitação plena destes termos.
      </p>

      <h3>2. Serviços Prestados</h3>
      <p>
        A Joao's Computer presta serviços de assistência técnica para computadores, manutenção de sistemas, desenvolvimento de APIs e soluções em TI. Não garantimos resultados específicos, pois estes dependem da infraestrutura e contexto de uso do cliente.
      </p>

      <h3>3. Dependência de Plataformas de Terceiros</h3>
      <p>
        Alguns serviços oferecidos pela Joao's Computer podem depender de plataformas de terceiros, como o WhatsApp. Não nos responsabilizamos por indisponibilidades, alterações ou limitações impostas por esses serviços externos.
      </p>

      <h3>4. Instalação e Suporte</h3>
      <p>
        Instalações básicas podem ser oferecidas como cortesia. O suporte técnico será disponibilizado conforme acordado previamente e dentro do horário comercial. Serviços adicionais de manutenção e suporte contínuo deverão ser contratados separadamente.
      </p>

      <h3>5. Alterações nos Serviços</h3>
      <p>
        A Joao's Computer reserva-se o direito de alterar, suspender ou encerrar qualquer serviço ou funcionalidade, a qualquer momento, com ou sem aviso prévio.
      </p>

      <h3>6. Responsabilidades do Usuário</h3>
      <p>
        O cliente é responsável pela correta utilização dos serviços prestados. A Joao's Computer não se responsabiliza por danos decorrentes do uso indevido, configuração incorreta ou manipulação de terceiros.
      </p>

      <h3>7. Propriedade Intelectual</h3>
      <p>
        O conhecimento, scripts e instruções fornecidos ao cliente são para uso pessoal e não podem ser distribuídos, revendidos ou publicados sem autorização prévia e por escrito.
      </p>

      <h3>8. Rescisão de Serviços</h3>
      <p>
        A qualquer momento, a Joao's Computer pode interromper o fornecimento de serviços, sem obrigação de aviso prévio, especialmente em casos de descumprimento contratual ou uso indevido dos serviços.
      </p>

    </div>
  );
}

export default Termos;
