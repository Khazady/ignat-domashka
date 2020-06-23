import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import React from "react";
import classes from "./Input.module.css";
import cx from "classnames"

export type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  & {
    onEnter?: () => void
    error?: boolean
};

function Input(props: InputProps) {
    const {onEnter, error, ...restProps} = props;

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) onEnter && onEnter();
    }
    let classNames = cx(classes.input, props.error ? `${classes.error}` : "");
    return (
      <>                    {/*стыкует 2 класса с условием*/}
          <input className={classNames} onKeyPress={onKeyPress} placeholder={error ? "ERROR" : ""}  {...restProps} type="text"/>
      </>
    );
};

export default Input;