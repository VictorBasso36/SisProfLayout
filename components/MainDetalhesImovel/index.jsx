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
    width="32"
    height="18"
    viewBox="0 0 32 18"
    >
    <image
      width="32"
      height="18"
      data-name="Camada 8 copiar 7"
      xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAASCAYAAAA6yNxSAAACs0lEQVRIiZ3Ve6jfcxgH8NdhNNssLcLYijWZlVu2cBhF1DSzGtlE8Y+ypCQplBKRUm475BajNX/Ypi3M/Z4QSkoIzSG51GbH5cimx96/9d3v+zvndPau7/XzPM/ned7P5dM3uHYfY+Ak3IqzMWEU0V/wGG7GcGt1BOzV+/cu3IUPcBRW4HjMwcVx6OhcC/AkrsffOL1laQSM5sCjuA6LMQsf4hzMxRq8gpOxLA5W5H14Dm+iv2WxB0ai9DJcgflhYBDTMYTJue7A1aH+ADyCu+PwOrydAHe0rDfQi4GD8ARuyuZl4GccgkPzvX/kPsqzCmkJrsUALkgq3mlZ70IvBj7GZtyG1/F5cl/YNzT3xfntDb2K+sAwshqHx/GrsLK1S9B0YApW4bBQXCk4A19gLfbLBoU/8Dvm4YWGjR/zfCNOVlE+kLQUcz/gmaZOx4H+5KxwUTYoh54NxXOz9heewlbcFwZODTOFI7Aee+PgdNFsnJn1kr08qatO+bPmwPQU2SYsxL8tnnqjUjAxzo4Hp+CtsDGzjGzANpw7js1lOFVXLGqtjI73MAkz8FCl4IRU73hRud2Iz/ZAdzj6Kzpt+FWXQBXisS213VEUvpt6GAtl68gumZfq1nHgt8bCw/gen6bS549hfDTMSn2Vra/Tqh1UAP93QdHxOF7ENCzH0kT3NN7H7ZjaUK7WvD9nQk3BB3Fpl7PbMgMGU3jFwGt4Hl8m9aoL5mXyzUz/n5dZfkvOgqEUzVDD+Ks4H/dkRF9YBYVLGjKT86x5cGNmyXA2ryn5awU5IeP2mAjvSK8WG9/l36REMtCD6msa71fm6uAsvJz3SumWxjyY2BHqHsU35JD5Kafdt/gnKRovSr/yXFEXy6dliBVTu9DtwJ2J+N58f4PjMgH3BCcm559EuVgsNncC/wEcYZ1C6yNclQAAAABJRU5ErkJggg=="
    ></image>
  </svg>

const quartosSVG =
  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="23"
  height="19"
  viewBox="0 0 23 19"
  >
    <image
      width="23"
      height="19"
      data-name="Camada 11 copiar 3"
      xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAATCAYAAAB7u5a2AAABoUlEQVQ4ja3Vy6tPURQH8M/v1/HMxQAZKEpKmZl6RXQLE0P+ACR1jc1kwlQZMPWYmlOYSrhlpORRHnkMrishv+tqXWvX7vxu6vqdb+3W2Wvt891rfc9e+/Te3lq0E9ewGb91g5c41WAdNuE6XnTAvSH51gf5VDqPDi0bDZ+DfHlSHMKTfP6BL5it6BdjJb7iZ+XvpX9ZzrfibviCvJ/OZ3j/j1yD8NOQ928CU5UCJaF+v5qsSbsUt9PfHjfm8cW4j7F8f23ZpKkyKCflEg7gKr5X8R04hqdZdsESnMz18d1mSqBJzVQl78YbnGiVH2t/YT8+tmIHsSufS6zXVLJswcb8MCsw3iLYlvY4HrZiY7nx3rRzskQTRSZ3dI8jTaXRc5zDdCVDjahw0JKyYJA2Kj6bVc40eZ4D2/MMj4qbmci3ID+cZBejqzogX5V2PDSfHQp3hKLrFVzILhuMQB18q3EGE4X8A14NLf0/RILvVPfKZNrpeVp7ISMuvMDjUkZgAuezGS63bsOF4HQe6deF/BH2JMM+3BtBkvijPZj7qzH5B9hmchGa79AMAAAAAElFTkSuQmCC"
    ></image>
  </svg>

