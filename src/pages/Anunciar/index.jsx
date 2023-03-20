import Head from 'next/head'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import styles from '@/styles/Anunciar.module.css'

//Components
import NavBar from '../../../components/Navbar'
import Footer from '../../../components/Footer'



export default function Anunciar() {
  return (
    <>
      <Head>
        <title>Anunciar - Real House - AN ESTATE COMPANY</title>
        <meta name="title" content="Cliente Name"/>
        <meta name="description" content="Descrição Projeto"/>
        <meta name="keywords" content="Keywords Cliente"/>
        <meta name="robots" content="index, follow"/>
        <meta name="viewport" content="width=device-width,initial-scale=1, minimum-scale=1"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="Portuguese"/>
        <meta name="revisit-after" content="15 days"/>
        <meta name="author" content="sisprof"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
        <main className={styles.main}>
          
            <div className={styles.SwiperCarrouselAnunciar}>
              <h1>Aguardando End Points API</h1>
            </div>
       
        </main>
      <Footer/>
    </>
  )
}
