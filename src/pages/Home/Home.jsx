import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background: #0f172a;
  color: #f1f5f9;
  text-align: center;
`;

const ProfileImage = styled(motion.img)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  border: 3px solid #38bdf8;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #38bdf8;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Button = styled(motion.a)`
  padding: 0.8rem 1.5rem;
  background: #38bdf8;
  color: #0f172a;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: #0ea5e9;
  }
`;

export default function Home() {
  return (
    <Container>
      <ProfileImage
        src="/src/public/perfil.jpeg"
        alt="Fernando"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Olá, eu sou Fernando
      </Title>
      <Subtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Desenvolvedor Frontend | React | Node.js
      </Subtitle>
      <Button
        href="/projects"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Ver meus projetos
      </Button>
    </Container>
  );
}
