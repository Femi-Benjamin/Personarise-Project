import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { SignupContainer } from '../components'

const InternSignup = () => {
  const navigate = useNavigate()
  const isIntern = useSelector((state) => state.user.isIntern)

  useEffect(() => {
    if (!isIntern) {
      navigate('/signup')
    }
  }, [isIntern])
  return (
    <>
      {isIntern && (
        <SignupContainer
          title="Sign up to find work you love"
          link="employer"
          connection="Connect as Founder"
          nextText="Want to employ Interns? "
          isEmployer={!isIntern}
        />
      )}
    </>
  )
}

export default InternSignup
