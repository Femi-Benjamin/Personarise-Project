import React, { useState } from 'react'
import {
  CareerDescriptionCard,
  SkillRecorder,
  ExploreDashboardCard,
} from '../components'
import icons from '../constants/icons'
import DashboardModal from '../components/dashboard/Modal'
import { exploreItems } from '../constants/data'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const tabItems = [
    { text: 'View  Career description' },
    { text: 'Change career path' },
  ]
  const [active, setActive] = useState(tabItems[0].text)
  const {user} = useSelector((state) => state.user)
  console.log(user)
  return (
    <div className="">
      <DashboardModal />
      <div className="my-10">
        <h1 className="md:font-medium lg:text-5xl md:text-4xl text-3xl leading-10 mb-7">
          Welcome, {user.firstName || "Mary"}!
        </h1>
        <div className="my-2">
          <div className="flex md:flex-row flex-col flex-wrap md:items-center md:gap-4">
            <p className="lg:text-2xl md:text-xl text-base md:font-bold leading-8">
              Your career path status
            </p>
            <div>
              <span className="md:p-3 p-2 bg-[#0DA8FF] text-white uppercase text-base rounded-lg ">
                {user.careerPath}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center">
          {tabItems.map((item, index) => (
            <div
              key={index}
              className={`text-[#304351] text-sm md:mr-6 mr-4 py-2 cursor-pointer ${
                active === item.text ? 'border-b border-[#111010]' : ''
              }`}
              onClick={() => setActive(item.text)}
            >
              {item.text}
            </div>
          ))}
          <span>
            <img src={icons.infoIcon} />
          </span>
        </div>
        <CareerDescriptionCard />
      </div>
      <div className="my-10">
        <div>
          <h3 className=" mb-4 font-bold lg:text-2xl md:text-xl text-lg leading-8">
            Begin your learning path
          </h3>
          <p className="text-[#304351] font-normal md:text-base text-xs leading-5">
            Learn the skills required to become a software engineer.
          </p>
        </div>
        <SkillRecorder />
      </div>
      <div className="my-10">
        <div>
          <h3 className="font-bold font-2xl lg:text-2xl md:text-xl text-lg leading-8 mb-4">
            Explore more from Us!
          </h3>
          <p className="text-[#304351] md:text-base text-xs font-normal">
            Explore our platform and find out ways to make your stay here more
            pleasant.
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-6 my-6">
          {exploreItems.map((item, index) => (
            <ExploreDashboardCard
              key={index}
              image={item.image}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
