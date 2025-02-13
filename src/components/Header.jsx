import React, { useState, useEffect, useRef } from 'react';
import '../styles/video.css';
import '../styles/button.css';
import '../styles/legacy-text.css';
import '../styles/banner.css';

// Header 1: Vídeo em loop
const VideoHeader = () => {
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    
    const handleCanPlay = () => {
      const playPromise = videoElement.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Vídeo começou a reproduzir
            console.log('Vídeo reproduzindo');
          })
          .catch(error => {
            console.error('Erro ao reproduzir vídeo:', error);
            setVideoError(true);
          });
      }
    };

    const handleError = (e) => {
      console.error('Erro no vídeo:', e);
      setVideoError(true);
    };

    if (videoElement) {
      videoElement.addEventListener('canplay', handleCanPlay);
      videoElement.addEventListener('error', handleError);

      return () => {
        videoElement.removeEventListener('canplay', handleCanPlay);
        videoElement.removeEventListener('error', handleError);
      };
    }
  }, []);

  if (videoError) {
    return (
      <section className="w-full bg-black flex justify-center items-center">
        <div className="video-container">
          <p>Erro ao carregar o vídeo</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-black flex justify-center items-center">
      <div className="video-container">
        <video
          ref={videoRef}
          muted
          playsInline
          loop
          preload="auto"
          disablePictureInPicture
          controlsList="nodownload noplaybackrate"
          width="100%"
          height="auto"
          poster="/videodalogo-poster.jpg"  // Adicionar um poster para melhor UX
        >
          <source 
            src="/videodalogo.mp4" 
            type="video/mp4" 
          />
          Seu navegador não suporta vídeos.
        </video>
      </div>
    </section>
  );
};

// Texto "O Legado" em movimento
const LegacyText = () => {
  return (
    <div className="legacy-section">
      <div className="legacy-marquee">
        <div className="legacy-text-repeat">
          <div className="legacy-text">O LEGADO ⯌</div>
          <div className="legacy-text">O LEGADO ⯌</div>
          <div className="legacy-text">O LEGADO ⯌</div>
          <div className="legacy-text">O LEGADO ⯌</div>
          <div className="legacy-text">O LEGADO ⯌</div>
          <div className="legacy-text">O LEGADO ⯌</div>
          <div className="legacy-text">O LEGADO ⯌</div>
          <div className="legacy-text">O LEGADO ⯌</div>
          <div className="legacy-text">O LEGADO ⯌</div>
          <div className="legacy-text">O LEGADO ⯌</div>
        </div>
      </div>
    </div>
  );
};

// Header 2: Banner com botão
const BannerHeader = () => {
  return (
    <section className="banner-section">
      <div className="banner-container">
        {/* Versão Desktop */}
        <img 
          src="/line-up.webp" 
          alt="Banner Início - Desktop" 
          className="banner-image-desktop"
          loading="lazy"
          width="100%"
          height="460"
          decoding="async"
        />
        
        {/* Versão Mobile */}
        <img 
          src="/line-up.webp" 
          alt="Banner Início - Mobile" 
          className="banner-image-mobile"
          loading="lazy"
          width="100%"
          height="460"
          decoding="async"
        />
      </div>

      {/* Botão centralizado sobre o banner */}
      <div className="banner-button-container">
        <button className="cdd-button">
          <span className="cdd-button-text">Garantir Meu Ingresso</span>
        </button>
      </div>
    </section>
  );
};

// Componente principal que agrupa os headers
const Header = () => {
  return (
    <>
      <VideoHeader />
      <LegacyText />
      <BannerHeader />
    </>
  );
};

export default Header; 