import styled from 'styled-components';
import card1 from '../assets/card1.JPG';
import card2 from '../assets/card2.JPG';
import card3 from '../assets/card3.png';
import card4 from '../assets/card1.JPG'; // Pode criar mais imagens para a segunda sessão
import card5 from '../assets/card2.JPG';
import card6 from '../assets/card3.png';
import { VideoGallery } from '../components/VideoGallery';

const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
  box-sizing: border-box;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  font-weight: 700;
  color: #222;
  text-align: center;
`;

const ContentRow = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 60px;
  justify-content: center;
`;

const ContentText = styled.div`
  flex: 1 1 480px;
  max-width: 480px;

  h3 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #222;
  }

  p {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.6;
  }
`;

const ContentImage = styled.img`
  flex: 1 1 480px;
  max-width: 480px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  object-fit: cover;
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const Card = styled.div`
  width: 280px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }

  div {
    padding: 16px;
  }

  h4 {
    margin: 0 0 8px;
    font-size: 1.2rem;
    color: #222;
  }

  p {
    margin: 0;
    color: #666;
    font-size: 0.95rem;
    line-height: 1.4;
  }
`;

const VideoSection = styled.section`
  background: rgba(240, 240, 240, 0.7);
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto 100px auto;
  border-radius: 12px;
`;

const VideoTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #222;
  text-align: center;
`;

export default function Home() {
  return (
    <>
      {/* Seção 1 */}
      <Section>
        <SectionTitle>Descubra o camping como nunca antes</SectionTitle>
        <ContentRow>
          <ContentImage src={card1} alt="Camping aventureiro" />
          <ContentText>
            <h3>Aventure-se com conforto e segurança</h3>
            <p>
              Conheça os melhores lugares para acampar, dicas essenciais e equipamentos que fazem a diferença para você aproveitar cada momento na natureza.
            </p>
          </ContentText>
        </ContentRow>
        <CardsContainer>
          <Card>
            <img src={card1} alt="Dicas Essenciais" />
            <div>
              <h4>Dicas Essenciais</h4>
              <p>Equipamentos que não podem faltar na sua mochila.</p>
            </div>
          </Card>
          <Card>
            <img src={card2} alt="Melhores Destinos" />
            <div>
              <h4>Melhores Destinos</h4>
              <p>Os locais mais incríveis para acampar em 2025.</p>
            </div>
          </Card>
          <Card>
            <img src={card3} alt="Comunidade ATÉ" />
            <div>
              <h4>Comunidade ATÉ</h4>
              <p>Participe de eventos e troque experiências com outros aventureiros.</p>
            </div>
          </Card>
        </CardsContainer>
      </Section>

      {/* Seção 2 */}
      <Section>
        <SectionTitle>Momentos inesquecíveis em família</SectionTitle>
        <ContentRow style={{ flexDirection: 'row-reverse' }}>
          <ContentImage src={card4} alt="Camping em família" />
          <ContentText>
            <h3>Aproveite a natureza com quem você ama</h3>
            <p>
              O camping é uma oportunidade perfeita para criar memórias eternas e desfrutar do ar livre com sua família.
            </p>
          </ContentText>
        </ContentRow>
        <CardsContainer>
          <Card>
            <img src={card4} alt="Preparação" />
            <div>
              <h4>Preparação</h4>
              <p>Como organizar sua viagem para a família.</p>
            </div>
          </Card>
          <Card>
            <img src={card5} alt="Segurança" />
            <div>
              <h4>Segurança</h4>
              <p>Dicas para garantir uma aventura tranquila.</p>
            </div>
          </Card>
          <Card>
            <img src={card6} alt="Natureza" />
            <div>
              <h4>Natureza</h4>
              <p>Conecte-se com o meio ambiente de forma responsável.</p>
            </div>
          </Card>
        </CardsContainer>
      </Section>

      {/* Seção Vídeos */}
      <VideoSection>
        <VideoTitle>Vídeos Recentes</VideoTitle>
        <VideoGallery />
      </VideoSection>
    </>
  );
}
