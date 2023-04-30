import React from 'react'
import icons from '../constants/icons'

const Cardss = () => {
  return (
    <div className='md:w-[640px] w-auto md:h-[430px] border border-[#5668B2] rounded-[8px]'>
      <div className='md:px-[47px] px-[26.8px] md:pt-[53px] pt-[30.23px] font-mulish text-[#5668B2]'>
        <h1 className='font-bold md:text-[32px] text-[18.25px] md:leading-[40px] leading-[23px] md:pb-5 pb-[8.56px]'>For Founders</h1>
        <p className='font-normal md:text-[24px] text-[13.6875px] md:leading-[30px] leading-[17px] md:pb-[21px] pb-[11.98px]'>Take full advantage of our platform while sorting for top-notch interns that suits your business.</p>

        <div className='flex gap-[16px] md:pb-5 pb-[13.12px]'>
          <img className='cursor-pointer' src={icons.iconpmgt} alt="" />
          <p className='font-normal md:text-[20px] text-[11.4062px] md:leading-[25px] leading-[14px]'>Real-world experience working on projects that matter.</p>
        </div>

        <div className='flex gap-[16px] md:pb-5 pb-[13.12px]'>
          <img className='cursor-pointer' src={icons.iconpwt} alt="" />
          <p className='font-normal md:text-[20px] text-[11.4062px] md:leading-[25px] leading-[14px]'>Connect with other interns in our online community.</p>
        </div>

        <div className='flex gap-[16px] pb-5'>
          <img className='cursor-pointer' src={icons.iconsroadmap} alt="" />
          <p className='font-normal md:text-[20px] text-[11.4062px] md:leading-[25px] leading-[14px]'>Develop your skills and succeed in your internship with our provides resources.</p>
        </div>
      </div>
    </div>
  )
}

export default Cardss