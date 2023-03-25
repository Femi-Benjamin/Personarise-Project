import React, { useState } from 'react'

const ProgressBar = ({ percentage }) => {
  const [circumference] = useState(50 * 2 * Math.PI)
  const [percent] = useState(percentage)

  return (
    <span className="flex items-center justify-center overflow-hidden">
      <svg
        className="w-32 h-32 transform translate-x-1 translate-y-1"
        aria-hidden="true"
      >
        <circle
          className="text-[#ECECEC]"
          strokeWidth="15"
          stroke="#ECECEC"
          fill="transparent"
          r="50"
          cx="60"
          cy="60"
        />
        <circle
          className="text-[#51A54B]"
          strokeWidth="15"
          strokeDasharray={circumference}
          strokeDashoffset={((percent - 100) / 100) * circumference}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="50"
          cx="60"
          cy="60"
          style={{ filter: 'none' }}
        />
      </svg>
      <span className="absolute text-xl font-bold">{`${percent}%`}</span>
    </span>
  )
}

export default ProgressBar
