import React from "react";
import styled from "styled-components";

const StyledButton = styled.button``;

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <StyledButton
      className="Button_rounded__3xeRj text-xl px-7 py-3 rounded-2xl border-solid border-gray-300 border-2 transition-colors duration-150 focus-visible:duration-0 bg-gray-100 text-gray-900 hover:bg-gray-300 focus-visible:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-gray-300 w-full"
      {...props}
    />
  );
};

export default Button;
