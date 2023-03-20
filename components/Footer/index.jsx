import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import styles from '@/styles/components/Footer/Footer.module.css'

//ItemsNext
import Link from 'next/link'

export default function Footer() {
  return (
    <>
        <footer className={styles.MainFooter}>
            <div className={styles.MainFooterContainer}>
                <div className={styles.FooterContact}>
                    <div className={styles.ContactArea}>
                        <p className={styles.ContactTitle}>Unidade Moema</p>
                        <br />
                        <p>Vendas: <Link href="tel:+551199999999">(11) - 9.999-9999</Link></p>
                        <p>Locação: <Link href="tel:+551199999999">(11) - 9.999-9999</Link></p>
                        <br />
                        <Link href="mailto:moema@unidademoema.com.br">
                            <p className={styles.MailTo}>moema@unidademoema.com.br</p>
                        </Link>
                        <Link href="https://www.google.com.br/maps" target="_blank">
                            <p className={styles.MailTo}>Rua Moema,123.</p>
                        </Link>   
                    </div>
                
                    <div className={styles.ContactArea}>
                        <p className={styles.ContactTitle}>Unidade Moema</p>
                        <br />
                        <p>Vendas: <Link href="tel:+551199999999">(11) - 9.999-9999</Link></p>
                        <p>Locação: <Link href="tel:+551199999999">(11) - 9.999-9999</Link></p>
                        <br />
                        <Link href="mailto:moema@unidademoema.com.br">
                            <p className={styles.MailTo}>moema@unidademoema.com.br</p>
                        </Link>
                        <Link href="https://www.google.com.br/maps" target="_blank">
                            <p className={styles.MailTo}>Rua Moema,123.</p>
                        </Link>   
                    </div>
                </div>
                <div className={styles.FooterContactForm}>
                    <form action="">
                        <div className={styles.TitleForm}>
                            <h6>Contato:</h6>
                        </div>
                        <div className={styles.FormInputs}>
                            <input type="text" placeholder="Seu nome completo" />
                            <input type="email" placeholder="Seu melhor E-mail" />
                            <input type="tel" placeholder="Seu telefone" />
                            <textarea name="" id="" cols="30" rows="10" placeholder='Sua mensagem'></textarea>
                            <div className={styles.submitedArea}>
                                <button type='submit'><p>Enviar</p></button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </footer>
        <div className={styles.copyright}>
          <Link href="https://www.sistemasprofissionais.com.br/author/sisprof/" target="_blank"><p>Powered by</p>     
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="68"
                height="69"
                viewBox="0 0 68 69"
                >
                <image
                    width="68"
                    height="69"
                    data-name="Camada 28"
                    xlinkHref="data:img/png;base64,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"
                ></image>
                </svg>
            </Link>  
        </div>
    </>
  )
}
