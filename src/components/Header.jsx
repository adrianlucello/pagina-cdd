import React from 'react';
import '../styles/video.css';
import '../styles/button.css';
import '../styles/legacy-text.css';
import '../styles/banner.css';

// Header 1: Vídeo em loop
const VideoHeader = () => {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (error) {
        console.error("Erro ao reproduzir vídeo:", error);
      }
    };

    playVideo();
  }, []);

  return (
    <section className="w-full bg-black flex justify-center items-center">
      <div className="video-container">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="metadata"
          disablePictureInPicture
          controlsList="nodownload noplaybackrate"
        >
          <source 
            src="/videodalogo.mp4" 
            type="video/mp4" 
            media="(max-width: 768px)"
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
        />
        
        {/* Versão Mobile */}
        <img 
          src="/line-up.webp" 
          alt="Banner Início - Mobile" 
          className="banner-image-mobile"
          loading="lazy"
          width="100%"
          height="460"
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