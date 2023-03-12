import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { SignupContainer } from '../components'

const EmployerSignupLayout = () => {
  const navigate = useNavigate()
  const isEmployer = useSelector((state) => state.user.isEmployer)

  useEffect(() => {
    if (!isEmployer) {
      navigate('/signup')
    }
  }, [])
  return (
    <>
      {isEmployer && (
        <SignupContainer
          title="Employ Trusted Interns"
          link="intern"
          connection="Connect as Intern"
          nextText="Want to be employed?"
          isEmployer={isEmployer}
        />
      )}
    </>
  )
}

export default EmployerSignupLayout
