import React from 'react'
import icons from '../constants/icons'

const Cardd = () => {
  return (
    <div className='md:w-[640px] w-auto md:h-[430px] bg-[#5668B2] rounded-[8px] lg:mb-7 md:mb-7 mb-[22.77px]'>
      <div className='md:px-[47px] px-[26.8px] md:pt-[53px] pt-[30.23px] text-[#FFFFFF] font-mulish'>
        <h1 className='font-bold md:text-[32px] text-[18.25px] md:leading-[40px] leading-[23px] md:pb-5 pb-[8.56px]'>For Interns</h1>
        <p className='font-normal md:text-[24px] text-[13.6875px] md:leading-[30px] leading-[17px] md:pb-[21px] pb-[11.98px]'>As an intern, you get to learn alot while you join our plaftorm.</p>

        <div className='flex gap-[16px] md:pb-5 pb-[13.12px]'>
          <img src={icons.iconpmgt} alt="" />
          <p className='font-normal md:text-[20px] text-[11.4062px] md:leading-[25px] leading-[14px]'>Real-world experience working on projects that matter.</p>
        </div>

        <div className='flex gap-[16px] md:pb-5 pb-[13.12px]'>
          <img src={icons.iconpwt} alt="" />
          <p className='font-normal md:text-[20px] text-[11.4062px] md:leading-[25px] leading-[14px]'>Connect with other interns in our online community.</p>
        </div>

        <div className='flex gap-[16px] pb-5'>
          <img src={icons.iconsroadmap} alt="" />
          <p className='font-normal md:text-[20px] text-[11.4062px] md:leading-[25px] leading-[14px]'>Develop your skills and succeed in your internship with our provides resources.</p>
        </div>
      </div>
    </div>
  )
}

export default Cardd