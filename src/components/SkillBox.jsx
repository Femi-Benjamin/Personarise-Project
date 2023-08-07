import React from 'react'
import { Link } from 'react-router-dom'

const SkillBox = ({ skill, active, setActive }) => {
  // define mapping of skill text values to background colors
  const bgColors = {
    Beginner: 'bg-[#E4FEE3]',
    Intermediate: 'bg-[#fcead0]',
    Advanced: 'bg-[#f2dafb]',
  }

  // get the background color for the current skill
  const bgColor = bgColors[skill?.text] || 'bg-stone-900'

  return (
<<<<<<< Updated upstream
    <Link to={skill?.page}> 
      <div
        className={`h-auto px-9 py-10 border rounded-3xl border-solid border-stone-900 flex flex-col md:my-7 ${
          active.toLowerCase() === (skill?.text.toLowerCase() || '')
            ? bgColor
            : ''
        }`}
        onClick={() => setActive(skill?.text || '')}
      >
        <span className="flex ">
          {/* level bars, 1 - 3 */}
          {Array.from({ length: skill?.level || 0 }).map((_, index) => (
            <div
              key={index}
              className={`h-6 w-6 rounded-full bg-level-${index + 1} mr-2`}
            />
          ))}
        </span>
        <h3 className="font-bold text-3xl my-2">{skill?.text || ''}</h3>
        <p className="md:text-2xl text-base max-w-[284px]">
          {skill?.description || ''}
        </p>
      </div>
    </Link>
=======
    <div
      className={`px-9 py-10 border rounded-3xl border-solid border-stone-900 flex flex-col md:my-7 ${
        active.toLowerCase() === (skill?.text.toLowerCase() || '')
          ? bgColor
          : ''
      }`}
      onClick={() => setActive(skill?.text || '')}
    >
      <span className="flex ">
        {/* level bars, 1 - 3 */}
        {Array.from({ length: skill?.level || 0 }).map((_, index) => (
          <div
            key={index}
            className={`h-6 w-6 rounded-full bg-level-${index + 1} mr-2`}
          />
        ))}
      </span>
      <h3 className="font-bold text-3xl my-2">{skill?.text || ''}</h3>
      <p className="md:text-2xl text-base max-w-[284px]">
        {skill?.description || ''}
      </p>
    </div>
>>>>>>> Stashed changes
  )
}

export default SkillBox
