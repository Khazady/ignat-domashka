import React from "react";
import Typography from "@material-ui/core/Typography";
import {Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChange: (value: number[]) => void
    value: number[]
    // min, max, step, disable, ...
}



const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({onChange, value}) => {

    const handleChange = (event: any, newValue: number | number[]) => {
        onChange(newValue as number[]);
    };


    return (
      <>
          <Typography id="range-slider" gutterBottom>
              Double Range
          </Typography>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
          />
      </>
    );
}

export default SuperDoubleRange;