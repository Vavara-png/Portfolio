// src/components/Footer/Footer.js
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #1e293b;
  color: #f1f5f9;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 -2px 6px rgba(0,0,0,0.3);
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>© 2026 - Portfólio de Fernando</p>
    </FooterContainer>
  );
}
