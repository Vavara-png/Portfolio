// src/components/SkillCard/SkillCard.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Card = styled(motion.div)`
  background: #1e293b;
  color: #f1f5f9;
  border-radius: 10px;
  padding: 1rem;
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const Label = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
`;

export default function SkillCard({ icon, label }) {
  return (
    <Card
      whileHover={{ scale: 1.1, rotate: 5 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <IconWrapper>{icon}</IconWrapper>
      <Label>{label}</Label>
    </Card>
  );
}
