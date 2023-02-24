import Button from "./shared/Button";
import React, { useState } from "react";
import images from "../constants/images";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const EmailVerificationContainer = () => {
  const email = useSelector((state) => state.user.userEmail);

  return (
    <>
      <div className="flex items-center justify-center h-full  md:bg-[#E4E4E4]">
        <div className="md:w-[60%] md:border-solid md:border md:border-[#CDD2D5] md:py-4 md:px-12 bg-white m-4 p-4">
          <div className="flex flex-col justify-center mt-10">
            <div className="flex justify-center">
              <img src={images.verify} alt="reset" />
            </div>
            <div className="flex flex-col justify-center ">
              <h1 className="md:font-semibold lg:text-[32px] md:text-[28px] text-[24px] text-center my-10">
                Verify your Email address
              </h1>
              <p className="text-center max-w-[404px] mx-auto mb-6">
                We have sent an email verification link to {email}. You can
                click on the link to verify your email.
              </p>
            </div>
            <div className="w-full">
              <div className="max-w-[450px] mx-auto h-0 border border-solid border-[#CDD2D5] mb-10" />

              <div className="flex flex-col items-center">
                <p className="mb-4">Didn’t get a mail?</p>
                <Link to="#/" className="text-[#071D2E] mb-10 font-extrabold">
                  Resend Verification Link
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailVerificationContainer;
