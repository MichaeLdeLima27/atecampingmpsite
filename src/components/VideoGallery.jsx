import styled from 'styled-components';

const VideosSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 30px 20px;
  margin-bottom: 100px;
  background-color: transparent; /* sem fundo escuro */
`;

const VideosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const VideoCard = styled.div`
  width: 320px;
  border-radius: 16px;
  overflow: hidden;
  background: #fff; /* fundo branco */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* sombra leve */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); /* sombra um pouco maior no hover */
  }

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const VideoFrame = styled.iframe`
  width: 100%;
  height: 190px;
  border: none;
  display: block;
`;

const ChannelButton = styled.a`
  background: #4caf50;
  color: white;
  padding: 14px 28px;
  border-radius: 50px;
  font-weight: 500;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #2e7d32;
    transform: scale(1.05);
  }
`;

export function VideoGallery() {
  return (
    <VideosSection>
      <VideosWrapper>
        <VideoCard>
          <VideoFrame src="https://www.youtube.com/embed/JiFE5lMI7ww?start=14" title="Vídeo 1" allowFullScreen />
        </VideoCard>
        <VideoCard>
          <VideoFrame src="https://www.youtube.com/embed/yXHF8vi51NI?start=143" title="Vídeo 2" allowFullScreen />
        </VideoCard>
        <VideoCard>
          <VideoFrame src="https://www.youtube.com/embed/KyMlzn3-6Ik?start=1019" title="Vídeo 3" allowFullScreen />
        </VideoCard>
      </VideosWrapper>
      <ChannelButton
        href="https://www.youtube.com/@atecamping"
        target="_blank"
        rel="noopener noreferrer"
      >
        Conheça o canal e se inscreva
      </ChannelButton>
    </VideosSection>
  );
}
