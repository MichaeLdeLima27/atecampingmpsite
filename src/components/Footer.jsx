import styled from 'styled-components';
import { FaYoutube, FaInstagram, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: transparent; /* sem fundo */
  color: #fff;
  padding: 30px 20px;
  text-align: center;
  position: relative;
  z-index: 10;
  box-shadow: none;
`;

const SocialIcons = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 24px;

  a {
    color: #fff;
    font-size: 2rem;
    transition: color 0.3s ease;

    &:hover {
      color: #2e7d32;
      transform: scale(1.1);
    }
  }
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  opacity: 0.85;
  margin: 0;
  text-shadow: 1px 1px 6px rgba(0,0,0,0.7);
`;

export function Footer() {
  return (
    <FooterContainer>
      <FooterText>© 2025 criado por Michael Pianaro — Todos os direitos reservados</FooterText>
      <SocialIcons>
        <a
          href="https://www.youtube.com/@atecamping"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
        <a
          href="https://instagram.com/ketlynra_"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:ketlynra@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </SocialIcons>
    </FooterContainer>
  );
}
