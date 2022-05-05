import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vino Volare</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.titleColor}>Vino</span> Volare
        </h1>

        <p className={styles.description}>
          イラスト制作
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" style={{ position: 'relative', width: 100, height: 100 }} className={styles.socialLogo}>
            <Image src="/images/Twitter.svg" alt="Twitter Logo" layout="fill" objectFit="contain" />
          </a>

          <a href="https://nextjs.org/docs" style={{ position: 'relative', width: 100, height: 100 }} className={styles.socialLogo}>
            <Image src="/images/youtube_social_icon_red.png" alt="YouTube Logo" layout="fill" objectFit="contain" />
          </a>

          <a href="https://nextjs.org/docs" style={{ position: 'relative', width: 100, height: 100 }} className={styles.socialLogo}>
            <Image src="/images/TwitchGlitchPurple.svg" alt="Twitch Logo" layout="fill" objectFit="contain" />
          </a>

          <a href="https://nextjs.org/docs" style={{ position: 'relative', width: 100, height: 100 }} className={styles.socialLogo}>
            <Image src="/images/logo_icon_r.png" alt="Pixiv Logo" layout="fill" objectFit="contain" />
          </a>


          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Pixiv &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>YouTube &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Twitch &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
