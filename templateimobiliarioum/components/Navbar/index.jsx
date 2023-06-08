import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import styles from '@/styles/components/Navbar/Navbar.module.css'

import { useState, useEffect } from 'react'

//ItemsNext
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function NavBar() {
  const router = useRouter()

  const [modal, setModal] = useState(false)
  useEffect(() => {
    if (modal) {
      document.documentElement.style.overflow = "hidden";
      window.scrollTo(0, 0)
    } else {
      document.documentElement.style.overflow = "";
      window.scrollTo(0, 0)
    }
  }, [modal]);
  return (
    <>    
        { modal &&
        <div className={styles.ModalNavbar} onClick={() => setModal(!modal)}>
            <div className={styles.ModalNavbarContainer}>
                <ul>
                    <li><Link href="/"><p style={{textDecoration: router.pathname === '/' ? 'underline 1px var(--Main-Color)' : 'unset'}}>Home</p></Link></li>
                    <li><Link href="/Quem-Somos" style={{textDecoration: router.pathname === '/Quem-Somos' ? 'underline 1px var(--Main-Color)' : 'unset'}}><p>Quem Somos</p></Link></li>
                    <li><Link href="/Contato" style={{textDecoration: router.pathname === '/Contato' ? 'underline 1px var(--Main-Color)' : 'unset'}}><p>Contato</p></Link></li>
                    <li><Link href="/Anunciar" style={{textDecoration: router.pathname === '/Anunciar' ? 'underline 1px var(--Main-Color)' : 'unset'}}><p>Anunciar</p></Link></li>
                    <li>
                    <Link title="Área do cliente sisprof" href="https://www.google.com.br/" target="_blank">
                        <div className={styles.ClienteArea}>
                            <p>Área do cliente</p>  
                        </div>

                    </Link>
                    </li>
                </ul>
              
            </div>
        </div>
        }
        <nav className={styles.MainNavbar}>
            <div className={styles.MainContainerNavbar}>
                <Link href="/" title="Home">
                    <div className={styles.MainLogo}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="200"
                            height="114"
                            viewBox="0 0 200 114"
                            >
                            <image
                                width="200"
                                height="114"
                                data-name="Objeto Inteligente de Vetor"
                                xlinkHref="data:img/png;base64,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"
                            ></image>
                        </svg>
                    </div>
                </Link>
                <ul className={styles.MainMenu}>
                    <li>
                        <Link title="Home"  href="/">
                            <p className={styles.MainItem} style={{textDecoration: router.pathname === '/' ? 'underline 1px var(--Main-Color)' : 'unset'}} >Home</p> 
                        </Link>
                    </li>
                    <li>
                        <Link title="Quem Somos" style={{textDecoration: router.pathname === '/Quem-Somos' ? 'underline 1px var(--Main-Color)' : 'unset'}}  href="/Quem-Somos">
                            <p>Quem Somos</p> 
                        </Link>
                    </li>
                    <li>
                        <Link title="Contato" style={{textDecoration: router.pathname === '/Contato' ? 'underline 1px var(--Main-Color)' : 'unset'}}  href="/Contato">
                            <p>Contato</p> 
                        </Link>
                    </li>
                    <li>
                        <Link title="Anunciar" style={{textDecoration: router.pathname === '/Anunciar' ? 'underline 1px var(--Main-Color)' : 'unset'}}  href="/Anunciar">
                            <p>Anunciar</p> 
                        </Link>
                    </li>
                    <li>
                        <Link title="Área do cliente sisprof" href="google.com" target="_blank">
                            <div className={styles.ClienteArea}>
                               <p>Área do cliente</p>  
                            </div>

                        </Link>
                    </li>
                </ul>
                <div className={styles.HambMenu} onClick={() => setModal(!modal)}>
                    <div className={`${styles.HambMenuContainer} ${modal ? styles.HambMenuContainerActive : ''}`}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}
