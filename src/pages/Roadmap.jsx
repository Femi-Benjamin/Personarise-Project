import React, { useState } from 'react'
import { CareerTab, Header } from '../containers'
import { SkillBox } from '../components'

const Roadmap = () => {
  const skills = [
    {
      text: 'Beginner',
      level: 1,
      description:
        'You will cover the basics about the internet, learn about HTML,CSS and JavaScript.',
    },
    {
      text: 'Intermediate',
      level: 2,
      description:
        'Learn about Version Control System. What they are and why you should use them',
    },
    {
      text: 'Advanced',
      level: 3,
      description:
        'Learn the difference between Unit, Integration and Functional tests and how to write them with the right tools.',
    },
  ]

  const [active, setActive] = useState(skills[0].text)
  return (
    <div>
      <Header />
      <CareerTab />
      <div>
        <div className='my-16'>
          <h1 className="text-2xl">
            What level is your skillset currently in?
          </h1>
          <div className="flex md:gap-7 gap-5 cursor-pointer flex-wrap justify-center md:justify-start my-7 ">
            {skills.map((skill, index) => (
              <SkillBox
                key={index}
                active={active}
                skill={skill}
                setActive={setActive}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
