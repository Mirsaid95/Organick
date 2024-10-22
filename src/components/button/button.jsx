import React from "react";

export const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-[16px] w-[220px] h-[70px] ${className}`}
    >
      {children}
    </button>
  );
};

export const Input = ({ placeholder, type = "text", className}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`rounded-[16px] placeholder:Your Email Address ${className} bg-white`}
    />
  );
};
