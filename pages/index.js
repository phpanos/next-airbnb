import Head from 'next/head'
import Nav from '../components/nav/Nav'

export default function Home() {
  const imgUrl = '/img/bg.webp'
  const bgStyles = {
    backgroundImage: 'url(' + imgUrl + ')'
  }
  return (
    <div className="w-full h-full">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-full">
        <div className="bg-no-repeat bg-cover bg-center-center bg-left-top bg-gray-400 w-full h-full" style={bgStyles}>
          <Nav/>
        </div>
      </main>
    </div>
  )
}
