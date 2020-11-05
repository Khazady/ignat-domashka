import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import styles from "./homeWork9.module.css"


export function HomeWork9() {
    const get2DigitsString = (num: number) => num < 10 ? "0" + num : num

    const [date, setDate] = useState(new Date())
    const [id, setId] = useState<number>(0)
    const [show, setShow] = useState<boolean>(false)

    const stop = () => clearInterval(id)

    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000);
        setId(id);
    }

    const stringTime = <>
        <span>{get2DigitsString(date.getHours())}</span>
        :
        <span>{get2DigitsString(date.getMinutes())}</span>
        :
        <span>{get2DigitsString(date.getSeconds())}</span>
    </>

    const onMouseEnter = () => {
        setShow(true)
    }

    const onMouseLeave = () => {
        setShow(false)
    }

    const stringDate = <>
        <span>{get2DigitsString(date.getDay())}</span>
        .
        <span>{get2DigitsString(date.getMonth())}</span>
        .
        <span>{get2DigitsString(date.getFullYear())}</span>
    </>


    return (
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <div>
              <div className={styles.clock}>{stringTime}</div>
              <Button variant="contained" color="primary" onClick={start}>start</Button>
              <Button variant="contained" color="secondary" onClick={stop}>stop</Button>
          </div>
          {show && <span className={styles.date}>{stringDate}</span>}
      </div>
    )
}
