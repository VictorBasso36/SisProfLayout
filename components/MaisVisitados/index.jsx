import { Inter } from 'next/font/google'
import Link from 'next/link'

import SwiperCore, { Navigation, Pagination, Autoplay  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination]);

import styles from '@/styles/components/MaisVisitados/MaisVisitados.module.css'

//ItemsNext







import Card from '../Card'

export default function MaisVisitados() {
  //capturar da api
  const cards = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','',]
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
            slidesPerView={4}
            navigation
            grabCursor={true}
            pointerEvents={'auto'}  
            modules={[Pagination, Navigation, Autoplay]}
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
            {cards.map(item => (
            <SwiperSlide >
              <Link href="/Detalhes" style={{width:100+"%", maxWidth:"325px", display:"flex", alignItems: "center", justifyContent: "center"}}>
                <Card/>
              </Link>
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
      </div>
    </section>
  )
}
