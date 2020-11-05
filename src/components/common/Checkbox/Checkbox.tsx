import React, {ChangeEvent} from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export type CheckboxProps = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    labelText: string
    checked: boolean
};

function MyCheckbox(props: CheckboxProps) {
    return (
          <FormControlLabel label={props.labelText} control={<Checkbox color="primary" checked={props.checked} onChange={props.onChange}/>}/>
    )
}

export default MyCheckbox;