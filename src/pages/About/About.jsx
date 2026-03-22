import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  background: #0f172a;
  min-height: 80vh;
  color: #f1f5f9;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  border: 3px solid #38bdf8;
`;

const Title = styled.h2`
  color: #38bdf8;
  margin-bottom: 1rem;
`;

const Bio = styled.p`
  max-width: 600px;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const Links = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const IconLink = styled.a`
  color: #38bdf8;
  font-size: 2rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
    color: #0ea5e9;
  }
`;

export default function  About() { {motion}
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <ProfileImage src="/src/assets/perfil.jpeg" alt="Fernando" />
        <Title>Sobre Mim</Title>
        <Bio>
          Sou Fernando, desenvolvedor frontend apaixonado por criar interfaces
          modernas e funcionais. Tenho experiência com React, Node.js e
          tecnologias de design responsivo. Meu objetivo é transformar ideias em
          soluções digitais que encantem os usuários.
        </Bio>
        <Links>
          <IconLink href="www.linkedin.com/in/fernando-oliveira-dev" target="_blank">
            <FaLinkedin />
          </IconLink>
          <IconLink href="https://github.com/Vavara-png" target="_blank">
            <FaGithub />
          </IconLink>
          <IconLink href="mailto:doodchat00@gmail.com">
            <FaEnvelope />
          </IconLink>
        </Links>
      </motion.div>
    </Container>
  );
}
