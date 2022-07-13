import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        {/* Header */}
        <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
        {/* Left */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        {/* Right */}
          <div className='flex space-x-4 items-center'>
            <p className='link'>Gmail</p>
            <p className='link'>Images</p>

          {/* Icon */}

          {/* Avatar */}
          </div>
        </header>
        {/*  Body  */}

        {/*  Footer  */}
    </div>
  )
}

export default Home
