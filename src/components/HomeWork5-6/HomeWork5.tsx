import React, {useState} from "react";
import {EditableSpan} from "../common/EditableSpan/EditableSpan";

export function HomeWork5() {
    const [text, setText] = useState<string>("CLICK ME");

    return (
          <EditableSpan value={text} onChange={setText}/>
    )
}