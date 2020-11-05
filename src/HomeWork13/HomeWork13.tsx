import axios from "axios";
import React, {ChangeEvent, useState} from "react";
import Checkbox from "@material-ui/core/Checkbox";


export const HomeWork13 = () => {
    const [response, setResponse] = useState<any>(null)
    const [checked, setChecked] = useState(true)
    const thunk = (e: ChangeEvent<HTMLInputElement>) => {
        axios.post("https://neko-cafe-back.herokuapp.com/auth/test", {success: checked}).then(res => {
            debugger
            //setChecked(res.data.yourBody.success)
            setChecked(e.currentTarget.checked)
            setResponse(res)
        })
    }
    return <>
        <Checkbox
          checked={checked}
          onChange={thunk}
          inputProps={{'aria-label': 'primary checkbox'}}
        />
        <div> {JSON.stringify(response)}</div>
    </>
}