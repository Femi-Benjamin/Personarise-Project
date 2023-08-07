import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(720)
  const [displayTime, setDisplayTime] = useState('12:00')
  const [timerColor, setTimerColor] = useState('')
  const score = useSelector((state) => state.user.score)
  let keepScore = 0
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

  return (
    <h1
      className={`pb-[27.26px] font-bold text-[27.2261px] leading-[34px] text-[#838E97] mt-5 ${timerColor}`}
    >
      {displayTime}
    </h1>
  )
}

export default Timer
