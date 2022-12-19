import Head from 'next/head'
import Navbar from '../components/Navbar'
import Home from '../components/Home';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Gym December Challenge | MERCI JACOB</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/app/logo.svg" />
      </Head>
      <main className='font-roboto'>
        <Navbar />
        <Home />
        <Footer />
      </main>
    </>
  )
}
