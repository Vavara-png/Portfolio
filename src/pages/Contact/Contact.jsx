// src/pages/Contact/Contact.jsx
import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { FaLinkedin, FaWhatsapp, FaFacebook, FaTelegram, FaInstagram } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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
  margin-bottom: 3rem;
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

// Estilos do formulário
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 5px;
  border: none;
  outline: none;
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border-radius: 5px;
  border: none;
  outline: none;
  min-height: 120px;
`;

const Button = styled.button`
  padding: 0.8rem;
  background: #38bdf8;
  color: #0f172a;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: #0ea5e9;
  }
`;

export default function Contact() {
  const [popupImage, setPopupImage] = useState(null);
  const [status, setStatus] = useState("");

  const handleIconClick = (imagePath) => {
    setPopupImage(imagePath);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_USER_ID
    ).then(
      () => setStatus("Mensagem enviada com sucesso!"),
      (error) => setStatus("Erro ao enviar: " + error.text)
    );

    e.target.reset();
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

      {/* Formulário abaixo dos ícones */}
      <Form onSubmit={sendEmail}>
        <Input type="text" name="user_name" placeholder="Seu nome" required />
        <Input type="email" name="user_email" placeholder="Seu email" required />
        <TextArea name="message" placeholder="Sua mensagem" required />
        <Button type="submit">Enviar</Button>
        {status && <p>{status}</p>}
      </Form>
    </Container>
  );
}
