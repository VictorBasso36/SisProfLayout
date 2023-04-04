import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Lazy]);

import styles from '@/styles/components/MaisVisitados/MaisVisitados.module.css'
import stylescard from '../../src/styles/components/Card/Card.module.css'
import Card from '../Card'




export default function MaisVisitados() {
  const [loaded, setLoaded] = useState(false);
  const cards = ['','','','','','','','','','','',''];

  useEffect(() => {
    setLoaded(true);
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
          {loaded && (
            <Swiper
              loop={false}
              spaceBetween={10}
              autoplay={{ delay: 3000 }}
              slidesPerView={4}
              navigation
              grabCursor={true}
              lazy="true"
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
              {cards.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link href="/Detalhes" style={{ width: '100%', maxWidth: '325px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                      <div className={stylescard.MainCard}>
                        <div className={stylescard.CardImage} 
                        style={{ backgroundImage: 'url("/fachada.webp")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                        }}>

                        </div>

                        <div className={stylescard.CardInfo}>
                            <div className={stylescard.CardTitle}>
                              <p>Apartamento </p>
                              <p>Moema - São Paulo</p>
                            </div>
                            <div className={stylescard.ItemsCard}>
                              <div className={stylescard.item}>
                                <img src="/sisprofcardcar.webp" alt="sisprofcardcar" height="50px" width="50px" />
                                <p>2</p>
                              </div>
                              <div className={stylescard.item}>
                                <img src="/sisprofcardquartos.webp" alt="sisprofcardquartos" height="50px" width="50px" />
                                <p>2</p>
                              </div>
                              <div className={stylescard.item}>
                                <img src="/sisprofcardbanheiros.webp" alt="sisprofcardbanheiros" height="50px" width="50px" />
                                <p>2</p>
                              </div>
                              <div className={stylescard.item}>
                                
                                <img src="/sisprofcardtamanho.webp" alt="sisprofcardtamanho" height="50px" width="50px" />
                                <p>100m²</p>
                              </div>

                            </div>
                        </div>
                        <div className={stylescard.PriceCard}>
                            <p>venda: R$ <strong>1.000.000</strong></p>
                        </div>
                      </div>

                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  )
}