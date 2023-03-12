import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../shared/Button'

const TakeQuizLayout = () => {
  return (
    <div className="flex justify-center items-center h-full bg-slate-100 overflow-y-auto">
      <div className="m-4">
        <div className="border w-auto h-full bg-[#FFFFFF] rounded-[8px] flex lg:flex-row flex-col justify-between items-center p-4">
          <div className="max-w-[545px]  md:m-[51px] sm:m-[35px] h-auto bg-[#071D2E] rounded-[8px] p-6 sm:p-[30px] font-mulish border text-[#FFFFFF]">
            <h1 className="not-italic font-medium md:text-[32px] text-xl leading-[40px] mb:mb-[32px] mb-2">
              Have you Identified your Career Path?
            </h1>
            <p className="not-italic font-normal md:text-[24px]  text-justify text-base leading-[30px] md:mb-[45px] mb-4">
              Determine the best path for your tech career. Take this quiz to
              find out what skills you already have and which ones you should
              learn in order to land that dream job.
            </p>
            <Link to="/quiz">
              <Button bordered>Take the Quiz</Button>
            </Link>
          </div>
          <div className="max-w-[545px]  md:m-[51px] sm:m-[35px] h-auto bg-[#FFFFFF] rounded-[8px] p-6 sm:p-[30px] font-mulish border border-[#071D2E] mt-7">
            <h1 className="not-italic font-medium md:text-[32px] text-xl leading-[40px] text-[#040F17] mb:mb-[32px] mb-2 ">
              Have you Identified your Career Path?
            </h1>
            <p className="not-italic font-normal md:text-[24px]  text-justify text-base leading-[30px] text-[#304351] md:mb-[45px] mb-4">
              Determine the best path for your tech career. Take this quiz to
              find out what skills you already have and which ones you should
              learn in order to land that dream job.
            </p>

            <Link to="/choose-career">
              <Button>Skip the Quiz</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TakeQuizLayout
