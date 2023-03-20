import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import SwiperCore, { Navigation, Pagination, Autoplay  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import 'swiper/swiper-bundle.css';
import styles from '@/styles/components/MainDetalhesImovel/MainDetalhesImovel.module.css'

//ItemsNext
import Link from 'next/link'

const carSVG =    
  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="41"
  height="23"
  viewBox="0 0 41 23"
  >
  <image
    width="41"
    height="23"
    data-name="Camada 8 copiar 3"
    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAXCAYAAACWEGYrAAADd0lEQVRIicXXWazdUxQG8J/rlqKpoaoUfSg1TzFGBRelQvsgBDFFScQY04OpYmqRGEIIIlKEF4knhKqhMZRUKBGthz6g5iHmNNziyqrv8HdyG/fecxJfcrL3/p89fHvtb6299lrT+vYyDOyOs3EcNh3CsOV4FPfhq+Es1MRQSY7FQzgm7a/xGr7FKPRiAL80xkzCIehJey5mj4Rk7xD6TMFibIzHYsnvh7HGHtngVdgH04dLsuc//q9NvBuCh+JErMKt+BDLcFP6Ho43Yt2f8TYuxDshWlY8As91m2RNODq7X4grQ+DSSGBHXJ6+M2KpOvIvQ+yOyGB6jvtmTMNl3SJ5CfpwHRZgThZ6NQ60SXTZQkuPO2Gb0jtm4ifMx1RcgSUhu0unJCfgNnyCa7FzNFWkDowECus3xvyRcqPGt6eweeovp+xLOb9Tkq0J90tZ5FbggLZ+qwaZ64e2PiuxPdbGk7HsadgSdw2FZLt3l6ZuxHY4D59Fl6W/MXgzTtTC5EZ9dMplIdbEF6mXbi8IuZNwfr7VKfTjPTyTaNA6mX+RvCZHW3gE96T+cTx1TByliSL0RNpPY39sm001MSES+T2OJDG3tL5n9LsOdshFcXv+L2f9O5hfjevxCs7MTfF/oJzxqBhJosKCIlneuDQ6PLgDYjXhLHyOizvc4BZ4HxtiXE9Mq3HljRS74QSc0dDnSFEbPSxjbylLDkR3kzqcWHTV34V5WqikZHwrbCzt0qTdJFh4SSO2/db2Z8W0GxI6vsHdbaGnW6gb6CN8h3nYum3elU2SzZAxKpadnRDVn5j5QeP26AZeT0wel3xgVi6MXRtzrz6ZVpZzUNKxXzOobohTk7BKBvRCgvnyWLqJFxNjx8cid+L5ONK5iYNNrIt9cVH6Srs4LMo6vYm7qysVOh7A0Y1JFoZgHfnExM77cVaus3b8mPZ6ScceT3tKDDAYFofgOUmOj09+MDdtkcGS3uhuRmOS8vYNUp+ajEbDGlvh0zUsvCJWamFOfu0YaEisbpwjU2/lApMjr78WHuT5sCjk9sZb+TYxxOrZsNkaCA4HdUont26UjBsbyw205xSDZUGnRJuliwdxb8NyM7tAsFCJRcXAZ/MkqYSjsqfic2x758HeOGXmyh8fxun5Vt5euiwddQP1RqrMvYxQWizUc6TeT0X8H+BP5kXC/E7C0dsAAAAASUVORK5CYII="
  ></image>
  </svg>

const quartosSVG =
  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="29"
  height="24"
  viewBox="0 0 29 24"
  >
  <image
    width="29"
    height="24"
    data-name="Camada 11 copiar 3"
    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAYCAYAAAAGXva8AAAB7UlEQVRIicXWTYhOcRQG8N87H74nyldSzELYWZB8lGjGQogVk8iCvY/FlCUrJdkpC0WJjRVbCguWSrJSYqGRhXzmY8zo6Fzdrju9b3lvns2/e5/b/znnOadzbmt461q4ibnYrjkcwRkM9aVEKA+iH4sakP2MHVgcOoXoZJ7fG8z0z/19lZev0dOAWCQ1D71l0VaeSxsQLHAVBzWUVVtU7S1jCU5hHSYq3Cucxz5srAQfrr3DBdytu3gq0Wm4nV1dh83Y38apoezYe52KrkzBiPQ4ZpW4aIoRnMRzHMZ4if+JYZzFATyoOjWV6GCeN/C0hp+DY3iMhzX8yxRdmG50JNpTOXun4NXwEyW+lVzZCcUYfIHluIa9mJHTaTztqguqPwV+1PCt7IuCD0cGsAq7yxMpPjyUzyH2Pms5vebSCORjOjWzho/7PmRgwW/I97UT6VzWoi76f8E2XMFsNRNptMtiBW5lF+9UsqewKCJZVloA3UKU4ls21UCIPsqVE/jUUKZlXA/RNVngJ5lxt7OU5YtsV2BBUdO32IU3DQiWEcNm5L9vmcn8VbmE1V2yOWz9gtPZwX+Jxn/M5ZxI3cZF3K+Kxu6MIT0fz7Cnza7tFJFIbKPYVHF/jNffF9/BlhQcw9FcWd3CCazHJnzF2C+UBV1rEnMGsQAAAABJRU5ErkJggg=="
  ></image>
  </svg>

const banheirosSVG =
  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  >
  <image
    width="24"
    height="24"
    data-name="Camada 10 copiar 3"
    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB2UlEQVRIia3WzatNYRQG8N89roGPfJWvkEKYETPEVbrJQFFK0ZWbkX+AKEM3zHykjIRSKJToThQTJnIHIgYGSJlgcMk3rdvatds5t7PPOU/tVu8+56znfda71vOeni19a5VwDgdyeQrXsRWvcFMbKBNcxD68xmeswd/4Tn5+BYP4WYemkXEutuEulmJXvn+J7RhFP2bV1dCbcTomYyTXxzLputz51FT3oS5Bo7L+k3EO3uEW+rA5VS7rlKCodxz2SmzEaTzGwlSxtw5Bb5P3wziJj7iH/VmyR5jfDYJfOFRaD+A2NmCoDkG1RM0Q3TUTb0tl7EhBFffrJC0jFCzApWzTozlc3XjeY2couIPFuIApmJHJO0G0+xLcCILleIbzdW1gHHxPNxgKgsPZ6yNtp2uO4SA4g9VpZANpG53u/mAO5mDRRZ8yXu7SzvtzIEeLOajV2y2gyNdTEHzpMkGU+XeUqyB4kXFHF5LPw4qc+m8FQZjbG5zNm6xdTMqmWVR4WXHI4Zq78RBP0hrCPWe3cD6NbJIf2IRpOIEHKl4UVrwKR7CnTQVPcbz8B6Hqps/zHg5cLV2l4z0TUn1gYthDHvAY/uem69P7Y+jiXmgF17I0YTdB+nXsR/gHBdVquAad7YUAAAAASUVORK5CYII="
  ></image>
  </svg>

const metragemSVG = 
  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="36"
  height="24"
  viewBox="0 0 36 24"
  >
  <image
    width="36"
    height="24"
    data-name="Camada 9 copiar 3"
    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAYCAYAAACSuF9OAAADZElEQVRIibXXeaimYxgG8N/ZhslynEgassyxRBnb2KecNIRRsu8ioiyDKKQshSEmlKUoaoo//GEcJJSyZN8GYw9ZM5YxWQ9jHN1cn95eM+mYb+56e57vfd73ea/nvq/7uu+vZ+bITlq2EY7Hnlgfv6EP/XgX1+CN9kvdsv7GPj24DmdiUuP+L3gZz2ITLMA9OAU/rSpAa+Nh7I6vcR/ey/rWuUZwEU7Hq3gNW+KPVQHo5oA5CXcnTG07L6CPxBQ8hwdxQLcBbYfjMD2hKZuMc7FX7l2LuXgeTyZsu+E77ItHuwWob+qmU27FI7gz9wawEPvjcxwYfj2BT7BNQlUgxjAL93YLUC/2aZ2wsuhHrJW1m7BGY73IPZz5U/Fw16wArYlfGxvOwPWtD4w35sW1ZZkXodftNqCyHTP2BNzRjWd6GplUnDocP+f35tggOtVVQIfFUwJoZgh8MNbDZrgFj+OZhk5dlvGKbgPaNmldoRnEWfgGd+CEpPZ+Ifq8ZOclIfgizMau3QDU0aE5uBjTQuYvkj1C6KYilzAekuvklJn+eO9QPLQygDoeWoyl4cRWOBU7ZL0DpnTqBpyPt3Lvw4SvsvJ1jOJtHJF9OjToj5zI2B9u9mYcyNXT8VDpzeW4He+kqJYSjyWM9dJqCeOGKTWzI4xDqWvDAVQSclcOuDSlaCh7dJ5flsQYyDODSZzJTQ/NzQO/Y5cAXBjuVAivwhb4IdeVATspXnkTj+FsfJVMPSZAL4hn6zDnRPnHEubvE/bi7Xiz2pd9G6JKeVgUT81L1lXl33gF4f8oZaQviv4CvszaaEJ/I+anxZmVb5RsPJDwXt0GJHzQIuecxnxJYz7eEMmO1e89GmI6I2Er2zvefR/H4qjWuz29+cDgCk79XzaQE7atqexPN+YvZixafNZ67i/rTdxH/ieg6SF418pHb1T2xCjyRO1SfBoB7RqgBWH76ATe6087Upm1fUrNGUntlQYkOlJu/wD/6vpbNi3N/nAyZXHIWm3KbVh9At9vt7//pP2S9M3VS7+EV+KxGmutysnOOCidQbWupTElamUlCdWW3J/7xctK749brU3TSkLqUJVQxcV1io/L+xtUJePCpGudtsJQ2VAblLaUBHSyZXl2Wnrzqa1/NSvyUO39d/vC0J+r+so0nBqcTwAAAABJRU5ErkJggg=="
  ></image>
  </svg>


export default function MainDetalhesImovel(props){
  //capturar da api
  const imgs = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','',]
  return (
    <>  
        <div className={styles.SwiperPhotosDetails}>
        <Swiper
            loop={true}
            spaceBetween={0}
            autoplay={{ delay: 6000 }}
            slidesPerView={4}
            styles={{height: '100%'}}
            grabCursor={true}
            pointerEvents={'auto'}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              280: {
                slidesPerView: 'auto',
                spaceBetween: 0,
              }
            }}
          >
            {imgs.map(item => (
            <SwiperSlide className={styles.DetailsSlides} style={{
              //imgapi
              backgroundImage: 'url("https://baldoo.com.br/a.webp")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
          
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.Main}>
            <div className={styles.MainContainer}>
                <div className={styles.MainPrice}>
                    <div className={styles.MainPriceContainer}>
                        <div className={styles.Price}>
                            <p>Venda:</p><p className={styles.priceNumbers}>R$<span>1.000.000</span></p>
                        </div>
                        <div className={styles.Price}>
                            <p>Condomínio:</p><p className={styles.priceNumbers}>R$<span>2.000</span></p>
                        </div>
                        <div className={styles.Price}>
                            <p>IPTU:</p><p className={styles.priceNumbers}>R$<span>99</span></p>
                        </div>
                    </div>
                    <div className={styles.DetailConvertArea}>
                      <div className={styles.NumbersVisita}>
                        <p>Agendar Visita:</p> <p><Link href="tel:+551199999999">(11)9.9999-9999</Link></p>
                      </div>
                      
                      <div className={styles.ButtonConvert}>
                        <p>Fazer proposta</p>
                      </div>
                    </div>
                </div>  
                <div className={styles.MainTitle}>
                  <div className={styles.MainTitleHeader}>
                      <div className={styles.buttonMainTitle}>
                        <p>FOTOS</p>
                      </div>
                      <div className={styles.buttonMainTitle}>
                        <p>VÍDEOS</p>
                      </div>
                  </div>
                  <div className={styles.TitleAndRef}>
                      <p>REF: 12345</p>
                      <h1>Casa á venda - Moema, São Paulo - SP</h1>
                  </div>  
                  <div className={styles.ItensPlanta}>
                      <div className={styles.ContainerItemPlanta}>
                        {carSVG}
                        <p>2</p>
                      </div>
                      <div className={styles.ContainerItemPlanta}>
                        {quartosSVG}
                        <p>2</p>
                      </div>
                      <div className={styles.ContainerItemPlanta}>
                        {banheirosSVG}
                        <p>2</p>
                      </div>
                      <div className={styles.ContainerItemPlanta}>
                        {metragemSVG}
                        <p>100m²</p>
                      </div>
                  </div>
                </div>
            </div>
        </div>    
    </>

  )
}
