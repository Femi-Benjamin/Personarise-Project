import Button from '../shared/Button'
import React from 'react'
import images from '../constants/images'
import { useNavigate } from 'react-router'

const Result = () => {
  const navigate = useNavigate()
  const career = JSON.parse(localStorage.getItem('careers'))?.title || "Software Engineering"
  return (
    <div className="bg-slate-100 flex justify-center items-center h-full">
      <div className="m-4">
        <h1 className="px-[10px] font-mulish font-bold md:text-[36px] text-[24px] md:leading-[60px] text-center mt-[87.73px] md:mb-[48px] mb-6">
          You will succeed at a career path in.....
        </h1>
        <div className=" ">
          <div className="px-[30px] py-[30px] border-[0.830254px] border-[#7C7E80] rounded-[8px] bg-[#FFFFFF] items-center flex flex-col">
            <img className="my-[50px]" src={images.frame1} alt="" />
            <h1 className="font-mulish font-bold md:text-[32px] text-[22px] text-center leading-[40px] text-black mb-[42px]">
              { career }
            </h1>
            <div className="w-[60%]">
              <Button onClick={() => navigate("/career")}>Get started</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result
