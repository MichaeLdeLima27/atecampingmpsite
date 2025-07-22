import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Play, Pause } from 'lucide-react';

const PlayerButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  cursor: pointer;
  padding: 12px;
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 9999;

  &:hover {
    transform: scale(1.1);
    background: rgba(0, 0, 0, 0.8);
  }

  svg {
    color: #fff;
    width: 30px;
    height: 30px;
    transition: color 0.3s ease;
  }
`;

const musicas = [
  { title: "Acoustic Breeze", src: "/musicas/musica1.mp3" },
  { title: "Sunny", src: "/musicas/musica2.mp3" },
  { title: "Carefree", src: "/musicas/musica3.mp3" },
];

export function BackgroundMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.05; // Volume baixo (10%)
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, trackIndex]);

  function handleEnded() {
    setTrackIndex((prev) => (prev + 1) % musicas.length);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={musicas[trackIndex].src}
        onEnded={handleEnded}
        loop={false}
      />
      <PlayerButton onClick={togglePlay}>
        {isPlaying ? <Pause /> : <Play />}
      </PlayerButton>
    </>
  );
}
