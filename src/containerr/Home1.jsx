import React from 'react'
import images from '../constants/images'
import { Link } from 'react-router-dom'

const Home1 = () => {
  return (
    <div>
          <div className='h-auto md:pb-0 pb-[56px] bg-[#010B13]'>
        <div className='md:px-[72px] px-[36px]'>
          <div className='md:p-[55px] p-[45.14px] flex justify-between'>  {/* NAV */}
            <img className='cursor-pointer' src={images.PersonariseLogo} alt="" />
            <div className='md:block hidden'>
              <div className='flex items-center justify-center gap-[51px] cursor-pointer text-white font-mulish font-normal text-[24px] leading-[30px ]'>
                <h1 className='text-[#5668B2] hover:text-[#5668B2]'>Home</h1>
                <h1 className='hover:text-[#5668B2]'>Founders</h1>
              </div>
            </div>
          </div>

          <div className='text-white md:mt-[110.68px] mt-[48.82px] font-mulish font-semibold text-center '>
            <h1 className='md:text-[48px] text-[24px] md:leading-[60px] leading-[30px] pb-[16px]'>Connecting Interns with Founders</h1>
            <p className='md:text-[24px] text-[20px] md:leading-[30px] leading-[25px] text-[#80888E] pb-[54px]'>Our job internship matching platform connects startups and companies with <br /> talented interns who are looking for real-world experience and career growth.</p>

            <div className='md:flex flex-wrap justify-center gap-[24px] font-mulish font-normal text-[24px] leading-[30px] items-center md:pb-[150px] pb-[50.59px]'>
              <Link to="/signup">
                <div className='md:block hidden'>
                  <button className='w-[311px] h-[62px] bg-[#5668B2] rounded-[8px]'> Find a Role </button>
                </div>
              </Link>

              <Link to="/quiz">
                <div className='block md:hidden'>
                  <button className='w-[311px] h-[62px] bg-[#5668B2] rounded-[8px] md:mb-0 mb-[24px]'> Take the Quiz </button>
                </div>
              </Link>
              <button className='w-[311px] h-[62px] border border-[#CCCFD2] rounded-[8px]'> Sort for Interns </button>
            </div>
          </div>

          {/* LARGE SCREEN USING FLEX*/}
          <div className='md:block hidden'>
            <div className='flex md:flex-cols-4 justify-center gap-[24px] items-center cursor-pointer'>
              <img src={images.Gvi6} alt="" />

              <div>
                <img className='pb-5' src={images.Gv5} alt="" />
                <img src={images.Giv4} alt="" />
              </div>

              <div>
                <img className='pb-5' src={images.Giii3} alt="" />
                <img src={images.Gii2} alt="" />
              </div>

              <img src={images.Gi1} alt="" />
            </div>
          </div>

          {/* LARGE SCREEN USING GRID */}
          {/* <div className='md:block hidden'>
            <div className='grid md:grid-cols-4 gap-4 items-center cursor-pointer'>
              <img src={images.Gvi6} alt="" />

              <div>
                <img className='pb-5' src={images.Gv5} alt="" />
                <img src={images.Giv4} alt="" />
              </div>

              <div>
                <img className='pb-5' src={images.Giii3} alt="" />
                <img src={images.Gii2} alt="" />
              </div>

              <img src={images.Gi1} alt="" />
            </div>
          </div> */}

          {/* SMALL SCREEN*/}
          <div className='block md:hidden'>
            <div className='grid grid-cols-2 gap-4 items-center cursor-pointer '>
              <img src={images.Gvi6} alt="" />

              <div>
                <img className='pb-5' src={images.Gv5} alt="" />
                <img src={images.Giv4} alt="" />
              </div>

              <div>
                <img className='pb-5' src={images.Giii3} alt="" />
                <img src={images.Gii2} alt="" />
              </div>

              <img src={images.Gi1} alt="" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home1