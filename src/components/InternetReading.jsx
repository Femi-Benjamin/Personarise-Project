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
            href="https://www.vox.com/2014/6/16/18076282/the-internet"
            target="_blank"
          >
            The Internet Explained
          </a>
        </li>

        <li className="cursor-pointer ">
          <a
            className="hover:bg-blue-100 hover:underline"
            href="http://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm"
            target="_blank"
          >
            How Does the Internet Work?
          </a>
        </li>

        <li className="cursor-pointer ">
          <a
            className="hover:bg-blue-100 hover:underline"
            href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work"
            target="_blank"
          >
            How Does the Internet Work? MDN Docs
          </a>
        </li>

        <li className="cursor-pointer ">
          <a
            className="hover:bg-blue-100 hover:underline"
            href="https://roadmap.sh/guides/what-is-internet"
            target="_blank"
          >
            Introduction to Internet
          </a>
        </li>

        <li className="cursor-pointer ">
          <a
            className="hover:bg-blue-100 hover:underline"
            href="https://www.youtube.com/watch?v=TNQsmPf24go"
            target="_blank"
          >
            How does the Internet work?
          </a>
        </li>

        <li className="cursor-pointer ">
          <a
            className="hover:bg-blue-100 hover:underline"
            href="https://www.youtube.com/watch?v=7_LPdttKXPc"
            target="_blank"
          >
            How the Internet Works in 5 Minutes
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ReadingButton
