import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tokino Vino</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.bgWrapper}>
        <Image src="/images/ばってん星川 完成品 色収差ver.png" alt="background" height={4093} width={2894} />
      </div>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Tokino <span className={styles.titleColor}>Vino</span>
        </h1>

        <p className={styles.description}>
          イラスト制作
        </p>

        <div className={styles.grid}>

          <a href="" className={styles.card}>
            <h2>Works &rarr;</h2>
            <p>作品一覧</p>
            <p>二次創作など</p>
            <p>comming soon</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h2>Contact &rarr;</h2>
            <p>Twitter DM、Emailなど</p>
            <p>comming soon</p>
          </a>

        </div>

        <h2 className={styles.titleH2}>
          SOCIAL
        </h2>

        <div className={styles.grid}>
          <a href="https://twitter.com/VinoVolare" className={styles.socialLogo}>
            <Image src="/images/Twitter.svg" alt="Twitter Logo" width={100} height={100} objectFit="contain" />
          </a>

          <a href="https://www.youtube.com/channel/UCP-bXu2xtY2GqDdAKk_ys4w" 
          className={styles.socialLogo}>
            <Image src="/images/youtube_social_icon_red.png" alt="YouTube Logo" width={100} height={100} objectFit="contain" />
          </a>

          <a href="https://www.twitch.tv/tokino_ch" className={styles.socialLogo}>
            <Image src="/images/TwitchGlitchPurple.svg" alt="Twitch Logo" width={100} height={100} objectFit="contain" />
          </a>

          <a href="https://www.pixiv.net/users/24802125" className={styles.socialLogo}>
            <Image src="/images/logo_icon_r.png" alt="Pixiv Logo" width={100} height={100} objectFit="contain" />
          </a>


        </div>
        <h2 className={styles.titleH2}>
          SUB ACCOUNT
        </h2>

        <div className={styles.grid}>
          <a href="https://twitter.com/___Tokino" className={styles.socialLogo}>
            <Image src="/images/Twitter.svg" alt="Twitter Logo" width={100} height={100} objectFit="contain" />
          </a>

          <a href="https://www.youtube.com/channel/UC0k1HQ4wgv6HliuxJ8tsQAw" 
          className={styles.socialLogo}>
            <Image src="/images/youtube_social_icon_red.png" alt="YouTube Logo" width={100} height={100} objectFit="contain" />
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
