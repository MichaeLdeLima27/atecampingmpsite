import styled from 'styled-components';

const VideosSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 20px;
  margin-bottom: 100px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 16px;
`;

const VideosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
`;

const VideoFrame = styled.iframe`
  width: 320px;
  height: 180px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  border: none;

  @media (max-width: 768px) {
    width: 90vw;
    height: calc(90vw * 9 / 16);
  }
`;

const ChannelButton = styled.a`
  background: #4caf50;
  color: white;
  padding: 14px 28px;
  border-radius: 50px;
  font-weight: bold;
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
        <VideoFrame src="https://www.youtube.com/embed/JiFE5lMI7ww?start=14" title="Vídeo 1" allowFullScreen />
        <VideoFrame src="https://www.youtube.com/embed/yXHF8vi51NI?start=143" title="Vídeo 2" allowFullScreen />
        <VideoFrame src="https://www.youtube.com/embed/KyMlzn3-6Ik?start=1019" title="Vídeo 3" allowFullScreen />
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
