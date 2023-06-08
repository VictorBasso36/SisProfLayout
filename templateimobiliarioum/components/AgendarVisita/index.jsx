import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import styles from '@/styles/components/AgendarVisita/AgendarVisita.module.css'

//ItemsNext
import Link from 'next/link'

export default function AgendarVisita(props) {
  return (
    <>
        <div className={styles.MainVisita}>
            <div className={styles.MainImage} style={{
                backgroundImage: "url('/a.webp')",
                backgroundSize: "cover"
            }}>
            </div>
            <div className={styles.AgendarForm}>
                <h3>{props.title}</h3>
                <form action="">
                    <input type="text" placeholder="Seu nome completo" />
                    <input type="email" placeholder="Seu melhor email" />
                    <input type="tel" placeholder="Seu telefone" />
                    <textarea placeholder="Sua mensagem" name="" id="" cols="30" rows="10"></textarea>
                    <button type='submit'>
                        <p>Enviar</p>
                    </button>
                </form>
            </div>
        </div>
    </>
  )
}
