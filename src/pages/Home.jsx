import React from 'react'
import { Header } from '../components'
import {
  Brands,
  Careers,
  Contact,
  Features,
  Hero,
  Passion,
  Testimonials,
} from '../containers'
import { Footer } from '../components'

const HomeLayout = () => {
  return (
    <>
      <Hero />
      <Brands />
      <Passion />
      <Features />
      <Careers />
      <Testimonials />
      <Contact />
    </>
  )
}

export default HomeLayout

