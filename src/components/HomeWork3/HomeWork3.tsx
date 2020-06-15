import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import classes from "./HomeWork3.module.css";
import {v1} from "uuid";

type namesType = {
    id: string
    name: string
}

export const names: Array<namesType> = [];

function HomeWork3() {
    let [inputState, setInputState] = useState("");

    let [namesLength, setNamesLength] = useState(0);

    const Hello = () => {
        const addNewName = () => {
            names.push({id: v1(), name: inputState})
            setNamesLength(names.length);
            alert (`Hello ${inputState}`);
            setInputState("")
        }
        return inputState && addNewName();
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setInputState(e.currentTarget.value);

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => e.charCode === 13 && Hello();

    let alertAllNames = names.map(name => " " + name.name);

    return (
      <div className={classes.wrapper}>
          <input className={classes.input} value={inputState} onChange={onChangeHandler}
                 onKeyPress={onKeyPressHandler}/>
          <button className={classes.button} onClick={Hello}> Hello</button>
          <span className={classes.counter}>Names Counter: {namesLength}</span>
          <button onClick={ ()=> {alert(alertAllNames)} }>Alert all names</button>
      </div>
    )
}

export default HomeWork3;