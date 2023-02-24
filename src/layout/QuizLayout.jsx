import React, { useState, useEffect } from "react";
import Button from "../components/shared/Button";
import { quizQuestions } from "../constants/data";

function Quizlayout() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [timerSeconds, setTimerSeconds] = useState(720); // 12 minutes = 720 seconds
  const [timerIntervalId, setTimerIntervalId] = useState(null);

  useEffect(() => {
    if (timerSeconds === 0) {
      clearInterval(timerIntervalId);
      handleFormSubmit();
    }
  }, [timerSeconds, timerIntervalId]);

  useEffect(() => {
    setTimerIntervalId(
      setInterval(() => setTimerSeconds(timerSeconds - 1), 1000)
    );
    return () => clearInterval(timerIntervalId);
  }, []);

  const handleOptionSelect = (optionIndex) => {
    setSelectedOptionIndex(optionIndex);
  };

  const handleFormSubmit = () => {
    // Handle form submission
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOptionIndex(null);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex === 0) return;
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    setSelectedOptionIndex(null);
  };

  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;

  return (
    <>
      <div className="bg bg-no-repeat bg-slate-100 h-full md:flex justify-center items-center ">
        <div className=" md:h-auto h-full  bg-[#FFFFFF] md:m-3">
          <div className="md:px-[92px] md:py-[47px] p-6 flex flex-col justify-center items-center not-italic font-mulish m-3">
            {/* PROGRESS BAR */}
            <div class="w-[60%] bg-[#E4FEE3] rounded-full h-2.5  ">
              <div
                className="bg-[#51A54B] h-5 rounded-full"
                style={{
                  width: `${
                    ((currentQuestionIndex + 1) / quizQuestions.length) * 100
                  }%`,
                }}
              />
              {/* </div> */}
            </div>
            {/* COUNTDOWN TIMER */}
            <h1 className="pb-[27.26px] font-bold text-[27.2261px] leading-[34px] text-[#838E97] mt-5">
              {Math.floor(timerSeconds / 60)}:{timerSeconds % 60}
            </h1>
            {/* QUESTION */}
            <p className="pb-[32.71px] font-bold md:text-xl text-sm leading-[26px] text-black">
              {quizQuestions[currentQuestionIndex].question}
            </p>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-between gap-[20.51px] md:mb-[50px] mb-5">
              {quizQuestions[currentQuestionIndex].options.map(
                (option, index) => (
                  <label
                    key={index}
                    htmlFor={`option ${index}`}
                    className={`border-[0.850816px] border-[#CDD2D5] hover:border-[#51A54B] md:w-[263.75px] w-[200px] md:h-[83.38px] h-[50px] font-bold md:text-[16px] text-xs leading-[20px] flex justify-center items-center cursor-pointer selection:${
                      selectedOptionIndex === index
                        ? " bg-[#071D2E] text-white"
                        : ""
                    }`}
                    onClick={() => handleOptionSelect(index)}
                  >
                    {option}
                    <input
                      type="radio"
                      id={`option ${index}`}
                      checked={selectedOptionIndex === index}
                      className="hidden"
                    />
                  </label>
                )
              )}
            </div>
            <div
              className={` ${
                currentQuestionIndex === 0 ? "flex w-[60%] " : "grid "
              }md:grid-cols-2 sm:grid-cols-1 justify-between gap-[20.51px]  mb-[40.84px] `}
            >
              {currentQuestionIndex !== 0 && (
                <div className="">
                  <Button
                    text="Previous Question"
                    onClick={handlePreviousQuestion}
                    outline={true}
                    disabled={currentQuestionIndex === 0}
                  />
                  <img src="/" alt="" />
                </div>
              )}
              <div className="w-full">
                <Button
                  onClick={
                    isLastQuestion ? handleFormSubmit : handleNextQuestion
                  }
                  text={isLastQuestion ? "Submit" : "Next Question"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quizlayout;