const banheirosSVG =
  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="19"
  height="19"
  viewBox="0 0 19 19"
  >
  <image
    width="19"
    height="19"
    data-name="Camada 10 copiar 3"
    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAABgklEQVQ4jZ3UT4iOURTH8c87Myz8y4osLFjOkoVmYYediOyUsrOZNBtSdsxiZGqKsqMoK42y86eQslCKqaGUUBNmN8UMYl6dOk9unud95+FXt+d2n3O//TrnntOZm14lNYopfMdZbMMcLuCHFhrKkBFMJmwNJvAeW7ETh9FdCTeQ32HM4yQW8RSn0MHjNiCFs4B+y/0ufMIlHMPrdLtYu93DWakbOIhHmMGeTEFrZ6Uu4wPu4yJe4GUtqkFNzkJ3sJQuv+JdLaJBlbNOAV5fnD3DcwwW502KAn0ZyrJHTtb2qNpygju1P3/0C1cCdjXzcxOb8vK/aiPOBewBdmA7NvRwt5LeRrcE7Aje5HrVpyhN6mb8aewN2M98kNdxu+FCGwVsoXIReVr9n6BqUnQr2Cz218LaaV+24scKFhU9irHC4UCfVT2T3ZmeW1GAcp6dwXl8xuYWnmIYRFxMmIAul705nsPwGh7iXp88bsFx3MWB6m3+3ejrMI1DLZw9wYlsNfAbA0NSsYTmc4AAAAAASUVORK5CYII="
  ></image>
  </svg>

const metragemSVG = 
  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="28"
  height="19"
  viewBox="0 0 28 19"
  >
    <image
      width="28"
      height="19"
      data-name="Camada 9 copiar 3"
      xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAATCAYAAACDW21BAAACYUlEQVRIia3VbcjOZxgG8B/P7aVNXkJaDflkk5eIh0hqE1qaLbZM3kORDyskSfEF8VGifJB8EEKaxZqQlVJYa4S0svJO3pqUGevK8ay7+156noej/p3X/77/13WcL8d5Xm1uHmqnCp9jEUbhMS7jOe5hbdbvhLbZ3BHH83yLHugS4g/QCb9jxPsi3ItGzMjhH6Jfoirkp/A9Tue/VqOCcRiEj/E0djX+xA4cwRUMxHLsxxfvEuFGLAzZJ4nmIyzFYjzAbGzCVnyKXnUntYCw1OXXvM/FSszDnmSg4A56Z/0b+tad1ALChtRJIntZ9f8/sSULT7LuV/V9qwgL5scWskPYgAGp7zH0wd8hG4xJdSe1kHAyRqeOC1On3mmNE5gW0exOb87EgrrTmoGmGu3Dz7iRCL+q2Ts3girfXMJIbMYYrMe15hKWSfMas9IGB3E7InmRFPdM9NMzID6Lcg8n3WXfw/z2F7ribjJ0Hd3xOv37simlZfMvie5LDMFJDMW6NHzpx12ZPHuT2mX4KVHfQn9cwFQcwJw48SLZaazURLwodkk2XMW5iKcJr1L7+9iGKfgjEdzElmhge2p/FO3j7JRK1FdLfCD2SF0R3mxuqHo/XLU+GzstdnxG4qNSvvIUT89H6s3F2PRrq1AI12R21kb5f5gXgcyJxy1G21xJlcj8bfg6dSmt8CwCa46TRaH/oWnDN/gRZ9LcxYnSGp0xLMN7OCZELN9FneWO3Ikf0k7VY7GgjMbSSh1y7VVqb/wVmBjpFykXh0rqLmJV0lmNQlx6uFu+Lwquja7M3UL8GI3/ApdGjN0+aIiQAAAAAElFTkSuQmCC"
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
                      <p>REF:12345</p>
                      <h1>Casa á venda - Moema, São Paulo - SP</h1>
                  </div>  
                  <div className={styles.ItensPlanta}>

                  </div>
                </div>
            </div>
        </div>    
    </>

  )
}
