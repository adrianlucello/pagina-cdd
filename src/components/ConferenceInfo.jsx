import React from 'react';
import '../styles/conference-info.css';

const ConferenceInfo = () => {
  return (
    <section className="conference-section flex flex-col items-center justify-center gap-8 py-16">
      <div className="video-wrapper">
        <iframe
          className="w-full max-w-4xl aspect-video"
          src="https://www.youtube.com/embed/jzzvp_XcaxA"
          title="ELEVE Conference"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Título e Subtítulo */}
          <div className="text-white">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-6 leading-tight">
              A CONFERÊNCIA QUE VAI UNIR JOVENS DE TODA A NAÇÃO PARA VIVER UMA EXPERIÊNCIA SOBRENATURAL
            </h2>
            <div className="title-border mb-6"></div>
            <p className="font-montserrat text-lg md:text-xl leading-relaxed">
              A ELEVE CONFERENCE é a principal Conferência do Eleve, da igreja da cidade.
            </p>
            <p className="font-montserrat text-lg md:text-xl leading-relaxed mt-4">
              São 3 dias de uma experiência profunda com Deus e com a nova geração, 
              despertando a vocação e preparando jovens e adolescentes para serem 
              a resposta de Deus em nosso tempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceInfo; 