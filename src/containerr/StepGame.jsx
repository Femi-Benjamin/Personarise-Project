import React from 'react'
import images from '../constants/images'
import icons from '../constants/icons'
import { Link } from 'react-router-dom'


const StepGame = () => {
  return (
    <div className='h-auto bg-white'>
      <div className='md:px-[72px] px-[34px] md:pt-[72px] pt-[62px] pb-[100px]'>
        <div className='flex flex-wrap justify-between font-mulish'>  {/* MAIN FLEX */}
          <img src={images.Group1} alt="" />
          <div>
            <h1 className='font-bold md:text-[48px] text-[24px] md:leading-[60px] leading-[30px] lg:mt-0 md:mt-5 mt-[16px] md:pb-[24px] pb-[16px]'>Step up your game, It’s free.</h1>

            <div className='flex gap-[24px]'>   {/* MINI FLEX ONE */}
              <img src={icons.icons8} alt="" />
              <div>
                <h1 className='font-semibold md:text-[32px] text-[20px] md:leading-[40px] leading-[25px] lg:pb-[10px] md:pb-[16px] pb-[8px]'>No cost to join.</h1>
                <p className='font-normal md:text-[24px] text-[12px] md:leading-[30px] leading-[15px] md:mb-[24px] mb-[16px]'>Register, learn and apply for internship roles.</p>
              </div>
            </div>

            <div className='flex gap-[24px]'>   {/* MINI FLEX TWO */}
              <img src={icons.iconpin} alt="" />
              <div>
                <h1 className='font-semibold md:text-[32px] text-[20px] md:leading-[40px] leading-[25px] lg:pb-[10px] md:pb-[16px] pb-[8px]'>Post a job and hire top interns.</h1>
                <p className='font-normal md:text-[24px] text-[12px] md:leading-[30px] leading-[15px] md:mb-[27px] mb-[17px]'>Finding  interns doesn’t have to be a chore. Post a job or <br /> we can search for you!</p>
              </div>
            </div>

            <div className='md:flex flex-wrap gap-[24px] font-mulish font-normal text-[24px] leading-[30px] items-center'>  {/* BUTTON */}
              <Link to="/signup">
                <button className='md:w-[311px] w-[311px] md:h-[62px] h-[55px] bg-[#5668B2] rounded-[8px] text-white md:mb-0 mb-[24px]'> Find a Role </button>
              </Link>
              <button className='md:w-[311px] w-[311px] md:h-[62px] h-[55px] border border-[#CCCFD2] rounded-[8px]'> Sort for Interns </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default StepGame