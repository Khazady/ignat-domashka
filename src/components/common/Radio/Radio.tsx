import React from "react";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {Radio} from "@material-ui/core";

type ItemType = {
    title: string
    value: any
}

export type RadioPropsType = {
    value?: any
    onChange: (value: any) => void
    items: Array<ItemType>
}

function MyRadio(props: RadioPropsType) {
    return (
      <RadioGroup aria-label="city" name="city1" value={props.value} onChange={event => props.onChange(event.currentTarget.value)}>
          {props.items.map( (option)=> <FormControlLabel value={option.value} control={<Radio />} label={option.title} /> )}
      </RadioGroup>
    )
}

export default MyRadio