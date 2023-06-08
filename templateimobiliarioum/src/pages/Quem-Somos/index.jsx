import Head from 'next/head'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import styles from '@/styles/QuemSomos.module.css'

//Components
import NavBar from '../../../components/Navbar'
import BannerQuemSomos from '../../../components/BannerQuemSomos'
import CallToAction from '../../../components/CallToAction'
import AgendarVisita from '../../../components/AgendarVisita'


import Footer from '../../../components/Footer'

export default function QuemSomos() {
  return (
    <>
      <Head>
        <title>Quem Somos - Real House - AN ESTATE COMPANY</title>
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
        <main className={styles.main}>
            <div className={styles.mainContainer}>
                <BannerQuemSomos/>
            </div>
            <CallToAction/>
            <div className={styles.mainContainer}>
                <div className={styles.QuemSomosContainer}>
                    <div className={styles.QuemSomosDiv}>
                        <h2>MISSÃO, VISÃO E VALORES:</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                          <br /><br />
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                          <br /><br />
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className={styles.FormDiv}>
                        <AgendarVisita title="Venha tomar um café:"/>
                    </div>
                </div>
      
                
            </div>
        </main>
      <Footer/>
    </>
  )
}
