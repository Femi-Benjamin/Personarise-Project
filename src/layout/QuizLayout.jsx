import React from "react";
import { Link } from "react-router-dom";

const QuizLayout = () => {
  return (
    <div>
      <div className="md:px-[182px] sm:px-32 py-[129px] sm:py-32">
        <div className="border w-auto h-auto bg-[#071D2E] rounded-[8px] md:flex sm:flex-wrap justify-between items-center">
          <img
            className="md:ml-[93p sm:ml-[16px] sm:px-[32px] sm:pt-[41px]"
            src="/Career Map Quiz.png"
            alt=""
          />

          <div className="md:w-[545px] sm:w-[294px] md:m-[51px] sm:m-[35px] h-auto bg-[#FFFFFF] rounded-[8px] p-[6px] sm:p-[30px] font-mulish">
            <h1 className="not-italic font-medium text-[32px] leading-[40px] text-[#040F17] mb-[32px] sm:mt-5">
              Have you Identified your <br /> Career Path?
            </h1>
            <p className="not-italic font-normal text-[24px] leading-[30px] text-[#304351] mb-[45px]">
              Determine the best path for your tech <br /> career. Take this
              quiz to find out what <br /> skills you already have and which{" "}
              <br /> ones you should learn in order to land <br /> that dream
              job.
            </p>

            <Link to="/takequiz">
              {" "}
              <div className="w-auto h-[55px] bg-[#071D2E] text-center">
                <button className="not-italic font-semibold md:text-[24px] sm:text-[16px] leading-[30px] py-[12.5px] text-[#FFFFFF]">
                  Take the Quiz
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizLayout;
