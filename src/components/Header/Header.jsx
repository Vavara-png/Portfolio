// src/components/Header/Header.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = styled.nav`
  background: linear-gradient(90deg, #0f172a, #1e293b);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f1f5f9;
  box-shadow: 0 4px 8px rgba(0,0,0,0.4);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #38bdf8;
  letter-spacing: 2px;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled(NavLink)`
  color: #f1f5f9;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #38bdf8;
  }

  &.active {
    color: #38bdf8;
    font-weight: bold;
  }

  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #38bdf8;
    transition: width 0.3s ease;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-100%")};
  width: 70%;
  height: 100%;
  background: #1e293b;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
  transition: right 0.3s ease;
  z-index: 999;
`;

const MobileLink = styled(NavLink)`
  color: #f1f5f9;
  text-decoration: none;
  font-size: 1.2rem;
  margin: 1rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: #38bdf8;
  }

  &.active {
    color: #38bdf8;
    font-weight: bold;
  }
`;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <Logo>Portfólio</Logo>
      <Menu>
        <StyledLink to="/" end>Home</StyledLink>
        <StyledLink to="/about">Sobre</StyledLink>
        <StyledLink to="/projects">Projetos</StyledLink>
        <StyledLink to="/skills">Habilidades</StyledLink>
        <StyledLink to="/contact">Contato</StyledLink>
      </Menu>
      <Hamburger onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <MobileMenu open={open}>
        <MobileLink to="/" end onClick={() => setOpen(false)}>Home</MobileLink>
        <MobileLink to="/about" onClick={() => setOpen(false)}>Sobre</MobileLink>
        <MobileLink to="/projects" onClick={() => setOpen(false)}>Projetos</MobileLink>
        <MobileLink to="/skills" onClick={() => setOpen(false)}>Habilidades</MobileLink>
        <MobileLink to="/contact" onClick={() => setOpen(false)}>Contato</MobileLink>
      </MobileMenu>
    </Nav>
  );
}
