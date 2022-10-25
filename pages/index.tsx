import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from './About/About'
import Navbar from './Navbar/Navbar'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="Portfolio Dijeont Edwin" content="Portfolio developpeur web front-end" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <About />
    </div>
  )
}

export default Home
