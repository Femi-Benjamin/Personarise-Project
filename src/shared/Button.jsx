import React, { Children } from 'react'

const Button = ({
  bordered,
  image,
  disabled,
  type,
  outline,
  onClick,
  children,
  className,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={` disabled:text-white disabled:cursor-not-allowed p-3  flex items-center gap-2 justify-center w-full rounded-lg ${className}  ${
        bordered ? ' duration-100 ease-in border-b hover:scale-[.98] ' : ''
      } ${
        outline
          ? ' bg-none border border-solid border-[#CDD2D5] disabled:text-[#AEAEAE] '
          : ' bg-[#071D2E] disabled:bg-[#AEAEAE]'
      }`}
    >
      {image && <img src={image} alt="button image" />}
      <span
        className={`lg:text-2xl md:text-xl text-base ${
          outline ? ' text-black ' : ' text-white '
        }`}
      >
        {children}
      </span>
    </button>
  )
}

export default Button
