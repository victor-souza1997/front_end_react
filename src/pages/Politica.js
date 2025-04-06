// src/pages/Politica.js
import React from 'react';
import { Link } from 'react-router-dom';

function Politica() {
  return (
    <div className="content">
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Política de Privacidade</h2>

      <p>
        Esta Política de Privacidade descreve como a Joao's Computer coleta, usa, armazena e protege as informações pessoais de seus usuários e clientes. O uso dos serviços e navegação no site implicam na aceitação total deste documento.
      </p>

      <h3>1. Informações que coletamos</h3>
      <p>
        Podemos coletar informações como nome, e-mail, telefone, endereço, CPF/CNPJ, e dados relacionados à prestação dos nossos serviços de assistência técnica e soluções em TI. Os dados são fornecidos diretamente pelo usuário via formulários, WhatsApp ou atendimento presencial.
      </p>

      <h3>2. Finalidade da coleta</h3>
      <p>
        Os dados coletados são utilizados para fins de:
      </p>
      <ul>
        <li>Identificação e comunicação com o cliente;</li>
        <li>Agendamento de atendimentos técnicos;</li>
        <li>Envio de orçamentos e informações sobre os serviços;</li>
        <li>Melhoria contínua do atendimento e personalização da experiência do cliente.</li>
      </ul>

      <h3>3. Compartilhamento de informações</h3>
      <p>
        A Joao's Computer não compartilha os dados pessoais dos usuários com terceiros, salvo quando necessário para cumprir obrigações legais ou mediante autorização expressa do titular dos dados.
      </p>

      <h3>4. Armazenamento e segurança</h3>
      <p>
        Os dados pessoais são armazenados com segurança em sistemas protegidos. Adotamos práticas adequadas de segurança da informação para evitar acesso, alteração, divulgação ou destruição não autorizada dos dados coletados.
      </p>

      <h3>5. Direitos dos titulares</h3>
      <p>
        O usuário pode, a qualquer momento, solicitar:
      </p>
      <ul>
        <li>Acesso aos seus dados pessoais;</li>
        <li>Correção de informações incompletas ou desatualizadas;</li>
        <li>Exclusão dos dados da nossa base (quando permitido por lei).</li>
      </ul>

      <h3>6. Cookies e dados de navegação</h3>
      <p>
        Podemos utilizar cookies apenas para fins de estatísticas de acesso e desempenho do site, sem coletar dados pessoais identificáveis sem o seu consentimento.
      </p>

      <h3>7. Alterações nesta política</h3>
      <p>
        Esta Política de Privacidade poderá ser atualizada periodicamente. É responsabilidade do usuário consultar esta página regularmente para estar ciente de eventuais modificações.
      </p>

      <h3>8. Informações da empresa e contato</h3>
      <p>
        Razão Social: João Victor Lima de Souza 07202625504<br />
        Nome Fantasia: Joao's Computer<br />
        CNPJ: 48.044.039/0001-37<br />
        Endereço: R. Jordão de Oliveira, 578, CEP 49037-330<br />
        E-mail: victor-souza1997@hotmail.com<br />
        Telefone: (79) 98808-1729
      </p>

  
    </div>
  );
}

export default Politica;
