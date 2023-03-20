import Head from 'next/head'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import styles from '@/styles/Detalhes.module.css'

//Components
import NavBar from '../../../components/Navbar'
import CallToAction from '../../../components/CallToAction'
import MainDetalhesImovel from '../../../components/MainDetalhesImovel'
import AgendarVisita from '../../../components/AgendarVisita'
import ExploreaRegiao from '../../../components/ExploreaRegiao'
import ImoveisSemelhantes from '../../../components/ImoveisSemelhantes'
import Footer from '../../../components/Footer'


export default function Detalhes() {
  return (
    <>
      <Head>
        <title> NomeDoPredio - Real House - AN ESTATE COMPANY</title>
        <meta name="title" content="Cliente Name"/>
        <meta name="description" content="Descrição Projeto"/>
        <meta name="keywords" content="Keywords Cliente"/>
        <meta name="robots" content="index, follow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="Portuguese"/>
        <meta name="revisit-after" content="15 days"/>
        <meta name="viewport" content="width=device-width,initial-scale=1, minimum-scale=1"/>
        <meta name="author" content="sisprof"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
        <header className={styles.DetalhesHeader}>
          <MainDetalhesImovel/>
        </header>
        <main className={styles.main}>
          <div className={styles.mainContainer}>
              <div className={styles.DescDetails}>
                  <div className={styles.DescricaoHere}>
                    <div className={styles.TextDescricao}>
                        <h2>DESCRIÇÃO:</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                    </div>

                    <div className={styles.TextDescricao}>
                        <h2>DESTALHES DO IMÓVEL:</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                    </div>  
                 
                  </div>
                  <div className={styles.AgendarVisita}>
                    <AgendarVisita title="Agende uma visita:"/>
                  </div>
              </div>
          </div>
        </main>
        <CallToAction/>
        <div className={styles.mainContainer} style={{margin: '0 auto', padding: '60px 0px'}}>
          <ExploreaRegiao src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.075426745228!2d-46.653426584398375!3d-23.5657343676404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1679170536518!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
        </div>
        <ImoveisSemelhantes/>
      <Footer/>
    </>
  )
}
