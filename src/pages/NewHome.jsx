import React from 'react'
import Courses from '../containerr/Courses'
import StepGame from '../containerr/StepGame'
import ForInterns from '../containerr/ForInterns'
import ForFounder from '../containerr/ForFounder'
import ChoseUs from '../containerr/ChoseUs'
import Succes from '../containerr/Succes'
import Sign_up from '../containerr/Sign_up'
import Home1 from '../containerr/Home1'
import Level_up from '../containerr/Level_up'
import PersonariseFooter from '../containerr/PersonariseFooter'

const NewHome = () => {
  return (
    <div>
      <Home1/>
      <Courses />
      <StepGame />
      <ForInterns />
      <ForFounder />
      <ChoseUs />
      <Succes />
      <Sign_up/>
      <Level_up/>
      <PersonariseFooter/>
    </div>
  )
}

export default NewHome
