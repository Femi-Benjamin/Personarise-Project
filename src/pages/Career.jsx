import React, { useEffect } from 'react'
import Radio from '@mui/material/Radio'
import Button from '../shared/Button'
import { Link, useNavigate } from 'react-router-dom'
import icons from '../constants/icons'
import { useDispatch, useSelector } from 'react-redux'
import { setCareer } from '../redux/users/actions/userActions'

const Career = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [selectedValue, setSelectedValue] = React.useState('')
  const { user } = useSelector((state) => state.user)
  const path = user?.careerPath
  const careers = JSON.parse(localStorage.getItem('careers'))?.paths
  // const careers = {
  //   title: 'Data analyst',
  //   paths: [
  //     {
  //       title: "Data analyst",
  //       icon: 'something',
  //       desc: "Any website or mobile application you see on the internet is actually powered by a backend built by Software Engineers (Backend)."
  //     },{
  //       title: "Software Tester",
  //       icon: 'something',
  //       desc: "Building, launching, and implementing feedback on a product can be relatively slow and might take forever in some companies."
  //     },{
  //       title: "Cyber security",
  //       icon: 'something',
  //       desc: "Building, launching, and implementing feedback on a product can be relatively slow and might take forever in some companies."
  //     }
  //   ]
  // }
  console.log(careers)
  useEffect(() => {
    const token = localStorage.getItem('token')
   if(!token || !user){
    navigate('/login')
   }
   if(path){
    localStorage.removeItem('careers')
    navigate("/dashboard")
   }
   if(!careers && !path){
    navigate("/takequiz")
   }
    
  }, [user, navigate])
  const handleChange = (event) => {
    setSelectedValue(event.target.value)
  }
  console.log(selectedValue)
  const handleSubmit = () =>{
    dispatch(setCareer(selectedValue))
    // navigate('/dashboard')
  }

  return (
    <div className=" md:flex items-center justify-center  bg-slate-100">
      <div className="border w-[739px] rounded-[8px] bg-white">
        <div className="md:px-[30px]">
          <div>
            <h1 className="not-italic font-mulish font-semibold  text-[32px] leading-[40px] text-center mt-[55px] mb-[28px] text-[#000000]">
              Let's Narrow your Career Path Down
            </h1>
          </div>

          {careers? 
            <div className="flex flex-wrap gap-5 justify-start items-center mb-[47px]">
          {careers.map((career) => 
          <label
          key={career.title}
            htmlFor= {career.title.split(" ").join("")}
            className="hover:border-[#071D2E] focus-within:border-[#071D2E] border rounded-[8px] cursor-pointer w-[300px] m-2"
          >
            <div className="bg-[#ACB4B9] w-[100%] h-[135px] rounded-tl-[8px] rounded-tr-[8px] flex justify-center mb-[12px]">
              <img className="h-[50px] m-[45px]" src={icons.result1} alt="" />
            </div>

            <div className="flex flex-col not-italic font-mulish p-3">
              <h1 className="font-bold text-[24px] leading-[30px] text-[#000000] mb-[7px]">
                {career.title}
              </h1>
              <p className="font-medium text-[16px] leading-[20px] text-[#000000] mb-4">
                {career.desc}
              </p>
            </div>

            <div className="absolute">
              {/* Radio button */}
              <Radio
                id={career.title.split(" ").join("")}
                style={{ color: '#071D2E' }}
                className="relative left-[264px] bottom-[44px]"
                checked={selectedValue === career.title}
                onChange={handleChange}
                value={career.title}
                name="radio-buttons"
                inputProps={{ 'aria-label': career.title }}
              />
            </div>
          </label>
             )}
             </div>
            :
            <div className="flex flex-wrap gap-5 justify-start items-center mb-[47px]">
          
            {/* Founder */}
            <label
              htmlFor="employers"
              className="hover:border-[#071D2E] focus-within:border-[#071D2E] border rounded-[8px] cursor-pointer w-[311px] m-2 "
            >
              <div className="bg-[#ACB4B9] w-[100%] h-[135px] rounded-tl-[8px] rounded-tr-[8px] flex justify-center mb-[12px]">
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
              className="hover:border-[#071D2E] focus-within:border-[#071D2E] border rounded-[8px]  cursor-pointer w-[311px]"
            >
              <div className="bg-[#ACB4B9]  border-white w-[100%] h-[135px] rounded-tl-[8px] rounded-tr-[8px] flex justify-center mb-[12px]">
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

          }
{/* 
          <div className="flex gap-[18px] justify-center items-center mb-[47px]">
          
            {/* Founder 
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
                {/* Radio button 
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
            {/* Interns 

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
                {/* Radio button 
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
          </div> */}

          {/* Sign up button */}

          {selectedValue ? (
            <div className="flex justify-center mb-4 max-w-[60%] mx-auto">
              <Button disabled={false} onClick={() => handleSubmit()}>Continue</Button>
            </div>
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
