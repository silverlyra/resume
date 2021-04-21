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
  <header>
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
          <div>Principal engineer • May 2019 – March 2021</div>
          <div>Staff engineer • ??? 2018 – May 2019</div>
          <div>Senior engineer • March 2017 – ??? 2018</div>
        </div>
        <ul className={styles.accomplishments}>
          <li>
            Led the core infrastructure team in building a new Kubernetes- and
            Istio-based production platform, and successfully migrating
            production services and traffic to it
          </li>
          <li>
            Productionized Medium’s new React + GraphQL frontend architecture;
            wrote the initial TypeScript GraphQL server and backend API
            integration
          </li>
          <li>
            Designed, implemented, and documented a framework and scaffolding
            for Go microservices, enabling engineers to focus on their task at
            hand
          </li>
          <li>
            Rewrote the inner layer of Medium’s node.js monolith, saving
            terabytes of production RAM and eliminating chronic tail latency
            issues
          </li>
          <li>
            Led the delivery of subdomains for profiles, including integration
            with Cloudflare Workers
          </li>
          <li>
            Developed a TypeScript library for creating maintainable Grafana
            dashboards with reusable components
          </li>
          <li>
            Worked to guide and nurture the company culture, in writing and in
            deed
          </li>
        </ul>
      </li>
      <li>
        <h3>Trex Labs</h3>
        <div className={styles.role}>Co-founder • March 2015 – March 2016</div>
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
          Software engineer • September 2010 – June 2014
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
          <li>
            Designed an authentication framework for secure one-click sign-on
          </li>
          <li>Designed and implemented the site’s core HTTP routing layer</li>
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
