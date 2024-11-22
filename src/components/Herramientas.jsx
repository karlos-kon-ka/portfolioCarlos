import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import LazyLoad from 'react-lazy-load';

const Carrousel = () => {
  const images = [
    { src: '/img/node.png', alt: 'Node.js' },
    { src: '/img/mongo.png', alt: 'MongoDB' },
    { src: '/img/npm.png', alt: 'NPM' },
    { src: '/img/ex.png', alt: 'Express' },
    { src: '/img/py.png', alt: 'Python' },
    { src: '/img/php.png', alt: 'php' },
    { src: '/img/linux.png', alt: 'Linux' },
    { src: '/img/docker.png', alt: 'Docker' },
    { src: '/img/bash.png', alt: 'Bash' },
  ];

  return (
    <div className="carousel-container">
      <Carousel
        autoPlay
        infiniteLoop
        interval={2000}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <LazyLoad height={200} offset={100}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy" // Carga diferida de imágenes
                className="carousel-image"
              />
            </LazyLoad>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carrousel;
