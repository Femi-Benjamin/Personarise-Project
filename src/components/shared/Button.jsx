import React from "react";

const Button = ({ text, image, disabled, type, outline, onClick }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={` disabled:text-white disabled:cursor-not-allowed p-3  flex items-center gap-2 justify-center w-full rounded-lg ${
        outline
          ? " bg-none border border-solid border-[#CDD2D5] disabled:text-[#AEAEAE] "
          : " bg-[#071D2E] disabled:bg-[#AEAEAE]"
      }`}
    >
      {image && <img src={image} alt="button image" />}
      <span
        className={`lg:text-2xl md:text-xl text-base ${
          outline ? " text-black " : " text-white "
        }`}
      >
        {text}
      </span>
    </button>
  );
};

export default Button;
