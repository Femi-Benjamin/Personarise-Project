import React from 'react'

const ReadingButton = () => {
  return (
    <div className="">
      <h1 className="pb-[54px] font-mulish font-normal text-[24px] leading-[30px]">
        Visit the following resources to learn more:
      </h1>

      <ul className="list-disc pb-[146px] pl-[38px] text-[20px]">
        <li className="cursor-pointer">
          <a
            className="hover:bg-blue-100 hover:underline"
            href="https://www.youtube.com/watch?v=apGV9Kg7ics&feature=youtu.be"
            target="_blank"
          >
            Git and Github full course
          </a>
        </li>

        <li className="cursor-pointer">
          <a
            className="hover:bg-blue-100 hover:underline"
            href="https://www.youtube.com/watch?v=zbKdDsNNOhg"
            target="_blank"
          >
            Version Control System Introduction
          </a>
        </li>

        <li className="cursor-pointer">
          <a
            className="hover:bg-blue-100 hover:underline"
            href="https://www.youtube.com/watch?v=SWYqp7iY_Tc"
            target="_blank"
          >
            Git & GitHub Crash Course For Beginners
          </a>
        </li>

        <li className="cursor-pointer">
          <a
            className="hover:bg-blue-100 hover:underline"
            href="https://www.youtube.com/watch?t=21&v=Y9XZQO1n_7c&feature=youtu.be"
            target="_blank"
          >
            Learn Git in 20 Minutes
          </a>
        </li>

        <li className="cursor-pointer">
          <a
            className="hover:bg-blue-100 hover:underline"
            href="https://thenewstack.io/tutorial-git-for-absolutely-everyone/"
            target="_blank"
          >
            Tutorial: Git for Absolutely Everyone
          </a>
        </li>

        <li className="cursor-pointer">
          <a
            className="hover:bg-blue-100 hover:underline"
            href="https://learngitbranching.js.org/"
            target="_blank"
          >
            Interactive Git Branching Guide
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ReadingButton
