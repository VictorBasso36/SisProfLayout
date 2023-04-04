import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import SwiperCore, { Navigation, Pagination, Autoplay  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import 'swiper/swiper-bundle.css';


import styles from '@/styles/components/ParaAlugar/ParaAlugar.module.css'
import Card from '../../components/Card'
//ItemsNext
import Link from 'next/link'

export default function ParaAlugar() {
  //capturar da api
  const cards = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','',]
  return (
    <section className={styles.SectionCards}>
    <div className={styles.SectionCardsContainer}>  
      <div className={styles.HeaderCards}>
        <div className={styles.Title}>
          <h2>Imóveis para<br /><span>Alugar:</span></h2>
        </div>
        <Link href="/Resultado">
          <div>
            <p>Veja Mais</p>
          </div>
        </Link>
      
      </div>
      <div className={styles.CarrouselHere}>
          <Swiper
            loop={true}
            spaceBetween={10}
            autoplay={{ delay: 4000 }}
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
