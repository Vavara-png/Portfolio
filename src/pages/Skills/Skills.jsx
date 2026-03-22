import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SkillCard from "../../components/SkillCard/SkillCard";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: #0f172a;
  min-height: 80vh;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 3rem;
`;

const DiplomasGrid = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h2`
  color: #38bdf8;
  margin-bottom: 1.5rem;
`;

const DiplomaCard = styled(motion.div)`
  background: #1e293b;
  color: #f1f5f9;
  padding: 1rem;
  border-radius: 8px;
  width: 620px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const DiplomaImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 0.8rem;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const DiplomaTitle = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
`;

/* Popup */
const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PopupContent = styled(motion.div)`
  background: #1e293b;
  color: #f1f5f9;
  padding: 2rem;
  border-radius: 8px;
  max-width: 600px;
  text-align: center;
`;

export default function Skills() {
  const [popupText, setPopupText] = useState(null);

  const skillsInfo = {
    React:
      "Aqui aprendi na prática sobre os componentes funcionais, hooks, gerenciamento de estado e integração com APIs.",
    "Node.js":
      "Aprendi sobre criação de servidores, rotas, middlewares e integração com bancos de dados.",
    JavaScript:
      "Domínio de ES6+, manipulação de DOM, funções assíncronas e boas práticas.",
    HTML5: "Estrutura semântica, acessibilidade e uso de tags modernas.",
    CSS3: "Flexbox, Grid, animações e responsividade.",
    MongoDB:
      "Modelagem de dados, consultas, agregações e integração com Node.js.",
    GitHub:
      "Controle de versão, branches, pull requests e colaboração em projetos.",
  };

  const handleSkillClick = (skill) => {
    setPopupText(skillsInfo[skill]);
  };

  const closePopup = () => {
    setPopupText(null);
  };

  return (
    <Container>
      <Title>Minhas Habilidades</Title>
      <SkillsGrid>
        <div onClick={() => handleSkillClick("React")}>
          <SkillCard icon={<FaReact color="#61dafb" />} label="React" />
        </div>
        <div onClick={() => handleSkillClick("Node.js")}>
          <SkillCard icon={<FaNodeJs color="#68a063" />} label="Node.js" />
        </div>
        <div onClick={() => handleSkillClick("JavaScript")}>
          <SkillCard
            icon={<SiJavascript color="#f7df1e" />}
            label="JavaScript"
          />
        </div>
        <div onClick={() => handleSkillClick("HTML5")}>
          <SkillCard icon={<FaHtml5 color="#e34f26" />} label="HTML5" />
        </div>
        <div onClick={() => handleSkillClick("CSS3")}>
          <SkillCard icon={<FaCss3Alt color="#1572b6" />} label="CSS3" />
        </div>
        <div onClick={() => handleSkillClick("MongoDB")}>
          <SkillCard icon={<SiMongodb color="#4db33d" />} label="MongoDB" />
        </div>
        <div onClick={() => handleSkillClick("GitHub")}>
          <SkillCard icon={<FaGithub color="#f1f5f9" />} label="GitHub" />
        </div>
      </SkillsGrid>

      <Title>Meus Diplomas</Title>
      <DiplomasGrid>
        <DiplomaCard
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <DiplomaImage
            src="/java-back-end.png"
            alt="Back-end JAVA"
          />
          <DiplomaTitle>Curso Back-end em JAVA</DiplomaTitle>
        </DiplomaCard>
        <DiplomaCard
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <DiplomaImage
            src="/python-full-stack.png"
            alt="Python Full Stack"
          />
          <DiplomaTitle>Curso Front-end e Back-end em Python</DiplomaTitle>
        </DiplomaCard>
      </DiplomasGrid>

      {popupText && (
        <PopupOverlay onClick={closePopup}>
          <PopupContent
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
          >
            <p>{popupText}</p>
          </PopupContent>
        </PopupOverlay>
      )}
    </Container>
  );
}
