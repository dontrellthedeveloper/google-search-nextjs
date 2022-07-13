import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar';
import {ViewGridIcon} from "@heroicons/react/solid";

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
            <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-grey-100 cursor-pointer'/>

          {/* Avatar */}
            <Avatar url='https://coaching.papareact.com/ai9'/>
          </div>
        </header>
        {/*  Body  */}

        {/*  Footer  */}
    </div>
  )
}

export default Home
