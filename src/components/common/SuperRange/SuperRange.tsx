import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import styles from "./SuperRange.module.css";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type SuperRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: number[]) => void
    value: number
};

const SuperRange: React.FC<SuperRangePropsType> = ({type, onChange, onChangeRange,className, value, ...restProps}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);

        onChangeRange && onChangeRange([+e.currentTarget.value]);
    }

    const finalRangeClassName = `${styles.range} ${value < 50 ? styles.small : styles.big}`;

    return (
      <>
          <input
            type={"range"}
            onChange={onChangeCallback}
            className={finalRangeClassName}
            {...restProps}
          />
      </>
    );
}

export default SuperRange;