import React from 'react'
import Card1 from '../components/Card1'
import Card2 from '../components/Card2'

const Succes = () => {
  return (
    <div className='h-auto bg-white'>
      <div className='md:px-[72px] px-[34px] md:pt-[22px] pt-[12px] pb-[100px] font-mulish'>
        <div className='border-b border-[#DDE1F0] md:pb-[128px] pb-[48px]'>
          <div>
            <h1 className='font-bold md:text-[48px] text-[32px] md:leading-[60px] leading-[40px] md:flex text-center items-center md:pb-[32px] pb-[24px]'>Success Stories</h1>
            <p className='font-semibold md:text-[24px] text-[16.6875px] md:leading-[30px] leading-[20px] md:pb-[21px] md:text-left text-center md:pb-[35.98px] pb-[32px]'>Hear from some of our satisfied interns and employer who have found success with our platform.</p>
          </div>
          <div className='grid md:grid-cols-3 gap-[19px]'>
            <Card1 />
            <Card2 />
            <Card1 />
            <Card2 />
            <Card1 />
            <Card2 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Succes