import React from "react";
import Radio from "@mui/material/Radio";
import Button from "../components/shared/Button";
import { Link } from "react-router-dom";

const SignupLayout = () => {
  const [selectedValue, setSelectedValue] = React.useState("");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  console.log(selectedValue);

  return (
    <div className="flex justify-center ">
      <div className="border w-[739px] h-[589px] rounded-[8px]">
        <div className="md:px-[50px]">
          <div>
            <h1 className="not-italic font-mulish font-semibold  text-[32px] leading-[40px] text-center mt-[55px] mb-[28px] text-[#000000]">
              Connect as a founder or intern
            </h1>
          </div>

          <div className="flex gap-[18px] justify-center items-center mb-[47px]">
            {/* Founder */}
            <label
              htmlFor="employers"
              className="hover:border-[#071D2E] focus-within:border-[#071D2E] border rounded-[8px] h-[248px] cursor-pointer"
            >
              <div className="bg-[#ACB4B9] w-[311px] h-[135px] rounded-tl-[8px] rounded-tr-[8px] flex justify-center mb-[12px]">
                <img
                  className="h-[50px] m-[45px]"
                  src="/icons8-alexander-hamilton-50 1.png"
                  alt=""
                />
              </div>

              <div className="flex flex-col not-italic font-mulish p-3">
                <h1 className="font-bold text-[24px] leading-[30px] text-[#000000] mb-[7px]">
                  Founder
                </h1>
                <p className="font-medium text-[16px] leading-[20px] text-[#000000]">
                  Looking to Employ
                </p>
              </div>

              <div className="absolute">
                {/* Radio button */}
                <Radio
                  id="employers"
                  style={{ color: "#071D2E" }}
                  className="relative left-[264px] bottom-[34px]"
                  checked={selectedValue === "founder"}
                  onChange={handleChange}
                  value="founder"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </div>
            </label>

            {/* Interns */}

            <label
              htmlFor="interns"
              className="hover:border-[#071D2E] focus-within:border-[#071D2E] border rounded-[8px] h-[248px] cursor-pointer"
            >
              <div className="bg-[#ACB4B9]  border-white w-[311px] h-[135px] rounded-tl-[8px] rounded-tr-[8px] flex justify-center mb-[12px]">
                <img
                  className="h-[50px] m-[45px]"
                  src="/icons8-goal-oriented-focus-50 1.png"
                  alt=""
                />
              </div>

              <div className=" flex flex-col not-italic font-mulish p-3">
                <h1 className="font-bold text-[24px] leading-[30px] text-[#000000] mb-[7px]">
                  Interns
                </h1>
                <p className="font-medium text-[16px] leading-[20px] text-[#000000]">
                  Looking to be employed
                </p>
              </div>

              <div className="absolute">
                {/* Radio button */}
                <Radio
                  id="interns"
                  style={{ color: "#071D2E" }}
                  className="relative left-[264px] bottom-[34px] "
                  checked={selectedValue === "intern"}
                  onChange={handleChange}
                  value="intern"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "B" }}
                />
              </div>
            </label>
          </div>

          {/* Sign up button */}
          {selectedValue === "founder" ? (
            <link to="/signup/employer" className="flex justify-center mb-4">
              <Button disabled={false} text="Join as a Founder" />
            </link>
          ) : selectedValue == "intern" ? (
            <Link to="/signup/intern" className="flex justify-center mb-4">
              <Button disabled={false} text="Join as an Intern" />
            </Link>
          ) : (
            <div className="flex justify-center mb-4">
              <Button disabled={true} text="Sign Up" />
            </div>
          )}

          <div className="text-center font-normal text-[16px] leading-[20px] text-[#000000]">
            <p className="text-center my-4 md:block hidden">
              Already have an account?{" "}
              <Link to="/login" className="text-[#79F871]">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupLayout;
