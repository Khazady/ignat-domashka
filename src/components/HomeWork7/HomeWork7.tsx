import React, {useState} from "react";
import {Select} from "../common/Select/Select";
import Radio from "../common/Radio/Radio";
import classes from "./HomeWork7.module.css";

export type optionsStateType = {
    title: string
    value: string
}

export function HomeWork7() {

    let optionsState: Array<optionsStateType> = [
        {value: "1", title: "Minsk"},
        {value: "2", title: "Moscow"},
        {value: "3", title: "Kyiv"},
    ]

    let [selectValue, setSelectValue] = useState("1")

    return (
      <>
          <div className={classes.Select}>
              <Select value={selectValue} onChange={setSelectValue} items={optionsState}/>
          </div>
          <div className={classes.Radio}>
              <Radio onChange={setSelectValue} items={optionsState} value={selectValue}/>
          </div>
      </>
    )
}