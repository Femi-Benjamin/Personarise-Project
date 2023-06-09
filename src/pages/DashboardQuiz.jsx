import React from 'react'
// import Quiz from "../components/QuizFlow"
import QuizFlow from '../components/QuizFlow'
import { quizQuestions } from '../constants/data'



function DashboardQuiz() {
  return (
    // <div></div>
    // <QuizFlow />
    <QuizFlow quizQuestions={quizQuestions} />
  )
}

export default DashboardQuiz
