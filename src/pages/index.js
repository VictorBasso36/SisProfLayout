import Head from 'next/head'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import styles from '@/styles/Home.module.css'

//Components
import NavBar from '../../components/Navbar'
import CallToAction from '../../components/CallToAction'
import Card from '../../components/Card'
import MaisVisitados from '../../components/MaisVisitados'
import Banner from '../../components/Banner'
import ParaComprar from '../../components/ParaComprar'
import ParaAlugar from '../../components/ParaAlugar'
import Footer from '../../components/Footer'

const poppins = Poppins({ subsets: ['latin'],
weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
variable: '--Font',
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Real House - AN ESTATE COMPANY</title>
        <meta name="title" content="Real House - AN ESTATE COMPANY"/>
        <meta name="description" content="Descrição Real House - AN ESTATE COMPANY"/>
        <meta name="keywords" content="Keywords Real House - AN ESTATE COMPANY"/>
        <meta name="robots" content="index, follow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="Portuguese"/>
        <meta name="revisit-after" content="15 days"/>
        <meta name="author" content="SisProf"/>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1, minimum-scale=1"/>
      </Head>

      <main className={styles.main}>

        <div className={styles.MainBanner}>
          <div className={styles.DetailShawn}>

          </div>

          <NavBar/>
          <h1>Aguardando End Points Pequisa</h1>
        </div>

        <CallToAction/>
        <MaisVisitados/>
      </main>
      <Banner/>
      <ParaComprar/>
      <ParaAlugar/>
      <Footer/>
    </>
  )
}
