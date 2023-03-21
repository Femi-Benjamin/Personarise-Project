import React from 'react'
import styled from 'styled-components'
import images from '../constants/images'

const Brands = () => {
  return (
    <Wrapper>
      <div className="items">
        <img src={images.aave} alt="brand logo" />
        <img src={images.compound} alt="brand logo" />
        <img src={images.paxos} alt="brand logo" />
        <img src={images.truefi} alt="brand logo" />
        <img src={images.synthetix} alt="brand logo" />
        <img src={images.nexus} alt="brand logo" />
        <img src={images.ens} alt="brand logo" />
      </div>
    </Wrapper>
  )
}

export default Brands

const Wrapper = styled.div`
  padding: 2.5rem;
  margin: 5em 0;
  .items {
    max-width: 1140px;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    img {
      margin: 0.6rem;
    }
  }
`
