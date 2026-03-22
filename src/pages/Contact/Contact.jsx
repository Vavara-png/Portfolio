// src/pages/Contact/Contact.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { FaLinkedin, FaWhatsapp, FaFacebook, FaTelegram, FaInstagram } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #0f172a;
  min-height: 100vh;
  padding: 2rem;
`;

const Title = styled.h2`
  color: #38bdf8;
  margin-bottom: 2rem;
`;

const IconsGrid = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 2.5rem;
  color: #f1f5f9;
  cursor: pointer;
`;

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

const PopupContent = styled.div`
  background: #1e293b;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
`;

const PopupImage = styled.img`
  max-width: 300px;
  border-radius: 8px;
`;

export default function Contact() {
  const [popupImage, setPopupImage] = useState(null);

  const handleIconClick = (imagePath) => {
    setPopupImage(imagePath);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <Container>
      <Title>Entre em Contato</Title>
      <IconsGrid>
        <FaLinkedin onClick={() => handleIconClick("/likedin.png")} />
        <FaWhatsapp onClick={() => handleIconClick("/whatsapp.jpeg")} />
        <FaFacebook onClick={() => handleIconClick("/facebook.png")} />
        <FaTelegram onClick={() => handleIconClick("/telegram.jpeg")} />
        <FaInstagram onClick={() => handleIconClick("/instagram.jpeg")} />
      </IconsGrid>

      {popupImage && (
        <PopupOverlay onClick={closePopup}>
          <PopupContent>
            <PopupImage src={popupImage} alt="Rede Social" />
          </PopupContent>
        </PopupOverlay>
      )}
    </Container>
  );
}
