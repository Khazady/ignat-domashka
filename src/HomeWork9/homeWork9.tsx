import React, {useState} from "react";
import moment from "moment";
import {Button} from "@material-ui/core";
import classes from "./homeWork9.module.css";

export function HomeWork9() {
    let time = moment().format('h:mm:ss a')
    let [seconds, setSeconds] = useState(time);

    const [timerId, setTimerId] = useState<any>(0);

    let refresh = () => {
        const timer_id = setInterval(() => {
            let a = moment().format('h:mm:ss a');
            setSeconds(a)
        }, 1000);
        setTimerId(timer_id);
    }

    let stop = () => {
        clearInterval(timerId);
    }
    return (
      <div className={classes.Block}>
          <div onMouseOver={ ()=> {} }>{seconds}</div>
          <Button onClick={refresh}>REFRESH</Button>
          <Button onClick={stop}>STOP</Button>
      </div>
    )
}