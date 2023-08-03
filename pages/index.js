import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <img src="/logo.jpg" alt="ctrl-alt-elite" className={styles.teamLogo} />
        <main>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Hack-Awaya</a>
          </h1>


          <p className={styles.description}>
            This hackathon project utilizes AWS Rekognition, AWS Lambda, and API Gateway to detect and identify humans, debris, and vehicles in a highway video.
            The identified objects are reported back to the user for real-time insights and analysis.
          </p>

          <div className={styles.grid}>
            <Link href="/feed" className={styles.card}>
              <h3>Get Started &rarr;</h3>
              <p>Experiance the power of AI. </p>
            </Link>

            <Link href="/user" className={styles.card}>
              <h3>Upload Image &rarr;</h3>
              <p>Find image attributes.</p>
            </Link>
          </div>
        </main>

      </div>
    </Layout>

  )
}
