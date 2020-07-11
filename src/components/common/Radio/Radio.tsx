import React, {MouseEvent, useState} from "react";
import {optionsStateType} from "../../HomeWork7/HomeWork7";

type SelectPropsType = {
    optionsState: Array<optionsStateType>
    onChange: () => void
    name: string
}

export function Radio(props: SelectPropsType) {

    return (
      <>
        {props.optionsState.map(option => <label><input type="radio" key={option.value} name={props.name} onChange={()=>props.onChange()}/>{option.title}</label>)}
      </>
    )
}