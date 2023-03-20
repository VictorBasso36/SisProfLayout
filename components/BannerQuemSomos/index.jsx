import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import styles from '@/styles/components/BannerQuemSomos/BannerQuemSomos.module.css'

//ItemsNext
import Link from 'next/link'

export default function BannerQuemSomos() {
  return (
    <>
        <section className={styles.MainBanner}>

                <div className={styles.ImageBannerQuemSomos} style={{
                    backgroundImage: "url('https://baldoo.com.br/a.webp')",
                    backgroundSize: "cover"
                }}>

                </div>
                <div className={styles.TextBannerQuemSomos}>
                    <h1>Sobre a imobiliária <br /><strong>Real House:</strong></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo mi, suscipit vel tortor in, cursus venenatis ex. Morbi feugiat efficitur mauris, sed maximus est congue bibendum.  <br /><br /> Mauris sit amet sem eget mi pulvinar pharetra. Nam laoreet eget leo vitae faucibus. Fusce feugiat bibendum velit eget sollicitudin. Ut tincidunt dapibus neque vel malesuada. Vestibulum hendrerit, odio sit amet molestie lobortis, magna metus egestas dolor, ac pretium orci leo vel nisi. Nulla accumsan mauris justo, sed lacinia eros accumsan ac. In non nisi id odio pretium porttitor.</p>
                </div>
 
        </section>
    </>
  )
}
