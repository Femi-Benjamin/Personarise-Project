import React from 'react'
import Cardd from '../components/Cardd'
import Cardss from '../components/Cardss'

const ChoseUs = () => {
  return (
    <div className='h-auto bg-white'>
      <div className='md:px-[72px] px-[34px] md:pt-[22px] pt-[12px] pb-[50px]'>
        <div className='border-b border-[#DDE1F0] md:pb-[128px] pb-[48px]'>
          <div>
            <h1 className='font-mulish font-bold md:text-[48px] text-[32px] md:leading-[60px] leading-[40px] lg:flex md:text-center text-center items-center md:pb-[32px] pb-[24px]'>Why choose Us</h1>
          </div>
          <div className='flex flex-wrap lg:justify-between md:justify-center'>
            <Cardd />
            <Cardss />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChoseUs