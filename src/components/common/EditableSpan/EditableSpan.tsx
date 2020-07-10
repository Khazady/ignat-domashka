import React, {useState, ChangeEvent, KeyboardEvent} from "react";
import Input from "../Input/Input";

type EditableSpanPropsType = {
    value: string
    onChange: (newTitle: string) => void
}

export function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false);
    const activateEditMode = () => {
        setEditMode(true);
        props.onChange(props.value);
    }

    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(props.value)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => props.onChange(e.currentTarget.value);
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => e.charCode === 13 && activateViewMode();

    return editMode
      ? <Input value={props.value}
               autoFocus
               onBlur={() => activateViewMode()}
               onChange={onChangeHandler}
               onKeyPress={onKeyPressHandler}
      />
      : <span onDoubleClick={() => activateEditMode()}>{props.value}</span>
}