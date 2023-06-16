import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../shared/Button'
// import { quizQuestions } from '../constants/data'
import { addScore, removeScore } from '../redux/users/actions/userActions'

function QuizFlow({ quizQuestions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null)
  const score = useSelector((state) => state.user.score)
  let keepScore = 0
  const dispatch = useDispatch()

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

  console.log('question', quizQuestions.length)

  

  return (
    <>
      <div className="bg bg-no-repeat bg-slate-100 h-full md:flex justify-center items-center ">
        {/* <h1>{score}</h1> */}
        <div className=" md:h-auto h-full  bg-[#FFFFFF] md:m-3">
          <div className="md:px-[92px] md:py-[47px] p-6 flex flex-col justify-center items-center not-italic font-mulish m-3">
            {/* QUESTION */}
            <h2 className=" text-2xl max-w-[400px] text-left mb-3">
              {quizQuestions[currentQuestionIndex].title}
            </h2>
            <p className="pb-[32.71px] max-w-[500px] text-center font-bold md:text-xl text-sm leading-[26px] text-black">
              {quizQuestions[currentQuestionIndex].question}
            </p>

            {/* //////////// */}
            <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-between gap-[20.51px] md:mb-[50px] mb-5">
              {quizQuestions[currentQuestionIndex].options.map(
                (option, index) => {
                  keepScore = option.score
                  return (
                    
                    
                    <label
                      key={index}
                      htmlFor={`option ${option.id}`}
                      // WORK
                      className={`border-[0.850816px] border-[#CDD2D5] hover:border-[#51A54B] md:w-[263.75px] w-[200px] md:h-[83.38px] h-[50px] font-bold md:text-[16px] text-xs leading-[20px] flex justify-center items-center p-2 text-center cursor-pointer selection:${
                        selectedOptionIndex === option.id
                          ? ' bg-[#071D2E] text-white'
                          : ''
                      }`}
                      onClick={() => handleOptionSelect(option.id)}
                    >
                      {option.text}
                      
                      <input
                        type="radio"
                        id={`option ${option.id}`}
                        checked={selectedOptionIndex === option.id}
                        onChange={handleChange}
                        className="hidden"
                      />
                    </label>
                  )
                }
              )}
            </div>
            {/* //////////// */}

            <div
              className={` ${
                currentQuestionIndex === 0 ? 'flex w-[60%] ' : 'grid '
              }md:grid-cols-2 sm:grid-cols-1 justify-between gap-[20.51px] mb-[40.84px] `}
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
              <span>
                <p className="font-semibold text-xl ">
                  <span className="text-[#ABB4D9] ">
                    {currentQuestionIndex}
                  </span>{' '}
                  /{quizQuestions.length}
                </p>
              </span>
              <div className="w-full">
                <Button
                  onClick={() => {
                    isLastQuestion ? handleFormSubmit() : handleNextQuestion()
                    dispatch(addScore(keepScore))
                  }}
                  disabled={!selectedOptionIndex}
                >
                  {isLastQuestion ? 'Submit' : 'Next Question'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuizFlow
