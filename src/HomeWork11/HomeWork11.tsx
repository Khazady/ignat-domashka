import React, {useState} from "react";
import SuperRange from "../components/common/SuperRange/SuperRange";
import SuperDoubleRange from "../components/common/SuperDoubleRange/SuperDoubleRange";

export function HomeWork11() {
    const [value, setValue] = useState<number[]>([0, 100]);

    return (
      <div>
          <div>
              <span>{value[0]}</span>
              <SuperRange value={value[0]} onChangeRange={setValue}/>
          </div>

          <div>
              <span>{value[0]}</span>
              <SuperDoubleRange
                value={[value[0], value[1]]} onChange={setValue}
              />
              <span>{value[1]}</span>
          </div>
      </div>
    );
}