import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Yo() {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animación con GSAP que se activa cuando las tarjetas son visibles
    gsap.fromTo(
      cardsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  // Datos específicos para cada tarjeta
  const platforms = [
    { name: 'Wallapop', imgUrl: '/img/walla.png' },
    { name: 'Milanuncios', imgUrl: '/img/mil.png' },
    { name: 'LinkedIn', imgUrl: '/img/link.png' },
    { name: 'Malt', imgUrl: '/img/malt.png' },
  ];

  return (
    <section className="yo-section">
      <div className="yo-intro">
        <img className="yo-photo" src="/img/fotomia.png" alt="Foto de perfil" />
        <h2 className="yo-title">FULLSTACK DEVELOPER</h2>
        <div>
          <div>
            <h3>Carlos P.</h3>
            <p>
              Más de 1 año de experiencia en la creación de Aplicaciones FullStack.
            </p>

          </div>
          <div>
            <p>
              Colaborando y Negociando acuerdos beneficiosos, tanto para mis clientes, como su Presupuesto.
            </p>

          </div>
        </div>
      </div>
      <h3>Encuentrame en:</h3>
      
      <div className="yo-cards">
        
        {platforms.map((platform, index) => (
          <div key={platform.name} className="tarjeta" ref={(el) => (cardsRef.current[index] = el)}>
            <div className="tarjeta__imagen">
              <img src={platform.imgUrl} alt={platform.name} />
            </div>
            <h3 className="tarjeta__title">{platform.name}</h3>
          </div>
        ))}
      </div>
      
    </section>
  );
}

export default Yo;
