import classNames from "classnames";
import React from "react";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const className = classNames(
    "text-xl px-7 py-3 rounded-2xl border-solid border-gray-300 border-2 transition-colors duration-150 focus-visible:duration-0 bg-gray-100 text-gray-900 hover:bg-gray-300 focus-visible:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-gray-300 w-full",
    props.className
  );
  console.log("🚀 ~ file: button.tsx ~ line 14 ~ className", className);
  return <button {...props} className={className} />;
};

export default Button;
