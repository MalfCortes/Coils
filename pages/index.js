import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '../src/botao'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>S C & Coils - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className={styles.main}>
      <div className={styles.title}>
        <h1>SC & Coils</h1>
      <div className={styles.description}>
      <h5>Itens Para uma build perfeita</h5>
      </div>  
      </div>
      <div className={styles.imagem}>
        <Link href='/coils'>
          <a><Image
        src="/banner.jpg"
        alt="Coils"
        width={500}
        height={300}
      /></a></Link></div>
      Entrar
      
      </main>  
    </div>
  )
}
