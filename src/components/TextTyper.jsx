import React, { useState, useEffect } from 'react'

const TextTyper = ({ text, delay }) => {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    const intervalId = setInterval(() => {
      const length = displayedText.length
      if (length === text.length) {
        clearInterval(intervalId)
        return
      }
      setDisplayedText(text.slice(0, length + 1))
    }, delay)
    return () => clearInterval(intervalId)
  }, [displayedText, text, delay])

  return <>{displayedText}</>
}

export default TextTyper
