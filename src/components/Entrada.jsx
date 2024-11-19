import { useState, useRef, useEffect } from 'react';
import LazyLoad from 'react-lazy-load';
import Herramientas from './Herramientas';
import Yo from './Yo';
import Rama from './Ramas';

function Entrada() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef(null);

  const handleVideoVisibility = (isVisible) => {
    setIsVideoVisible(isVisible);
  };

  // Lazy loading video cuando está en la vista
  useEffect(() => {
    const videoElement = videoRef.current;
    if (isVideoVisible && videoElement) {
      videoElement.play(); // Reproduce el video cuando es visible
    } else if (videoElement) {
      videoElement.pause(); // Pausa el video si no es visible
    }
  }, [isVideoVisible]);

  return (
    <>
      <div className="entrada-container">
        {/* Lazy Load Video */}
        <LazyLoad height={400} offset={100} onContentVisible={() => handleVideoVisibility(true)}>
          <div> {/* Envolvemos el contenido en un único div */}
            {isVideoVisible && (
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                className="entrada-video"
                preload="metadata" // Carga solo los metadatos para evitar cargar el video completo inicialmente
                onCanPlayThrough={() => setIsVideoVisible(true)} // Solo muestra el video cuando puede reproducirse
              >
                <source src="/img/video.mp4" type="video/mp4" />
                <source src="/img/video.webm" type="video/webm" />
                Tu navegador no soporta el video.
              </video>
            )}
          </div>
        </LazyLoad>
      </div>
      <section>
        <Herramientas />
        <Rama />
        <Yo />
        
      </section>
    </>
  );
}

export default Entrada;
