import React from 'react'

const Level_up = () => {
  return (
    <div className='h-auto bg-white'>
      <div className='md:px-[72px] px-[34px] md:pt-[60px] pt-[24px] pb-[40px] font-mulish'>
        <div className='border-b border-[#DDE1F0] md:pb-[114px] pb-[48px]'>
          <div className='hidden md:block'> {/* CONTAINER DIV LARGE SCREEN */}
            <div className='flex lg:justify-between md:gap-7 max-width-[100%]'>  
              <div>
                <h1 className='font-bold lg:text-[40px] md:text-[32px] leading-[50px]'>Level up your career with HireRise.</h1>
              </div>
              <div>  {/* FIRST DIV */}
                <h1 className='font-bold lg:text-[32px] md:text-[27px] leading-[40px] pb-[24px]'>Product</h1>
                <p className='font-normal lg:text-[32px] md:text-[23px] lg:leading-[40px] md:leading-[25px] hover:text-[#5668B2]'>Learn</p>
              </div>
              <div>  {/* SECOND DIV */}
                <h1 className='font-bold lg:text-[32px] md:text-[27px] leading-[40px] pb-[24px]'>Resources</h1>
                <p className='font-normal lg:text-[32px] md:text-[23px] lg:leading-[40px] md:leading-[25px] hover:text-[#5668B2]'>Blog</p>
              </div>
              <div>  {/* THIRD DIV */}
                <h1 className='font-bold lg:text-[32px] md:text-[27px] leading-[40px] pb-[24px]'>Company</h1>
                <div className=' font-normal lg:text-[32px] md:text-[23px] lg:leading-[40px] md:leading-[25px]'>
                  <p className=' lg:pb-[24px] md:pb-[20px] text-[#5668B2] '>Who We Are</p>
                  <p className=' lg:pb-[24px] md:pb-[20px] hover:text-[#5668B2]'>Contact Us</p>
                  <p className='hover:text-[#5668B2]'>Careers</p>
                </div>
              </div>
            </div>
          </div>

          <div className='md:hidden block'> {/* CONTAINER DIV SMALL SCREEN*/}
            <div>
              <h1 className='text-center font-bold text-[20px] leading-[25px] pb-[30px]'>Level up your career with Personarise.</h1>
            </div>
            <div className='flex justify-between max-width-[100%]'>
              <div>  {/* FIRST DIV */}
                <h1 className='font-bold text-[20px] leading-[25px] pb-[16px]'>Product</h1>
                <p className='font-normal text-[20px] leading-[25px] pb-[16px] hover:text-[#5668B2]'>Learn</p>
              </div>
              <div>  {/* SECOND DIV */}
                <h1 className='font-bold text-[20px] leading-[25px] pb-[16px]'>Resources</h1>
                <p className='font-normal text-[20px] leading-[25px] pb-[16px] hover:text-[#5668B2]'>Blog</p>
              </div>
              <div>  {/* THIRD DIV */}
                <h1 className='font-bold text-[20px] leading-[25px] pb-[16px]'>Company</h1>
                <div className='font-normal text-[18px] leading-[25px] pb-[16px]'>
                  <p className='pb-[16px] hover:text-[#5668B2]'>Who We Are</p>
                  <p className='pb-[16px] hover:text-[#5668B2]'>Contact Us</p>
                  <p className='pb-[16px] hover:text-[#5668B2]'>Careers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Level_up