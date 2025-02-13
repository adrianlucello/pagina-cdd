import React, { useState, useEffect, useRef } from 'react';
import '../styles/video.css';
import '../styles/button.css';
import '../styles/legacy-text.css';
import '../styles/banner.css';

// Função para detectar dispositivos iOS
const isIOS = () => {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform) || 
  (navigator.userAgent.includes("Mac") && "ontouchend" in document);
};

// Header 1: Vídeo em loop
const VideoHeader = () => {
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);
  const [isIOSDevice, setIsIOSDevice] = useState(false);

  useEffect(() => {
    setIsIOSDevice(isIOS());
    const videoElement = videoRef.current;
    
    const handleCanPlay = () => {
      if (isIOS()) {
        // Para iOS, tentamos reproduzir com um evento de usuário
        videoElement.play().catch(error => {
          console.error('Erro ao reproduzir vídeo no iOS:', error);
          setVideoError(true);
        });
      } else {
        const playPromise = videoElement.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('Vídeo reproduzindo');
            })
            .catch(error => {
              console.error('Erro ao reproduzir vídeo:', error);
              setVideoError(true);
            });
        }
      }
    };

    const handleError = (e) => {
      console.error('Erro no vídeo:', e);
      setVideoError(true);
    };

    const handleIOSPlay = () => {
      if (videoElement) {
        videoElement.play().catch(error => {
          console.error('Erro de reprodução no iOS:', error);
        });
      }
    };

    if (videoElement) {
      // Adicionar evento de toque para iOS
      document.addEventListener('touchstart', handleIOSPlay, { once: true });

      videoElement.addEventListener('canplay', handleCanPlay);
      videoElement.addEventListener('error', handleError);

      return () => {
        document.removeEventListener('touchstart', handleIOSPlay);
        videoElement.removeEventListener('canplay', handleCanPlay);
        videoElement.removeEventListener('error', handleError);
      };
    }
  }, []);

  if (videoError) {
    return (
      <section className="w-full bg-black flex justify-center items-center">
        <div className="video-container">
          <p>Erro ao carregar o vídeo. Por favor, atualize a página.</p>
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
          webkit-playsinline="true"
          x5-playsinline="true"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="false"
          loop
          preload="metadata"
          disablePictureInPicture
          controlsList="nodownload noplaybackrate"
          width="100%"
          height="auto"
          poster="/videodalogo-poster.jpg"
        >
          <source 
            src="/videodalogo.mp4" 
            type="video/mp4" 
          />
          Seu navegador não suporta vídeos.
        </video>
        {isIOSDevice && (
          <div className="ios-play-overlay">
            <button onClick={() => videoRef.current?.play()}>
              Reproduzir Vídeo
            </button>
          </div>
        )}
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