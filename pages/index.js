import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bubble Club  - Laverie Neuchâtel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Une nouvelle laverie à Neuchâtel" />
        <p className="description">
          Bientôt
        </p>
      </main>

      <Footer />
    </div>
  )
}
