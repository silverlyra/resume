import Head from "next/head"
import {GitHub, Mail, Twitter} from "react-feather"

import styles from "../styles/resume.module.css"

export default function Home() {
  return (
    <main className={styles.content}>
      <Head>
        <title>Lyra Torben Naeseth &middot; software engineering résumé</title>
        <Icons />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alice&family=Sarabun:ital,wght@0,100;0,200;0,400;1,200&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Essentials />
      <Experience />
      <Education />
    </main>
  )
}

const Essentials = () => (
  <header className={styles.header}>
    <h1 className={styles.name}>Lyra Torben Naeseth</h1>
    <div className={styles.contact}>
      <a href="mailto:lyra@hey.com">
        <Mail size="1rem" /> lyra@hey.com
      </a>
      <a href="https://github.com/silverlyra">
        <GitHub size="1rem" /> silverlyra
      </a>
      <a href="https://twitter.com/lyrasilverstar">
        <Twitter size="1rem" /> lyrasilverstar
      </a>
    </div>
  </header>
)

const Experience = () => (
  <section className={styles.experience}>
    <h2 className="sr-only">Experience</h2>
    <ul className={styles.jobs}>
      <li>
        <h3>Medium</h3>
        <div className={styles.role}>
          <div>
            <span className={styles.title}>Principal engineer</span> •{" "}
            <span className={styles.dates}>May 2019 – March 2021</span>
          </div>
          <div>
            <span className={styles.title}>Staff engineer</span> •{" "}
            <span className={styles.dates}>November 2018 – May 2019</span>
          </div>
          <div>
            <span className={styles.title}>Senior engineer</span> •{" "}
            <span className={styles.dates}>March 2017 – November 2018</span>
          </div>
        </div>
        <ul className={styles.accomplishments}>
          <li>
            Led the core infrastructure team in building a new Kubernetes- and
            Istio-based production platform, and successfully migrating all
            production traffic and dozens of services
          </li>
          <li>
            Productionized Medium’s new React + GraphQL frontend architecture,
            bridging the DevOps team with the frontend platform team using my
            deep knowledge of both areas
          </li>
          <li>
            Led the final delivery of Medium’s profile redesign, a
            business-critical project with a high-profile launch, coordinating
            across PM’s and product and infrastructure engineering
          </li>
          <li>
            Designed, implemented, and documented a framework for Go
            microservices, improving velocity and maintainability, and helping
            onboard engineers without prior Go experience
          </li>
          <li>
            Rewrote the inner layer of Medium’s node.js monolith, halving its
            production RAM use and eliminating chronic tail latency issues
          </li>
          <li>
            Made production health accessible to engineers by developing a
            library to create, generate, and maintain Grafana dashboards in
            TypeScript
          </li>
          <li>
            Grew and nurtured both the company culture and engineers’ technical
            understanding via numerous internal articles and presentations
          </li>
        </ul>
      </li>
      <li>
        <h3>Trex Labs</h3>
        <div className={styles.role}>
          <span className={styles.title}>Co-founder</span> •{" "}
          <span className={styles.dates}>March 2015 – March 2016</span>
        </div>
        <ul className={styles.accomplishments}>
          <li>
            Explored new UX paradigms for software development, with the goal of
            empowering all computer users to be programmers
          </li>
        </ul>
      </li>
      <li>
        <h3>Thumbtack</h3>
        <div className={styles.role}>
          <span className={styles.title}>Software engineer</span> •{" "}
          <span className={styles.dates}>September 2010 – June 2014</span>
        </div>
        <ul className={styles.accomplishments}>
          <li>
            Designed and implemented an analytics and A/B testing system that
            drove user growth
          </li>
          <li>
            Engineered a structured consumer request system to streamline
            matchmaking
          </li>
          <li>Designed and implemented the site’s core HTTP routing layer</li>
          <li>
            Designed an authentication framework for secure one-click sign-on,
            reducing abandoment
          </li>
        </ul>
      </li>
    </ul>
  </section>
)

const Education = () => (
  <section className={styles.education}>
    <h2 className="sr-only">Education</h2>
    <ul className={styles.jobs}>
      <li>
        <h3>Carleton College</h3>
        <div className={styles.role}>
          B.A. Computer Science, <i>magna cum laude</i> • September 2006 – June
          2010
        </div>
      </li>
    </ul>
  </section>
)

const Icons = () => (
  <>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/lyra.webmanifest" />
  </>
)
