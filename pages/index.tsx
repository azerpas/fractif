import Head from 'next/head'
import Image from 'next/image'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Pricing from './components/pricing'

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
    <Hero></Hero>
    <Pricing></Pricing>
    </>
  )
}
