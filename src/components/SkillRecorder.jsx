import React from 'react'
import Button from '../shared/Button'
import ProgressBar from './ProgressBar'
import { levels } from '../constants/data'

const SkillRecorder = () => {
  return (
    <div className="md:flex py-8 px-11 border border-[#CDD2D5] rounded-lg ilter drop-shadow-[2px_2px_8px_rgba(0,0,0,0.25)] my-8 md:max-w-3xl">
      <div className="md:max-w-[70%] flex justify-between flex-1 md:flex-row flex-col items-center">
        {levels.map((level, index) => (
          <div key={index}>
            <ProgressBar percentage={level.percentage} />
            <p className="text-center my-3 text-2xl font-medium">
              {level.name}
            </p>
          </div>
        ))}
      </div>
      <div className="md:absolute md:right-6  md:bottom-6 my-4">
        <Button>Start Learning</Button>
      </div>
    </div>
  )
}

export default SkillRecorder
