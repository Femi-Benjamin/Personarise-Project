import React from 'react'
import Button from '../shared/Button'
import ProgressBar from './ProgressBar'
import { levels } from '../constants/data'

const SkillRecorder = () => {
  return (

    <div className="md:flex  py-8 px-11 border border-[#CDD2D5] rounded-lg filter drop-shadow-[2px_2px_8px_rgba(0,0,0,0.25)] my-8 md:max-w-3xl md:h-96 lg:h-auto">
      <div className="md:max-w-[70%] flex justify-between flex-1 md:flex-row flex-col lg:items-center">
        {levels.map((level, index) => (
          <div key={index}>
            <ProgressBar percentage={level.percentage} />
            <p className="text-center my-3 text-2xl font-medium">
              {level.name}
            </p>
          </div>
        ))}
      </div>
      <div className="md:absolute lg:right-6 md:bottom-0 md:right-2  lg:bottom-6 my-4 ">
        <Button>Start Learning</Button>
      </div>
    </div>
  )
}

export default SkillRecorder
