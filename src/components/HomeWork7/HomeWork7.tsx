import React from "react";
import {Select} from "../common/Select/Select";
import {Radio} from "../common/Radio/Radio";

export type optionsStateType = {
    title: string
    value: number
}

export function HomeWork7() {

    let optionsState: Array<optionsStateType> = [
        {title: "variant 0", value: 0},
        {title: "variant 1", value: 1},
        {title: "variant 2", value: 2},
    ]


    return (
      <>
        <Select optionsState={optionsState} onChange={ () => { alert("select changed")} }/>
        <Radio optionsState={optionsState} onChange={ () => { alert("radio changed")} } name="???" />
      </>
    )
}