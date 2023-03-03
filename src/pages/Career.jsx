import React from "react";
import Radio from "@mui/material/Radio";
import Button from "../components/shared/Button";
import { Link } from "react-router-dom";

const Career = () => {
  const [selectedValue, setSelectedValue] = React.useState("");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  console.log(selectedValue);

  return (
    <div className="flex items-center justify-center h-full bg-[#E4E4E4]">
      <div className="border w-[739px] h-[589px] sm:h-auto rounded-[8px] bg-white">
        <div className="md:px-[50px]">
          <div>
            <h1 className="not-italic font-mulish font-semibold text-[32px] leading-[40px] text-center mt-[55px] mb-[28px] text-[#000000]">
              Let’s Narrow your Career Path down
            </h1>
          </div>

          <div className="flex gap-[18px] justify-center items-center mb-[47px]">
            {/* Mobile */}
            <label
              htmlFor="mobile"
              className="hover:border-[#071D2E] focus-within:border-[#071D2E] border  rounded-[8px] h-auto cursor-pointer"
              // Border
            >
              <div className="bg-[#ACB4B9] w-[311px] h-[135px] rounded-tl-[8px] rounded-tr-[8px] flex justify-center mb-[12px]">
                <img
                  className="h-[50px] m-[45px]"
                  src="/icons8-alexander-hamilton.png"
                  alt=""
                />
              </div>

              <div className="flex flex-col not-italic font-mulish p-3">
                <h1 className="font-bold text-[24px] leading-[30px] text-[#000000] mb-[7px]">
                  Mobile
                </h1>
                <p className="font-medium text-[16px] leading-[20px] text-[#000000]">
                  Any application you see on App store or Play store is actually
                  built by Software Engineers (Mobile).
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

            {/* Web */}

            <label
              htmlFor="web"
              className="hover:border-[#071D2E] focus-within:border-[#071D2E] border border-auto rounded-[8px] h-auto cursor-pointer"
              // Border
            >
              <div className="bg-[#ACB4B9]  border-white w-[311px] h-[135px] rounded-tl-[8px] rounded-tr-[8px] flex justify-center mb-[12px]">
                <img
                  className="h-[50px] m-[45px]"
                  src="/icons8-alexanderhamilton.png"
                  alt=""
                />
              </div>

              <div className=" flex flex-col not-italic font-mulish p-3">
                <h1 className="font-bold text-[24px] leading-[30px] text-[#000000] mb-[7px]">
                  Web
                </h1>
                <p className="font-medium text-[16px] leading-[20px] text-[#000000]">
                  Any website you see on the internet is actually built by
                  Software Engineers (Frontend).
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
          {/* {selectedValue === "founder" ? (
                    <Link to="/signup/employer" className="flex justify-center mb-4">
                      <Button disabled={false} text="Mobile" />
                    </Link>
                  ) : selectedValue == "intern" ? (
                    <Link to="/signup/intern" className="flex justify-center mb-4">
                      <Button disabled={false} text="Web" />
                    </Link>
                  ) : ( */}
          <div className="flex justify-center mb-4">
            <Button disabled={false} text="Continue" />
          </div>
          {/* )} */}

          <div className="text-center font-mulik font-normal text-[16px] leading-[20px] text-[#000000]">
            <p className="text-center my-4 md:block font-semibold hidden">
              Do not like this career path?{" "}
              <button>
                <span className="text-[#071D2E] font-bold">Choose Career</span>
              </button>
              {/* <Link to="/login" className="text-[#071D2E] font-extrabold">
                        &nbsp;Log In
                      </Link> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
