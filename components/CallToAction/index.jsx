import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import styles from '@/styles/components/CallToAction/CallToAction.module.css'

//ItemsNext
import Link from 'next/link'

export default function CallToAction() {
  return (
    <>
        <section className={styles.MainCalToAction}>
            <div className={styles.MainCalToActionContainer}>
                
              <div className={styles.CallToActionCard}>
                  <div className={styles.CardText}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="70"
                      height="55"
                      viewBox="0 0 70 55"
                    >
                      <image
                        width="70"
                        height="55"
                        data-name="Camada 13"
                        xlinkHref="data:img/png;base64,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"
                      ></image>
                    </svg>
                    <div className={styles.TextHere}>
                      <h2>Cadastre <br /> seu Imóvel!</h2>
                      <p>Anuncie conosco!</p>
                    </div>
                  </div>
                  <Link href="/Anunciar">
                    <div className={styles.callButton}>
                      <h2>Cadastrar agora</h2>
                    </div>
                  </Link> 
              </div>
           
              <div className={styles.CallToActionCard}>
                  <div className={styles.CardText}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="48"
                      height="49"
                      viewBox="0 0 48 49"
                    >
                      <image
                        width="48"
                        height="49"
                        data-name="Camada 14"
                        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAxCAYAAACcXioiAAAFD0lEQVRogc2ae4xdUxSHv462CG09Glom4xFGNMS7TYqqGKloi0ZCg0QQjz+QFn9UxqCIVJogiMSjgkaTxjtRFDUxbRkzUR2CeL9qUC0mVa1pq7Jyfpdj733OPefcc6fzJTfTu/Y+5661915r77V2h7RMPo46sy9wNHAAcDAwSj/XB3wFfAusAn4posZQT1IOewEzgVOAycA+Vd7aC3QAbwDPyLhMlD0DNsqzgEuBkV5rNn4DFgB3Az9We6LBkxRjOHAN8KkMKKq8sSdwA/AxcDWwk9ejZANs1FcA9wE7e63F2QO4H3gTaEx6S60+MAF4UY6aRj/wDfAD8AewXbPUqAEYlvLsJOAd4AzgozINGAe0A7t6LRGm5DJgoZyz1+sBQ4AxwDTgIuCkhFXRqEh1JPBZvCHUOQsWDt9OUf5V4ChgCvBkgvLGdjnqI4pYExWNQpifLdWM/UuRGdgdeCIWz+NskhM/CvzttDVrORykZ7cBv8rxbZ2vBd4FWoDLgQc0Q3EOBJ4GxtdiwG2aapcNivmrYnIbtauASzQjrkIVNmnkZwOfAA/q7wuBiHYCMA+YQ4F94AjgQ08KvwPTFY0qTFEsH+f1TqZP0afCycBrwC7OE5uB482p8/rAXZ4k4gpH+RvlB3mUR0srrtNy4DKvV2TQ9bZH5FlCx8rRXBZqXaJN5/bK9DqYT3TK+X/S8m3Smm9W14cCvrMIOBO40JHb9+vyGDAD2M2R9Wm0K5ztfDe2yECbvQ+8t0Z+MUnGv+W1RsxXqI0HDvOvmXl84EuFzzgW/q5UzB8lX4izFTgfeM57W35e12zF6c3qA8MCyhuLpTwB/zDlzypJeeNOTwL7ZTVguieJWKa/tlNOddrMoFe8J4rTHnoyqwGhuN/jSf5jI3CTJ62dlUUNONSTRBGlwhopbAe1dcA5Xu9y8PagrFEolFF97ny348WzCoN/er3LwTtT1XIa7fck0QzUE+83sy6htZ4ExnqS+rN3UQO+8CRRpWGgOayoASs8SbR7DjQTixqwxJNEx4pmT1o/bPmMLmrAZhWgXGZ4kvrRGnpznuP0Ik8SnXNGeNLysVLLeYG3PpbHgOeVOcU5RuedenMBsH/gN+blMaDb2X0rLEjIj8vCqhb3BN5lecV3eTOy2Z4kKmYtDeSuZTBcx2i3brRNefNfeQ3oUYLiMiHBR2rBBuQl5eEu7wFPUaAu1BoYjQpTVR4Z47XkZ6xG/vSEJ8+t/COPAa3Kd9M4VbWdUMTIysUqzYwP9N+iCt6avAaY8nek1HXiNClT61A9KKl6F2ekqg9WA308ZRbbKkunQrWcuEGFrDnVytwprFfmZqP6vVPcbVK1o8WpB7lY/7n6/I9qBrTJgB1Jv+4eQuXKxCVko31LTuU3eJLasFFfrXT24ZDyaQZYbedWT5pMp466Vrt5P1apKMrPwLUKz91p7wgZkCXaxLG1faLK5Eu0pqfp4mOj1zsZG+Eu1ZkOUXXay8Bc3JRyrtZ9VlbqLORO78v6jNYo2jn+cN3kjNDAWd68Xjc3HQq/X+edvbgBN+uTlR5tXmlXous0K6F8ohQaFNtnyWmz0qVRTVN+QGjQjcn8BH8I0aWRr1fpJBdDFSqzlle65bBbvZYdREOg7p5Ep0Z+0ChPjpFfre0+T1gcEGwG7q3yQ8t1yhx0yiMD2rR7hmjX9Y57cTFoMAPsdGiJg11I292VKWuRxv6jxWkDUO8sDvAPkrT88YhRemoAAAAASUVORK5CYII="
                      ></image>
                    </svg>
                    <div className={styles.TextHere}>
                      <h2>Faça uma <br /> Busca Avançada!</h2>
                      <p>Encontre o imóvel dos sonhos!</p>
                    </div>
                  </div>
                  <Link href="/Resultado">
                    <div className={styles.callButton}>
                      <h2>Buscar agora</h2>
                    </div>
                  </Link> 
              </div>

              <div className={styles.CallToActionCard}>
                  <div className={styles.CardText}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="49"
                      height="49"
                      viewBox="0 0 49 49"
                    >
                      <image
                        width="49"
                        height="49"
                        data-name="Camada 15"
                        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAYAAABznEEcAAACzklEQVRoge2aW4hNURjHf3NmKB7QlCK3yJ28yIOikEiJQjIZJbeHyYMHl1IeKF68eHMpjRe3Qh5ckidSSi4PbrmGhHKNMm5j9NV/c5w12XvtmbP3OuP86jRrvr1mz/ffa61vf2t9p2bmtImIbsBqYAEwXL+HyBfgBtAMnAV+1snJeuAkMDVQx0sZBiwE9gOrIhGHJOAzsAO4Cvxw/jQMugNzgSZgJfDcREwCZss9E3I9UOeLsWn0ENgJNBaABl08WiECIvYA74HBJmKQjHedbmHTAny1AGQiCnK1rcJE/KZQyc5HFBxLBVLn4fJIYCzQ6lyJ5ybwpFyPx0fEPceSnCvAdL2HOh0fEceBMSlH4iLw3bF2Ej4iFjmWQOgSC/u/i05p+neUREmoj1O3gCEpF3ZabM+wPu5/+ogYlcNIWF5X41hL8HGqHzA045G4n2RK+Yh4q09wVENsKPhMp+XAhIz33qeUsvwTHxHNjqX8jAYux+VdPiIaddMso9P5JImjj4iDjiUQqtEpFKoiQqHLiIjNEkPHRHySj30q0P9aJOKCDItz2C90hMlAL+BNQemEVV8GAKeB/hUgwMpbB4CewLXoyVvR4gwwC3gK3AG+6Zq99i8Bm5xb/U1vYLdKZeXEpv0I3f8DsKK4ZjcF2KaTulJspHo41j/UKC1pcK6UB8vfjgEbgWfFa8Ce9gypHChbXxVfamNc2VIkYCnwsozh27YCj6zMFRnaW8gP9EH7amIyVzsZ3Kr2WtX/MiXuacW9Q+wEZK/aFiD2OT0yoL2RSIpNsXMqH98G1uRVcU07b61Qf0KHae8UDHIrGacVsQGYp+LfEuC10yND0oiYA2xXe7O2kLniK2I8cFhtW8i7nB45kDQ6tWkdHNGb2cpX65zegYqIaNFCHqf2fOCj0ysn4kS80M965Vet+h7IK6dnwCKMZcBjnVDbt1osPQkH4Be8HHd/JZCl7AAAAABJRU5ErkJggg=="
                      ></image>
                    </svg>
                    <div className={styles.TextHere}>
                      <h2>Converse com um <br /> Especialista!</h2>
                      <p>Fale com um corretor!</p>
                    </div>
                  </div>
                  <Link href="/Contato">
                    <div className={styles.callButton}>
                      <h2>Contato</h2>
                    </div>
                  </Link> 
              </div>
               
          
            </div>
        </section>
    </>
  )
}
