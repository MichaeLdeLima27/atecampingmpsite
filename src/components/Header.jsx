import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.webp'; // ajuste o caminho se necessário

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  background: transparent; /* sem fundo */
  padding: 20px;
  color: #fff;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #fff;
  }

  h1 {
    margin: 0;
    font-size: 1.5rem;
    text-shadow: 1px 1px 4px rgba(0,0,0,0.7);
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    text-shadow: 1px 1px 4px rgba(0,0,0,0.7);

    &:hover {
      text-decoration: underline;
      color: #a5d6a7;
    }
  }
`;

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <img src={logo} alt="Logo ATE Camping" />
          <h1>ATÉ Camping</h1>
        </LogoContainer>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/loja">Loja</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
}
