import Head from "next/head"
import styles from "../styles/resume.module.css"

export default function Home() {
  return (
    <main className={styles.content}>
      <Head>
        <title>Lyra Torben Naeseth &middot; software engineering résumé</title>
        <Icons />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alice&display=swap"
          rel="stylesheet"
        />
      </Head>

      <h1 className={styles.name}>Lyra Torben Naeseth</h1>
    </main>
  )
}

const Icons = () => (
  <>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/lyra.webmanifest" />
  </>
)
