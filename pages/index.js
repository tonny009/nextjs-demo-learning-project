import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="bg-orange-300 w-full p-10 rounded mx-auto mt-5 ">
        <h1 className="text-4xl font-bold text-center">Hello Next JS</h1>
      </div>
      <div className="text-center mt-20">
        <Link href="/posts">
          {' '}
          <button className="btn btn-active btn-accent w-96 font-bold text-xl">
            See Posts (SSG)
          </button>
        </Link>
      </div>
      <div className="text-center mt-20">
        <Link href="/comments/comments">
          <button className="btn btn-active btn-danger w-96 font-bold text-xl">
            See Comments (SSR)
          </button>
        </Link>
      </div>
    </>
  )
}
