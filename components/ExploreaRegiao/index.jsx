import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import styles from '@/styles/components/ExploreaRegiao/ExploreaRegiao.module.css'

//ItemsNext
import Link from 'next/link'


export default function ExploreaRegiao(props){
  return (
    
    <div className={styles.MainBannerLocal}>
        <div className={styles.MainTextlocal}>
            <h2>Explore a <br /> <span>Região:</span></h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className={styles.IframeMapsHere}>
            <iframe src={props.src} frameborder="0"></iframe>
        </div>
    </div>
   
  )
}
