import React from 'react'
import Radio from '@mui/material/Radio'
import Button from '../shared/Button'
import { Link } from 'react-router-dom'
import icons from '../constants/icons'

const Career = () => {
  const [selectedValue, setSelectedValue] = React.useState('')
  const handleChange = (event) => {
    setSelectedValue(event.target.value)
  }
  console.log(selectedValue)

  return (
    <div className=" md:flex items-center justify-center h-full  bg-slate-100">
      <div className="border w-[739px] rounded-[8px] bg-white">
        <div className="md:px-[50px]">
          <div>
            <h1 className="not-italic font-mulish font-semibold  text-[32px] leading-[40px] text-center mt-[55px] mb-[28px] text-[#000000]">
              Connect as a founder or intern
            </h1>
          </div>

          <div className="flex gap-[18px] justify-center items-center mb-[47px]">
            {/* Founder */}
            <label
              htmlFor="employers"
              className="hover:border-[#071D2E] focus-within:border-[#071D2E] border rounded-[8px] cursor-pointer"
            >
              <div className="bg-[#ACB4B9] w-[311px] h-[135px] rounded-tl-[8px] rounded-tr-[8px] flex justify-center mb-[12px]">
                <img className="h-[50px] m-[45px]" src={icons.result1} alt="" />
              </div>

              <div className="flex flex-col not-italic font-mulish p-3">
                <h1 className="font-bold text-[24px] leading-[30px] text-[#000000] mb-[7px]">
                  Mobile
                </h1>
                <p className="font-medium text-[16px] leading-[20px] text-[#000000] mb-4">
                  Any application you see on App store or Play store is actually
                  built by Software Engineers (Mobile).
                </p>
              </div>

              <div className="absolute">
                {/* Radio button */}
                <Radio
                  id="employers"
                  style={{ color: '#071D2E' }}
                  className="relative left-[264px] bottom-[44px]"
                  checked={selectedValue === 'founder'}
                  onChange={handleChange}
                  value="founder"
                  name="radio-buttons"
                  inputProps={{ 'aria-label': 'A' }}
                />
              </div>
            </label>
            {/* Interns */}

            <label
              htmlFor="interns"
              className="hover:border-[#071D2E] focus-within:border-[#071D2E] border rounded-[8px]  cursor-pointer"
            >
              <div className="bg-[#ACB4B9]  border-white w-[311px] h-[135px] rounded-tl-[8px] rounded-tr-[8px] flex justify-center mb-[12px]">
                <img className="h-[50px] m-[45px]" src={icons.result2} alt="" />
              </div>

              <div className=" flex flex-col not-italic font-mulish p-3">
                <h1 className="font-bold text-[24px] leading-[30px] text-[#000000] mb-[7px]">
                  Web
                </h1>
                <p className="font-medium text-[16px] leading-[20px] text-[#000000] mb-4">
                  Any website you see on the internet is actually built by
                  Software Engineers (Frontend).
                </p>
              </div>

              <div className="absolute">
                {/* Radio button */}
                <Radio
                  id="interns"
                  style={{ color: '#071D2E' }}
                  className="relative left-[264px] bottom-[44px] "
                  checked={selectedValue === 'intern'}
                  onChange={handleChange}
                  value="intern"
                  name="radio-buttons"
                  inputProps={{ 'aria-label': 'B' }}
                />
              </div>
            </label>
          </div>

          {/* Sign up button */}

          {selectedValue ? (
            <Link
              to="/dashboard"
              className="flex justify-center mb-4 max-w-[60%] mx-auto"
            >
              <Button disabled={false}>Continue</Button>
            </Link>
          ) : (
            <div className="flex justify-center mb-4 max-w-[60%] mx-auto">
              <Button disabled={true}>Continue</Button>
            </div>
          )}

          <div className="text-center font-normal text-[16px] leading-[20px] text-[#000000]">
            <p className="text-center my-4 md:block hidden">
              Do not like this career path?
              <Link
                to="/choose-career"
                className="text-[#071D2E] font-extrabold"
              >
                &nbsp; Choose Career
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Career
