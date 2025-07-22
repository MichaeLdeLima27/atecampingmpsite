import styled from 'styled-components';
import card1 from '../assets/card1.JPG';
import card2 from '../assets/card2.JPG';
import card3 from '../assets/card2.JPG';
import card4 from '../assets/picoparana.jpg';
import card5 from '../assets/morrodocanal.jpg';
import card6 from '../assets/morrocaratuva.webp';
import card7 from '../assets/caminhodoitupava.jpg';
import { VideoGallery } from '../components/VideoGallery';

const Section = styled.section`
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  text-align: center;
  color: #222;
`;

const ContentRow = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

const ContentImage = styled.img`
  width: 50%;
  min-width: 300px;
  border-radius: 5px;
  object-fit: cover;
`;

const ContentText = styled.div`
  flex: 1;
  min-width: 300px;

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

const ImagesRow = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: ${({ align }) => align};
  margin-bottom: 60px;
`;

const ImageBlock = styled.div`
  width: 30%;
  min-width: 280px;
  text-align: center;

  img {
    width: 100%;
    border-radius: 5px;
    object-fit: cover;
  }

  h4 {
    margin-top: 10px;
    font-size: 1.2rem;
    color: #222;
  }

  p {
    font-size: 0.95rem;
    color: #555;
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
  text-align: center;
  color: #222;
`;

export default function Home() {
  return (
    <>
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
        <ImagesRow align="flex-start">
          <ImageBlock>
            <img src={card1} alt="Dicas Essenciais" />
            <h4>Dicas Essenciais</h4>
            <p>Equipamentos que não podem faltar na sua mochila.</p>
          </ImageBlock>
          <ImageBlock>
            <img src={card2} alt="Melhores Destinos" />
            <h4>Melhores Destinos</h4>
            <p>Os locais mais incríveis para acampar em 2025.</p>
          </ImageBlock>
          <ImageBlock>
            <img src={card3} alt="Comunidade ATÉ" />
            <h4>Comunidade ATÉ</h4>
            <p>Participe de eventos e troque experiências com outros aventureiros.</p>
          </ImageBlock>
        </ImagesRow>
      </Section>

      <Section>
        <SectionTitle>Top 5 Montanhas Mais Conhecidas do Paraná</SectionTitle>
        <ContentRow style={{ flexDirection: 'row-reverse' }}>
          <ContentImage src={card4} alt="Camping em família" />
          <ContentText>
            <h3>Pico Paraná, Gigante do Sul</h3>
            <p>
              O Pico Paraná é o ponto mais alto do Sul do Brasil, com 1.877 metros. Um convite para quem busca aventura, contato com a natureza e vistas inesquecíveis!
            </p>
          </ContentText>
        </ContentRow>
        <ImagesRow align="flex-end">
          <ImageBlock>
            <img src={card5} alt="Preparação" />
            <h4> Morro do Canal (Piraquara)</h4>
            <p>Localizado em Piraquara, a cerca de 30 km de Curitiba, o Morro do Canal é um dos destinos mais procurados pelos aventureiros. Com 1.360 metros de altitude, oferece trilha acessível, desafios leves e um visual incrível da Serra do Mar e das represas da região. Ideal para quem busca natureza e emoção sem sair perto da capital.</p>
          </ImageBlock>
          <ImageBlock>
            <img src={card6} alt="Segurança" />
            <h4>Morro (Pico) Caratuva – A Segunda Gigante do Sul</h4>
            <p>O Pico Caratuva, com altitudes estimadas entre 1.850 m e 1.860 m, é a segunda montanha mais alta da região Sul do Brasil, perdendo apenas para o Pico Paraná</p>
          </ImageBlock>
          <ImageBlock>
            <img src={card7} alt="Natureza" />
            <h4>Caminho do Itupava: Trilha Histórica e Natureza Preservada</h4>
            <p>O Caminho do Itupava é uma antiga rota histórica que atravessa a Mata Atlântica no Paraná, oferecendo uma bela trilha de cerca de 36 km entre Curitiba e Morretes, com paisagens naturais, flora e fauna preservadas.</p>
          </ImageBlock>
        </ImagesRow>
      </Section>

      <VideoSection>
        <VideoTitle>Vídeos Recentes</VideoTitle>
        <VideoGallery />
      </VideoSection>
    </>
  );
}
