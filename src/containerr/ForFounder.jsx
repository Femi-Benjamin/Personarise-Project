import React from 'react'
import images from '../constants/images'
import { Link } from 'react-router-dom'

const ForFounder = () => {
  return (
    <div className='h-auto bg-white'>
      <div className='md:px-[72px] px-[34px] md:pt-[22px] pt-[12px] pb-[50px]'>
        <div className='flex flex-wrap flex-wrap-reverse justify-between font-mulish border-b border-[#DDE1F0] md:pb-[128px] pb-[48px]'>
          <div>
            <h1 className='font-medium md:text-[32px] text-[20px] md:leading-[40px] leading-[25px] md:pt-0 pt-[20px] md:pb-[48px] pb-[5px]'>For Founders</h1>
            <h1 className='font-bold md:text-[48px] text-[24px] md:leading-[60px] leading-[30px] lg:mt-0 md:mt-5 mt-[16px] md:pb-[24px] pb-[8px]'>Interns, Sorting, Intakes</h1>
            <p className='font-normal md:text-[24px] text-[16px] md:leading-[40px] leading-[24px] md:pb-[42px] pb-[32px]'>Our platform makes it easy for employers to find the right <br /> interns for their needs. With access to a vast pool of <br /> talented candidates, you can quickly and easily identify <br />  interns with the skills and experience you’re looking for.</p>
          <div className='font-mulish font-normal text-[24px] leading-[30px]'>
          <button className='md:w-[311px] w-[311px] md:h-[62px] h-[55px] border border-[#CCCFD2] rounded-[8px]'> Sort for Interns </button>
          </div>
          </div>
          <img src={images.Rectangle26} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ForFounder