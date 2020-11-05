import React, {useState} from "react";
import styles from "./HomeWork12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../app/store";
import {changeThemeAC} from "./themeReducer";
import {Select} from "../components/common/Select/Select";
import Button from "../components/common/Button/Button";

type themesType = {
    value: 'dark' | 'red' | 'some'
    title: string
}


export const themes: themesType[] = [
    {value: 'dark', title: "dark"},
    {value: 'red', title: 'red'},
    {value: 'some', title: "some"}]

export function HomeWork12() {
    debugger
    const theme = useSelector<AppStoreType, string>(state => state.currentTheme.currentTheme)
    const [value, setValue] = useState(themes[0].value)
    const dispatch = useDispatch();
    const OnChange = () => dispatch(changeThemeAC(value))
    return (
      <div className={styles[theme]}>
          <hr/>
          <span className={styles[theme + '-text']}>
                homeworks 12
            </span>
          <hr/>
          <Select items={themes} value={value} onChange={setValue}/>
          <Button onClick={OnChange} text={'change theme'}/>
      </div>
    );
}
