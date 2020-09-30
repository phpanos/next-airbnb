import Head from 'next/head'
import Logo from '../components/images/Logo'

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
          <div className="p-6 flex justify-between">
            <Logo/>
            <nav>
              <ul>
                <li><a href="" className="text-white">Bli värd</a></li>
              </ul>
            </nav>
          </div>
          <nav className="flex justify-center">
            <ul className="flex">
              <li><a href="" className="text-white p-4">Boenden</a></li>
              <li><a href="" className="text-white p-4">Upplevelser</a></li>
              <li><a href="" className="text-white p-4">Upplevelser över webben</a></li>
            </ul>
          </nav>
        </div>
      </main>
    </div>
  )
}
