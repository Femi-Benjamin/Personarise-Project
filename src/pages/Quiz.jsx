import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../shared/Button'
import { quizQuestions } from '../constants/data'
import { addScore, removeScore } from '../redux/users/actions/userActions'

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null)
  const [timeLeft, setTimeLeft] = useState(720)
  const [displayTime, setDisplayTime] = useState('12:00')
  const [timerColor, setTimerColor] = useState('')
  const score = useSelector((state) => state.user.score)
  let keepScore = 0
  const dispatch = useDispatch()

  useEffect(() => {
    let intervalId
    if (timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1)
      }, 1000)
    }
    return () => clearInterval(intervalId)
  }, [timeLeft])

  useEffect(() => {
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60
    if (timeLeft <= 0) {
      setDisplayTime('00:00')
      handleFormSubmit()
    } else if (seconds < 10) {
      setDisplayTime(`${minutes}:0${seconds}`)
    } else {
      setDisplayTime(`${minutes}:${seconds}`)
    }
    if (timeLeft <= 30) {
      setTimerColor('text-red-500')
    }
  }, [timeLeft])

  const handleOptionSelect = (optionIndex) => {
    setSelectedOptionIndex(optionIndex)
  }

  const handleFormSubmit = () => {
    // Handle form submission
    console.log('Submit ode mumu')
  }

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
    setSelectedOptionIndex(null)
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex === 0) return
    setCurrentQuestionIndex(currentQuestionIndex - 1)
    setSelectedOptionIndex(null)
  }

  const handleChange = (event) => {
    setSelectedValue(event.target.value)
  }

  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1

  console.log("question", quizQuestions.length)

  return (
    <>
      <div className="bg bg-no-repeat bg-slate-100 h-full md:flex justify-center items-center ">
        <h1>{score}</h1>
        <div className=" md:h-auto lg:w-[730px] m-8  bg-[#FFFFFF] md:m-3">
          <div className="md:px-[42px] md:py-[27px] p-6 flex flex-col justify-center items-center not-italic font-mulish m-3">
            {/* PROGRESS BAR */}
           
           
            {/* QUESTION */}
            <h2 className=" text-2xl max-w-[400px] text-center mb-3">
              {quizQuestions[currentQuestionIndex].title}
            </h2>
            <p className="pb-[32.71px] w-full font-semibold  md:text-2xl text-sm leading-[26px] text-black">
              {quizQuestions[currentQuestionIndex].question}
            </p>
            <div className="flex flex-col gap-10 md:ml-16 w-full">
              {quizQuestions[currentQuestionIndex].options.map(
                (option, index) => {
                  keepScore = option.score
                  return (
                    <label
                      key={index}
                      htmlFor={`option ${option.id}`}
                      className={` md:text-xl text-sm flex gap-4 items-center cursor-pointer`}
                      onClick={() => handleOptionSelect(option.id)}
                    >
                      <input
                        type="radio"
                        id={`option ${option.id}`}
                        checked={selectedOptionIndex === option.id}
                        onChange={handleChange}
                        className=" w-8 h-8"
                      />
                      {option.text}
                      
                    </label>
                  )
                }
              )}
            </div>
            <div
              className={`${currentQuestionIndex == 0 && " md:flex-row flex-col gap-4"} flex justify-between w-full my-7 items-center `}
            >
              {currentQuestionIndex !== 0 && (
                <div className="">
                  <Button
                    onClick={() => {
                      handlePreviousQuestion()
                      dispatch(removeScore(keepScore))
                    }}
                    outline={true}
                    disabled={currentQuestionIndex === 0}
                  >
                    Previous Question
                  </Button>
                </div>
              )}

                <p className='font-semibold md:text-2xl text-sm flex'>
                  <span className='text-[#ABB4D9] '>{currentQuestionIndex}</span> /
                  {quizQuestions.length}
                </p>
              <div className={`md:w-[154px] ${currentQuestionIndex == 0 && " w-full"}`}>
                <Button
                  onClick={() => {
                    isLastQuestion ? handleFormSubmit() : handleNextQuestion()
                    dispatch(addScore(keepScore))
                  }}
                  disabled={!selectedOptionIndex}
                >
                  {isLastQuestion ? 'Submit' : 'Next '}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Quiz
