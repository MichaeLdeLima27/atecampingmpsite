import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bgImage from '../assets/hero-camping.jpeg'; // ajuste o caminho da imagem
import { VideoGallery } from '../components/VideoGallery';

const PageWrapper = styled.div`
  min-height: 100vh;
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
`;

const BackgroundImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover; /* cobre todo viewport */
  z-index: -1;
  pointer-events: none;
  user-select: none;
`;

const HeaderPlaceholder = styled.div`
  height: 80px; /* espaço para header fixo */
`;

const Content = styled.main`
  flex-grow: 1;
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.7);

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 40px;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.6);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 60px;

  a {
    background: linear-gradient(135deg, #4caf50, #81c784);
    color: white;
    padding: 14px 28px;
    font-size: 1.1rem;
    border-radius: 40px;
    text-decoration: none;
    font-weight: bold;
    box-shadow: none; /* remove sombra */
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      background: linear-gradient(135deg, #2e7d32, #66bb6a);
      box-shadow: none;
    }
  }
`;

export default function Home() {
  return (
    <PageWrapper>
      <BackgroundImage src={bgImage} alt="Fundo de camping" />
      <HeaderPlaceholder />
      <Content>
        <HeroTitle>Viva aventuras ao ar livre com a gente!</HeroTitle>
        <HeroSubtitle>
          Explore, acampe, compartilhe. Veja nossas experiências e venha junto!
        </HeroSubtitle>
        <HeroButtons>
          <Link to="/blog">Ver Blog</Link>
          <Link to="/loja">Ir para Loja</Link>
        </HeroButtons>

        <VideoGallery />
      </Content>
    </PageWrapper>
  );
}
