import React from 'react'
import images from '../constants/images'

const Sign_up = () => {
  return (
    <div className='h-auto bg-white'>
      <div className='md:px-[72px] px-[34px] md:pt-[22px] pt-[12px] pb-[50px] font-mulish'>
        <div className='border-b border-[#DDE1F0] md:pb-[114px] pb-[48px] md:flex flex-wrap justify-center'>
          
            <div className='w-auto h-auto bg-[#010B13] md:block hidden'>  {/* BOX 1 LARGE SCREEN*/}
              <div className='md:px-[72px] px-[48px] md:pt-[93px] pt-[43px] text-white'> {/* TEXT */}
                <h1 className='font-bold md:text-[48px] text-[32px] md:leading-[22px] leading-[40px] md:flex text-center items-center md:pb-[38px] pb-[16px]'>Sign up</h1>
                <p className='font-normal md:text-[24px] text-[20px] md:leading-[32px] leading-[32px] md:text-left text-center md:pb-[38px] pb-[19px]'>Ready to take your business or Internship career to the <br /> next level? Get Started today and start exploring <br /> opportunities that can take your career and business to <br /> the next level.</p>

                <div className='font-mulish font-normal text-[24px] leading-[30px]'>
                  <button className='md:w-[311px] w-[211px] md:h-[62px] h-[55px] bg-[#5668B2] rounded-[8px] text-white md:mb-[48px] mb-[28px]'>Find a Role </button>
                </div>
              </div> {/* TEXT END */}
            </div> {/* BOX 1 END*/}
            <div className='lg:block .. hidden'>
              <img src={images.puzzle} alt="" />
            </div>

          {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className='h-auto bg-[#010B13] block md:hidden'>  {/* BOX 2 SAMLL SCREEN*/}
            <div> {/* IMAGE TO HERE */}
              <img src={images.puzzle} alt="" />
            </div>
            <div className='px-[40px] pt-[43px] text-white'> {/* TEXT */}
              <h1 className='font-bold text-[32px] leading-[40px] text-center items-center pb-[16px]'>Sign up</h1>
              <p className='font-normal text-[20px] leading-[32px] text-center pb-[19px]'>Ready to take your business or Internship career to the <br /> next level? Get Started today and start exploring <br /> opportunities that can take your career and business to <br /> the next level.</p>

              <div className='font-normal text-[24px] leading-[30px] flex justify-center'>
                <button className='w-[211px] h-[55px] bg-[#5668B2] rounded-[8px] text-white mb-[28px]'>Find a Role </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Sign_up