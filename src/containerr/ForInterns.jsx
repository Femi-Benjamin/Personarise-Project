import React from 'react'
import images from '../constants/images'
import { Link } from 'react-router-dom'

const ForInterns = () => {
  return (
    <div className='h-auto bg-white'>
      <div className='md:px-[72px] px-[34px] md:pt-[42px] pt-[32px] pb-[100px]'>
        <div className='flex flex-wrap justify-between font-mulish'>
          <img src={images.Rectangle25} alt="" />
          <div>
            <h1 className='font-medium md:text-[32px] text-[20px] md:leading-[40px] leading-[25px] lg:pt-0 md:pt-4 pt-[20px] lg:pb-[35px] md:pb-[5px] pb-[5px]'>For Interns</h1>
            <h1 className='font-bold md:text-[48px] text-[24px] md:leading-[60px] leading-[30px] lg:mt-0 md:mt-5 mt-[16px] md:pb-[24px] pb-[8px]'>Skills, Companies, Jobs</h1>
            <p className='font-normal md:text-[24px] text-[16px] md:leading-[40px] leading-[24px] md:pb-[42px] pb-[32px]'>Our platform connects talented interns with top <br /> companies and organizations in a variety or industries. <br /> Whether you’re just starting your career or looking to <br /> gain experince in a new field, we can help you find the <br /> perfect internship opportunity to help you achieve your goals.</p>
          <div className=' font-mulish font-normal text-[24px] leading-[30px]'>
            <Link to="/signup">
              <button className='md:w-[311px] w-[311px] md:h-[62px] h-[55px] bg-[#5668B2] rounded-[8px] text-white md:mb-0 mb-[24px]'> Find a Role </button>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForInterns
