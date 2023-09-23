import Image from 'next/image'
import Discover from './discover/page'

export default function Home() {
  return (
    <main className='bg-white min-h-screen'>
      <Discover />
    </main>
  )
}
