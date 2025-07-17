// components/Footer.tsx
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f7f7f7;
  padding: 30px 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-top: 1px solid #e0e0e0;
  font-size: 0.9rem;
  color: #555;
`;

const Section = styled.div`
  flex: 1 1 200px;
  margin: 10px 20px;
`;

const Title = styled.h4`
  font-weight: bold;
  margin-bottom: 12px;
  color: #333;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 8px;

  a {
    text-decoration: none;
    color: #555;
    transition: color 0.3s;

    &:hover {
      color: #007BFF;
      text-decoration: underline;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 5px;

  a {
    color: #555;
    font-size: 1.3rem;
    transition: color 0.3s;

    &:hover {
      color: #007BFF;
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Section>
        <Title>ATÉ Camping</Title>
        <p>Seu destino para aventuras ao ar livre. Equipamentos, dicas e mais!</p>
      </Section>

      <Section>
        <Title>Links Úteis</Title>
        <LinkList>
          <LinkItem><a href="/sobre">Sobre</a></LinkItem>
          <LinkItem><a href="/blog">Blog</a></LinkItem>
          <LinkItem><a href="/loja">Loja</a></LinkItem>
          <LinkItem><a href="/contato">Contato</a></LinkItem>
        </LinkList>
      </Section>

      <Section>
        <Title>Siga-nos</Title>
        <SocialLinks>
          <a href="https://facebook.com/atecamping" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="https://instagram.com/atecamping" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://twitter.com/atecamping" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter" />
          </a>
        </SocialLinks>
      </Section>
    </FooterContainer>
  );
}
