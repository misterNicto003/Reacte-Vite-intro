import React from "react";
import cls from "./Button.module.scss";

const Button = ({ children, isActive, ...props }) => {
  return (
    <button
      {...props}
      className={isActive ? `${cls.button} ${cls.active}` : cls.button}
    >
      {children}
    </button>
  );
};

export default Button;
