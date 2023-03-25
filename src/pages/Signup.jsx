import React, { useEffect } from 'react'
import Radio from '@mui/material/Radio'
import Button from '../shared/Button'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { isEmployer, isIntern } from '../redux/users/actions/userActions'
import icons from '../constants/icons'

const Signup = () => {
  const [selectedValue, setSelectedValue] = React.useState('')
  const dispatch = useDispatch()

  const handleChange = (event) => {
    setSelectedValue(event.target.value)
  }
  return (
    <div className=" md:flex items-center justify-center h-full  bg-slate-100">
      <div className="border w-auto rounded-[8px] bg-white">
        <div className="md:px-[50px]">
          <div>
            <h1 className="not-italic font-mulish font-semibold md:text-[32px] sm:-[20px] leading-[40px] text-center mt-[55px] mb-[28px] text-[#000000]">
              Connect as a founder or intern
            </h1>
          </div>

          <div className="flex gap-[18px] justify-center items-center mb-[47px] ">
            {/* Founder Founder Founder */}
            <div className="gap-5 hidden md:flex">
              <label
                htmlFor="employers"
                className="hover:border-[#071D2E] focus-within:border-[#071D2E] md:border rounded-[8px] h-[248px] cursor-pointer"
              >
                {/* ##### */}
                <div className="bg-[#ACB4B9] w-[311px] h-[135px] rounded-tl-[8px] rounded-tr-[8px] flex justify-center mb-[12px]">
                  <img
                    className="h-[50px] m-[45px]"
                    src={icons.signup1}
                    alt=""
                  />
                </div>

                <div className="flex flex-col not-italic font-mulish p-3">
                  <h1 className="font-bold md:text-[24px] sm:text-[20px] leading-[30px] text-[#000000] mb-[7px]">
                    Founder
                  </h1>
                  <p className="font-medium text-[16px] leading-[20px] text-[#000000]">
                    Looking to Employ
                  </p>
                </div>

                <div className="absolute">
                  {/* Radio button */}
                  <Radio
                    id="employers"
                    style={{ color: '#071D2E' }}
                    className="relative left-[264px] bottom-[34px]"
                    checked={selectedValue === 'founder'}
                    onChange={handleChange}
                    value="founder"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}
                  />
                </div>
              </label>

              {/* Interns Interns Interns */}
              <label
                htmlFor="interns"
                className="hover:border-[#071D2E] focus-within:border-[#071D2E] md:border sm:border-b rounded-[8px] h-[248px] cursor-pointer"
              >
                {/* ##### */}
                <div className="bg-[#ACB4B9] md:w-[311px] md:h-[135px] sm:w-auto sm:h-auto rounded-tl-[8px] rounded-tr-[8px] flex justify-center mb-[12px]">
                  <div>
                    <img
                      className="h-[50px] m-[45px]"
                      src={icons.signup2}
                      alt=""
                    />
                  </div>
                </div>

                <div className=" flex flex-col not-italic font-mulish p-3">
                  <h1 className="font-bold md:text-[24px] sm:text-[20px] leading-[30px] text-[#000000] mb-[7px]">
                    Interns
                  </h1>
                  <p className="font-medium text-[16px] leading-[20px] text-[#000000]">
                    Looking to be employed
                  </p>
                </div>

                <div className="absolute">
                  {/* Radio button */}
                  <Radio
                    id="interns"
                    style={{ color: '#071D2E' }}
                    className="relative left-[264px] bottom-[34px] "
                    checked={selectedValue === 'intern'}
                    onChange={handleChange}
                    value="intern"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'B' }}
                  />
                </div>
              </label>
            </div>
          </div>

          {/* CONFIRM SM1 FOUNDER */}
          <div className="md:hidden">
            <div className="cursor-pointer">
              <div className="border hover:border-[#071D2E] border-[#ACB4B9] w-auto h-auto mx-3 mb-4 flex">
                <div className="bg-[#ACB4B9] w-[137px] items-center flex justify-center">
                  <img className="" src={icons.signup1} alt="" />
                </div>

                <div className=" flex flex-col not-italic font-mulish p-3">
                  <h1 className="font-bold text-[24px] leading-[30px] text-[#000000] mb-[7px]">
                    Founder
                  </h1>
                  <p className="font-medium text-[16px] leading-[20px] text-[#000000]">
                    Looking to Employ
                  </p>

                  <div className="absolut">
                    {/* Radio button */}
                    <Radio
                      id="employers"
                      style={{ color: '#071D2E' }}
                      className="relative left-[185px]"
                      checked={selectedValue === 'founder'}
                      onChange={handleChange}
                      value="founder"
                      name="radio-buttons"
                      inputProps={{ 'aria-label': 'A' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CONFIRM SM2 INTERNS */}
            <div className="cursor-pointer">
              <div className="border hover:border-[#071D2E] border-[#ACB4B9] w-auto h-auto mx-3 mb-4 flex">
                <div className="bg-[#ACB4B9] w-[137px] items-center flex justify-center">
                  <img className="" src={icons.signup2} alt="" />
                </div>

                <div className=" flex flex-col not-italic font-mulish p-3">
                  <h1 className="font-bold text-[24px] leading-[30px] text-[#000000] mb-[7px]">
                    Interns
                  </h1>
                  <p className="font-medium text-[16px] leading-[20px] text-[#000000]">
                    Looking to be employed
                  </p>

                  <div className="absolut">
                    {/* Radio button */}
                    <Radio
                      id="interns"
                      style={{ color: '#071D2E' }}
                      className="relative left-[185px]"
                      checked={selectedValue === 'intern'}
                      onChange={handleChange}
                      value="intern"
                      name="radio-buttons"
                      inputProps={{ 'aria-label': 'B' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CONFIRM 2*/}
          {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mb-3">
            <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.a620c98f.jpg" alt="" width="384" height="512" />
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p class="text-lg font-medium">
                  “Tailwind CSS is the only framework that I've seen scale
                  on large teams. <br /> It’s easy to customize, adapts to any design,
                  and the build size is tiny.”
                </p>
              </blockquote>
              <figcaption class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">
                  Sarah Dayan
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                  Staff Engineer, Algolia
                </div>
              </figcaption>
            </div>
          </figure> */}

          {/* Sign up button */}
          {selectedValue === 'founder' ? (
            <Link
              to="/signup/employer"
              className="flex justify-center mb-4"
              onClick={() => dispatch(isEmployer(true))}
            >
              <Button disabled={false}>Join as a Founder</Button>
            </Link>
          ) : selectedValue == 'intern' ? (
            <Link
              to="/signup/intern"
              className="flex justify-center mb-4"
              onClick={() => dispatch(isIntern(true))}
            >
              <Button disabled={false}>Join as an Intern</Button>
            </Link>
          ) : (
            <div className="flex justify-center mb-4">
              <Button disabled={true}>Sign Up</Button>
            </div>
          )}

          <div className="text-center font-normal text-[16px] leading-[20px] text-[#000000]">
            <p className="text-center my-4 md:block hidden">
              Already have an account?
              <Link to="/login" className="text-[#071D2E] font-extrabold">
                &nbsp;Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
