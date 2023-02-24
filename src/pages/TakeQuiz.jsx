import React from "react";
import './TakeQuiz.css'
import { Link } from "react-router-dom";

const TakeQuiz = () => {
    return (

        <div className="bg h-auto bg-no-repeat bg-slate-100 ">
            <div className="flex justify-center items-center">
                <div className="w-[730px] h-auto my-[150px] bg-[#FFFFFF]">
                    <div className="px-[92.74px] flex flex-col justify-center items-center not-italic font-mulish">
                        {/* PROGRESS BAR */}
                        <img className="pt-[62px] pb-[24.35px]" src="/Group 27.png" alt="" />
                        {/* COUNTDOWN TIMER */}
                        <h1 className="pb-[27.26px] font-bold text-[27.2261px] leading-[34px] text-[#838E97]">12:00</h1>
                        {/* QUESTION */}
                        <p className="pb-[32.71px] font-bold text-[20.4196px] leading-[26px] text-black">What’s your favorite type of project?</p>

                        <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-between gap-[20.51px] mb-[90.19px]">
                            <button className=" border-[0.850816px] border-[#CDD2D5] hover:border-[#51A54B] w-[263.75px] h-[83.38px] font-bold text-[16px] leading-[20px] ">Making an art project</button>

                            <button className=" border-[0.850816px] border-[#CDD2D5] hover:border-[#51A54B] w-[263.75px] h-[83.38px] font-bold text-[16px] leading-[20px] ">Writing a research paper</button>

                            <button className=" border-[0.850816px] border-[#CDD2D5] hover:border-[#51A54B] w-[263.75px] h-[83.38px] font-bold text-[16px] leading-[20px] ">Preparing or giving a <br /> presentation</button>

                            <button className=" border-[0.850816px] border-[#CDD2D5] hover:border-[#51A54B] w-[263.75px] h-[83.38px] font-bold text-[16px] leading-[20px]">Automating workflows / <br /> making something work</button>
                        </div>

                        <Link to='/nextqs'><button className="flex justify-center w-[263.75px] h-[46.79px] bg-[#071D2E] items-center mb-[40.84px]">
                            <h1 className="text-white text-center">Next Question</h1>
                            <img src="/" alt="" />
                        </button></Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TakeQuiz