import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button {...props} className={props.typeButton}>
      {props.text}
    </button>
  );
};
export default Button;
