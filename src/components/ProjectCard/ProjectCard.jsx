// src/components/ProjectCard/ProjectCard.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Card = styled(motion.div)`
  background: #1e293b;
  color: #f1f5f9;
  border-radius: 10px;
  padding: 1.5rem;
  width: 300px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  margin: 0.5rem 0;
`;

const Description = styled.p`
  font-size: 0.9rem;
  text-align: center;
`;

const Tech = styled.span`
  font-size: 0.8rem;
  color: #38bdf8;
`;

const Link = styled.a`
  margin-top: 1rem;
  color: #38bdf8;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default function ProjectCard({ image, title, description, tech, link }) {
  return (
    <Card
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Tech>{tech}</Tech>
      <Link href={link} target="_blank">Ver Projeto</Link>
    </Card>
  );
}
