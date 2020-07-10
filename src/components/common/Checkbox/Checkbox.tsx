import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";
import classes from "./Checkbox.module.css";

export type CheckboxProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  & {
    text: string
    onEnter?: () => void
};

function Checkbox(props: CheckboxProps) {

    return (
      <>
          <input className={classes.input} type="checkbox" id="todo" name="todo" value="todo" onChange={() => {}}/>
          <label className={classes.label} htmlFor="todo" data-content={props.text}>{props.text}</label>
      </>
    )
}

export default Checkbox;