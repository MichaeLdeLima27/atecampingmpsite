// components/Header.tsx
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  z-index: 1000;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: underline;
  }
`;

export const Header = () => (
  <HeaderContainer>
    <Logo>ATÉ Camping</Logo>
    <Nav>
      <NavLink href="#sobre">Sobre</NavLink>
      <NavLink href="#blog">Blog</NavLink>
      <NavLink href="#loja">Loja</NavLink>
      <NavLink href="#contato">Contato</NavLink>
    </Nav>
  </HeaderContainer>
);
