// src/pages/Projects/Projects.js
import React from "react";
import styled from "styled-components";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 2rem;
  background: #0f172a;
`;

export default function Projects() {
  return (
    <Container>
      <ProjectCard
        image="/projeto1.png"
        title="Microfrontend"
        description="O projeto utiliza arquitetura de Micro Frontends para organizar módulos independentes (Container, Cardápio e Pedido), permitindo escalabilidade, manutenção facilitada e integração futura com backend"
        tech="React 18, Node.js, Webpack 5 + Module federations, Babel, CSS isolado por microfrontend "
        link="https://github.com/Vavara-png/Microfrontend.git"
        
      />
      <ProjectCard
        image="/projeto2.png"
        title="Chat IA"
        description="Um site que simula um bate_papo com IA (Beta)"
        tech="Next.js, Styled Componet, workflows, API."
        link="https://chat-ia-tan.vercel.app/"
      />
      <ProjectCard
        image="/projeto3.png"
        title="Calculadora"
        description="Um joguinho de adivinhação"
        tech="HTML, CSS, JS"
        link="https://github.com/Vavara-png/Jogo-de-Adivinha--o.git"
      />
    </Container>
  );
}