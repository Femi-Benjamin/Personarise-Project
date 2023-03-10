import Button  from '../components/shared/Button'
import React from 'react'

const Result = () => {
    return (
        <div className='bg-[#E4E4E4] flex justify-center items-center h-full'>
          <div className='m-4'>
            <h1 className='px-[10px] font-mulish font-bold md:text-[36px] text-[24px] md:leading-[60px] text-center mt-[87.73px] md:mb-[48px] mb-6'>You will succeed at a career path in.....</h1>
            <div className=' '>
                <div className='px-[30px] py-[30px] border-[0.830254px] border-[#7C7E80] rounded-[8px] bg-[#FFFFFF] items-center flex flex-col'>
                    <img className='my-[50px]' src="/Frame 341.png" alt="" />
                    <h1 className='font-mulish font-bold md:text-[32px] text-[22px] text-center leading-[40px] text-black mb-[42px]'>Software Engineering</h1>
                    <div className='w-[60%]'>
                    <Button text="Get started" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Result