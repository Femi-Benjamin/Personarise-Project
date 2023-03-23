import React from 'react'
import {
  Brands,
  Careers,
  Contact,
  Features,
  Hero,
  Passion,
  Testimonials,
} from '../containers'

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
