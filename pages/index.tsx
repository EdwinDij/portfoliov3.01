import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from './About/About'
import Exp from './About/Exp'
import Contact from './Contact/Contact'
import Navbar from './Navbar/Navbar'
import Projets from './Projects/Projets'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="Portfolio Dijeont Edwin" content="Portfolio developpeur web front-end" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Navbar />
      <About />
      <Exp />
      <Projets />
      <Contact />
    </div>
  )
}

export default Home
