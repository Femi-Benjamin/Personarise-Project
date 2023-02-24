import React from "react";
import { Link } from "react-router-dom";

const TakeQuizLayout = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className=" m-4">
        <div className="border w-auto h-auto bg-[#071D2E] rounded-[8px] flex  md:flex-row flex-col flex-wrap  justify-between items-center p-6">
          <img
            className="md:ml-[93px] sm:px-[32px] sm:pt-[41px]"
            src="/Career Map Quiz.png"
            alt=""
          />
          <div className="max-w-[545px]  md:m-[51px] sm:m-[35px] h-auto bg-[#FFFFFF] rounded-[8px] p-6 sm:p-[30px] font-mulish mt-7">
            {/* <div className="max-w-[254px] mx-auto "> */}
            <h1 className="not-italic font-medium md:text-[32px] text-xl leading-[40px] text-[#040F17] mb:mb-[32px] mb-2 ">
              Have you Identified your Career Path?
            </h1>
            <p className="not-italic font-normal md:text-[24px]  text-justify text-base leading-[30px] text-[#304351] md:mb-[45px] mb-4">
              Determine the best path for your tech career. Take this quiz to
              find out what skills you already have and which ones you should
              learn in order to land that dream job.
            </p>

            <div className="w-auto h-[55px] bg-[#071D2E] text-center">
              <Link to="/quiz">
                <button className="not-italic font-semibold text-[24px] leading-[30px] py-[12.5px] text-[#FFFFFF]">
                  Take the Quiz
                </button>
              </Link>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default TakeQuizLayout;
