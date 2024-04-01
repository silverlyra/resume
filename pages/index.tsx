import Head from "next/head"
import {GitHub, List, Mail} from "react-feather"

import styles from "../styles/resume.module.css"

export default function Home() {
  return (
    <main className={styles.content}>
      <Head>
        <title>Lyra Naeseth &middot; software engineer</title>
        <Icons />
      </Head>

      <Essentials />
    </main>
  )
}

const Essentials = () => (
  <header className={styles.header}>
    <h1 className={styles.name}>Lyra Naeseth</h1>
    <div className={styles.contact}>
      <a href="mailto:lyra+contact@omg.lol">
        <Mail size="1rem" /> lyra@omg.lol
      </a>
      <a href="https://github.com/silverlyra">
        <GitHub size="1rem" /> silverlyra
      </a>
      <a href="/resume.pdf">
        <List size="1rem" /> resume
      </a>
    </div>
  </header>
)

const Icons = () => (
  <>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/lyra.webmanifest" />
  </>
)
