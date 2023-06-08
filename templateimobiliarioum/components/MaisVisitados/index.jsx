  import { Inter } from 'next/font/google'
  import Link from 'next/link'
  import { useEffect, useState } from 'react';
  import SwiperCore, { Navigation, Pagination, Autoplay, Lazy, Virtual } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/react';
  import axios from 'axios';
  import 'swiper/swiper-bundle.css';

  SwiperCore.use([Navigation, Pagination, Lazy, Virtual]);

  import styles from '@/styles/components/MaisVisitados/MaisVisitados.module.css'
  import Card from '../Card'




  export default function MaisVisitados() {
    const [loaded, setLoaded] = useState(false);
    const cards = ['','','','','','','','','','','','','','','','','','','','','','','',''];
    const [virtualSlides, setVirtualSlides] = useState([]);
  
    useEffect(() => {
      const slides = cards.map((item, index) => (
        <SwiperSlide key={index}>
          <Link href="/Detalhes" style={{ width: '100%', maxWidth: '325px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Card loading="lazy" style={{ height: '450px' }} />
          </Link>
        </SwiperSlide>
      ));
      setVirtualSlides(slides);
    }, []);
  
    return (
      <section className={styles.SectionCards}>
        <div className={styles.SectionCardsContainer}>  
          <div className={styles.HeaderCards}>
            <div className={styles.Title}>
              <h2>Os imóveis <br /><span>Mais Visitados:</span></h2>
            </div>
            <Link href="/Resultado-da-Pesquisa">
              <div>
                <p>Veja Mais Imóveis</p>
              </div>
            </Link>
          </div>
          <div className={styles.CarrouselHere}>
  
            <Swiper
              loop={false}
              spaceBetween={10}
              autoplay={{ delay: 3000 }}
              slidesPerView={4}
              navigation
              grabCursor={true}
              lazy="true"
              virtual
              modules={[Pagination, Navigation, Autoplay, Virtual]}
              style={{ height: '450px' }}
              breakpoints={{
                280: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                880: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1224: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1600: {
                  slidesPerView: 4,
                  spaceBetween: 5,
                },
              }}
            >
              {virtualSlides}
            </Swiper>
  
          </div>
        </div>
      </section>
    )
  }