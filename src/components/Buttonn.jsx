import React from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-[251px] h-[69px] rounded-[8px] bg-[#D2D2D2]"
    >
      {text}
    </button>
  )
}

export default Button
