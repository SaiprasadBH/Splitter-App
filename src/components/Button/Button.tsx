import React from "react";
import "./Button.css";
interface ButtonProps {}
const Button: React.FC<ButtonProps> = () => {
  return <div className="button">Hello, Button!</div>;
};
export default Button;