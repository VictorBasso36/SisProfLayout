import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import styles from '@/styles/components/Banner/Banner.module.css'

//ItemsNext
import Link from 'next/link'

export default function Banner() {
  return (
    <>
        <section className={styles.MainBanner}>
            <div className={styles.MainBannerContainer}>
                <div className={styles.Banner}>
                    <div className={styles.BannerImage} 
                    style={{ backgroundImage: 'url("/a.webp")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    </div>
                    <div className={styles.BannerContentHere}>
                        <h2>Exemplo de <br /><span>Banner:</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare ultrices leo, vitae pellentesque tellus. Pellentesque condimentum, neque vel finibus posuere, nulla ligula maximus est, in sollicitudin dolor sapien non est. Fusce vehicula nibh vitae tempus lobortis.</p>
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}
