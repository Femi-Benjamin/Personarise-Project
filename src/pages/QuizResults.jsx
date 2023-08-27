import React from 'react'
import { useLocation } from 'react-router'
import CircularProgressWithLabel from '../components/CircularProgressWithLabel'
import { Button } from '@mui/material'

function QuizResults() {
  // const location = useLocation()
  // const score = location.state.score || 0
  const score = 65

  const handleSubmit = () => {}
  return (
    <div className="bg bg-no-repeat bg-slate-100 h-full md:flex justify-center items-center">
      <div className=" md:h-auto h-full  bg-[#FFFFFF] md:m-3">
        <div className="md:px-[90px] md:py-[50px] flex flex-col justify-center items-center not-italic font-mulish">
          <h1 className="text-4xl mb-3 font-bold">
            {score > 60 ? 'Congratulations' : 'Try Again'}
          </h1>
          <CircularProgressWithLabel value={score} />
          <div className="w-full flex justify-between mt-6 items-center">
            <Button
              variant="outlined"
              sx={{
                padding: 2,
                color: '#5668B2',
                width: '200px',
                borderColor: '#5668B2',
                borderRadius: '8px',
                height: '55px',
                margin: '10px',
              }}
              onClick={() => {
                handleSubmit()
              }}
            >
              Retake Quiz
            </Button>
            <Button
              variant="contained"
              sx={{
                padding: 2,
                backgroundColor: '#5668B2',
                color: 'white',
                width: '200px',
                borderRadius: '8px',
                height: '55px',
                margin: '10px',
              }}
              onClick={() => {
                handleSubmit()
              }}
            >
              Next Topic
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizResults
