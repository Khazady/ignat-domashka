import React, { useState, ChangeEvent } from "react";
import {optionsStateType} from "../../HomeWork7/HomeWork7";

type SelectPropsType = {
    optionsState: Array<optionsStateType>
    onChange: () => void
}

export function Select(props: SelectPropsType) {
    const [value, setValue] = useState<number>(props.optionsState[0].value)

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(Number(e.target.value));
        props.onChange()
    }


    return (
      <select value={value} onChange={onChangeHandler}>
          {props.optionsState.map(option => <option key={option.value} value={option.value}>
              {option.title}
          </option>)}
      </select>

    )
}