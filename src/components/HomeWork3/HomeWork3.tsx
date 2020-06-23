import React, {ChangeEvent, useState} from "react";
import classes from "./HomeWork3.module.css";
import {v1} from "uuid";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";

type namesType = {
    id: string
    name: string
}

 const names: Array<namesType> = [];

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

    let alertAllNames = names.map(name => " " + name.name);

    return (
      <div className={classes.wrapper}>
          <Input value={inputState} onChange={onChangeHandler} onEnter={Hello} error={!inputState}/>
          <Button className={classes.button} onClick={Hello} text="Hello"/>
          <span className={classes.counter}>Names Counter: {namesLength}</span>
          <Button text="Alert all names" onClick={ ()=> {alert(alertAllNames)} }/>
      </div>
    )
}

export default HomeWork3;