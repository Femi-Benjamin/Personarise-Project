import React from 'react'
import styled from 'styled-components'
import images from '../constants/images'

const Courses = () => {
  return (
    <div>
      <Wrap>
        <div className="items flex justify-center lg:gap-[113.07px] gap-[26.04px] items-center">
          <img src={images.invisionLogo} alt="brand logo" />
          <img src={images.Vector1} alt="brand logo" />
          <img src={images.githubLogo} alt="brand logo" />
          <img src={images.Compass1} alt="brand logo" />
          <img src={images.courseralogo} alt="brand logo" />
        </div>
      </Wrap>
    </div>
  )
}

export default Courses

const Wrap = styled.div`
  padding: 2.5rem;
  background-color: #DDE1F0;
  .items {
    max-width: auto;
    margin: auto;
    display: flex;
    flex-wrap: wrap;

    img {
      margin: 0.6rem;
    }
  }
`
