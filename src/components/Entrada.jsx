import { useState } from 'react';
import LazyLoad from 'react-lazy-load';
import Herramientas from './Herramientas';
import Yo from './Yo';

function Entrada() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleVideoVisibility = (isVisible) => {
    setIsVideoVisible(isVisible);
  };

  return (
    <>
      <div className="entrada-container">
        {/* Lazy Load Video */}
        <LazyLoad height={400} offset={100} onContentVisible={() => handleVideoVisibility(true)}>
          <div> {/* Envolvemos el contenido en un único div */}
            {isVideoVisible && (
              <video autoPlay loop muted className="entrada-video">
                <source src="/img/video.mp4" type="video/mp4" />
                Tu navegador no soporta el video.
              </video>
            )}
          </div>
        </LazyLoad>
      </div>
      <section>
        <Herramientas />
        <Yo />
      </section>
    </>
  );
}

export default Entrada;
