import React from 'react'
import Radio from "@mui/material/Radio";

const SelectBar = ({useFor, title, text}) => {

  const [selectedValue, setSelectedValue] = React.useState("");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <label
      htmlFor={useFor}
      className="hover:border-[#071D2E] focus-within:border-[#071D2E] border rounded-[8px]  cursor-pointer max-w-[311px]"
    >
      <div className="bg-[#ACB4B9]  h-[135px] rounded-tl-[8px] rounded-tr-[8px] flex justify-center mb-[12px]">
        <img
          className="h-[50px] m-[45px]"
          src="/icons8-alexander-hamilton-50 1.png"
          alt=""
        />
      </div>

      <div className="flex flex-col not-italic font-mulish px-3 pb-5">
        <h1 className="font-bold text-[24px] leading-[30px] text-[#000000] mb-[7px]">
         {title}
        </h1>
        <p className="font-medium text-[16px] leading-[20px] text-[#000000]">
         {text}
        </p>
      </div>

      <div className="absolute">
        {/* Radio button */}
        <Radio
          id={useFor}
          style={{ color: "#071D2E" }}
          className="relative left-[264px] bottom-[34px]"
          checked={selectedValue === title}
          onChange={handleChange}
          value={title}
          name="radio-buttons"
          inputProps={{ "aria-label": "A" }}
        />
      </div>
    </label>

  )
}

export default SelectBar