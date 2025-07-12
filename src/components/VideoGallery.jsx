import styled from 'styled-components';

const VideoCard = styled.div`
  background: transparent; /* sem fundo */
  border-radius: 20px;
  padding: 0;
  max-width: 1100px;
  width: 100%;
  text-align: center;
  margin: 0 auto 60px auto;
  color: #fff;
  box-shadow: none;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
  text-shadow: 1px 1px 6px rgba(0,0,0,0.8);
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 30px;
  color: #eee;
  text-shadow: 1px 1px 6px rgba(0,0,0,0.7);
`;

const VideosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const VideoFrame = styled.iframe`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  border: none;
  box-shadow: none;
`;

const ChannelButton = styled.a`
  display: inline-block;
  background: #c62828;
  color: #fff;
  padding: 14px 28px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: background 0.3s ease;

  &:hover {
    background: #b71c1c;
  }
`;

export function VideoGallery() {
  return (
    <VideoCard>
      <Title>Confira nossos vídeos no YouTube</Title>
      <Subtitle>
        Aventuras, montagens de barraca, receitas e momentos inesquecíveis! 🌲🔥
      </Subtitle>

      <VideosWrapper>
        <VideoFrame
          src="https://www.youtube.com/embed/JiFE5lMI7ww"
          title="Vídeo 1"
          allowFullScreen
        />
        <VideoFrame
          src="https://www.youtube.com/embed/yXHF8vi51NI"
          title="Vídeo 2"
          allowFullScreen
        />
        <VideoFrame
          src="https://www.youtube.com/embed/KyMlzn3-6Ik"
          title="Vídeo 3"
          allowFullScreen
        />
      </VideosWrapper>

      <ChannelButton
        href="https://www.youtube.com/@atecamping"
        target="_blank"
        rel="noopener noreferrer"
      >
        Conheça o canal e se inscreva
      </ChannelButton>
    </VideoCard>
  );
}
