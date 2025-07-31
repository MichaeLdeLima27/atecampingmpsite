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
  font-weight: 600;
`;

const ContentRow = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
`;

const ContentImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 5px;
  object-fit: cover;
  flex: 1 1 600px;
`;

const ContentText = styled.div`
  flex: 1 1 400px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
`;

const TopButton = styled.a`
  align-self: flex-start;
  margin-bottom: 14px;
  background-color: ${(props) => props.color || '#5b8030'};
  border: 2px solid ${(props) => props.color || '#5b8030'};
  color: white;
  font-weight: 300;
  font-size: 0.7rem;
  padding: 5px 15px;
  border-radius: 2px;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.3s ease;

  /* Remove margin-bottom quando estiver reverso para aproximar o botão da imagem */
  margin-bottom: ${(props) => (props.reverse ? '4px' : '14px')};

  &:hover {
    opacity: 0.85;
  }
`;

const Title = styled.h3`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #222;
  font-weight: 600;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  font-weight: 400;
`;

const ImagesRow = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: ${({ align }) => align};
  margin-bottom: 60px;
`;

const ImageBlock = styled.div`
  flex: 1 1 30%;
  min-width: 280px;
  text-align: left;

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    object-fit: cover;
    display: block;
  }

  a.readMoreBtn {
    display: inline-block;
    margin: 12px 0 6px;
    padding: 6px 14px;
    font-weight: 400;
    font-size: 0.85rem;
    color: white;
    background-color: ${(props) => props.color || '#5b8030'};
    border: 1.5px solid ${(props) => props.color || '#5b8030'};
    border-radius: 4px;
    text-decoration: none;
    transition: opacity 0.3s ease;
    cursor: pointer;
    user-select: none;
    letter-spacing: 0.03em;
  }

  a.readMoreBtn:hover {
    opacity: 0.85;
  }

  h4 {
    font-weight: 600;
    margin-top: 6px;
    font-size: 1.2rem;
    color: #222;
  }

  p {
    font-weight: 400;
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
  font-weight: 600;
`;

export default function Home() {
  return (
    <>
      <Section>
        <SectionTitle>Descubra o camping como nunca antes</SectionTitle>
        <ContentRow>
          <ContentImage src={card1} alt="Camping aventureiro" />
          <ContentText>
            <TopButton href="/blog/dicas-essenciais" color="#5b8030" aria-label="Dicas de hotéis">
              Dicas de hotéis
            </TopButton>
            <Title>Aventure-se com conforto e segurança</Title>
            <Paragraph>
              Conheça os melhores lugares para acampar, dicas essenciais e equipamentos que fazem a diferença para você aproveitar cada momento na natureza.
            </Paragraph>
          </ContentText>
        </ContentRow>

        <ImagesRow align="flex-start">
          <ImageBlock>
            <img src={card1} alt="Dicas Essenciais" />
            <a
              href="/blog/dicas-essenciais"
              className="readMoreBtn"
              style={{ backgroundColor: '#5b8030', borderColor: '#5b8030' }}
              aria-label="Leia mais sobre Dicas Essenciais"
            >
              Leia mais
            </a>
            <h4>Dicas Essenciais</h4>
            <p>Equipamentos que não podem faltar na sua mochila.</p>
          </ImageBlock>
          <ImageBlock>
            <img src={card2} alt="Melhores Destinos" />
            <a
              href="/blog/melhores-destinos"
              className="readMoreBtn"
              style={{ backgroundColor: '#c5a33f', borderColor: '#c5a33f' }}
              aria-label="Leia mais sobre Melhores Destinos"
            >
              Leia mais
            </a>
            <h4>Melhores Destinos</h4>
            <p>Os locais mais incríveis para acampar em 2025.</p>
          </ImageBlock>
          <ImageBlock>
            <img src={card3} alt="Comunidade ATÉ" />
            <a
              href="/blog/comunidade-ate"
              className="readMoreBtn"
              style={{ backgroundColor: '#ac4b2a', borderColor: '#ac4b2a' }}
              aria-label="Leia mais sobre Comunidade ATÉ"
            >
              Leia mais
            </a>
            <h4>Comunidade ATÉ</h4>
            <p>Participe de eventos e troque experiências com outros aventureiros.</p>
          </ImageBlock>
        </ImagesRow>
      </Section>

      <Section>
        <SectionTitle>Top 5 Montanhas Mais Conhecidas do Paraná</SectionTitle>
        <ContentRow reverse>
          <ContentImage src={card4} alt="Camping em família" />
          <ContentText>
            <TopButton
              href="/blog/o-que-fazer"
              color="#c5a33f"
              aria-label="O que fazer"
              reverse
            >
              O que fazer
            </TopButton>
            <Title>Pico Paraná, Gigante do Sul</Title>
            <Paragraph>
              O Pico Paraná é o ponto mais alto do Sul do Brasil, com 1.877 metros. Um convite para quem busca aventura, contato com a natureza e vistas inesquecíveis!
            </Paragraph>
          </ContentText>
        </ContentRow>

        <ImagesRow align="flex-end">
          <ImageBlock>
            <img src={card5} alt="Preparação" />
            <a
              href="/blog/morro-do-canal"
              className="readMoreBtn"
              style={{ backgroundColor: '#5b8030', borderColor: '#5b8030' }}
              aria-label="Leia mais sobre Morro do Canal"
            >
              Leia mais
            </a>
            <h4>Morro do Canal (Piraquara)</h4>
            <p>
              Localizado em Piraquara, a cerca de 30 km de Curitiba, o Morro do Canal é um dos destinos mais procurados pelos aventureiros. Com 1.360 metros de altitude, oferece trilha acessível, desafios leves e um visual incrível da Serra do Mar e das represas da região. Ideal para quem busca natureza e emoção sem sair perto da capital.
            </p>
          </ImageBlock>
          <ImageBlock>
            <img src={card6} alt="Segurança" />
            <a
              href="/blog/morro-caratuva"
              className="readMoreBtn"
              style={{ backgroundColor: '#c5a33f', borderColor: '#c5a33f' }}
              aria-label="Leia mais sobre Morro Caratuva"
            >
              Leia mais
            </a>
            <h4>Morro (Pico) Caratuva – A Segunda Gigante do Sul</h4>
            <p>
              O Pico Caratuva, com altitudes estimadas entre 1.850 m e 1.860 m, é a segunda montanha mais alta da região Sul do Brasil, perdendo apenas para o Pico Paraná.
            </p>
          </ImageBlock>
          <ImageBlock>
            <img src={card7} alt="Natureza" />
            <a
              href="/blog/caminho-do-itupava"
              className="readMoreBtn"
              style={{ backgroundColor: '#ac4b2a', borderColor: '#ac4b2a' }}
              aria-label="Leia mais sobre Caminho do Itupava"
            >
              Leia mais
            </a>
            <h4>Caminho do Itupava: Trilha Histórica e Natureza Preservada</h4>
            <p>
              O Caminho do Itupava é uma antiga rota histórica que atravessa a Mata Atlântica no Paraná, oferecendo uma bela trilha de cerca de 36 km entre Curitiba e Morretes, com paisagens naturais, flora e fauna preservadas.
            </p>
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
