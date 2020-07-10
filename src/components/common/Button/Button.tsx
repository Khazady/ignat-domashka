import {DetailedHTMLProps, ButtonHTMLAttributes} from "react";
import React from "react";
import classes from "./Button.module.css";

export type ButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
  & {text: string
    error?: string
    onClick?: () => void
};

function Button (props: ButtonPropsType) {

    return <button onClick={props.onClick} className={[classes.button, props.error ? classes.error : ""].join("")} {...props}>{props.text}</button>
}

export default Button;