import React from "react";

const Button = ({ text, image, disabled, type }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className="disabled:bg-[#AEAEAE] disabled:text-white disabled:cursor-not-allowed p-3 bg-[#071D2E] flex items-center gap-2 justify-center w-full"
    >
      {image && <img src={image} alt="button image" />}
      <span className="text-white lg:text-2xl md:text-xl text-base">
        {text}
      </span>
    </button>
  );
};

export default Button;
