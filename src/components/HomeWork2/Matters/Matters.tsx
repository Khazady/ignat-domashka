import React, {useState} from "react";
import classes from "./Matters.module.css";
import Button from "../../common/Button/Button";
import {EditableSpan} from "../../common/EditableSpan/EditableSpan";

type mattersType = {
    id: number
    title: string
    priority: "high" | "medium" | "low"
}

function Matters() {
    let mattersInit: Array<mattersType> = [
        {id: 1, title: "job", priority: "high"},
        {id: 2, title: "gym", priority: "medium"},
        {id: 3, title: "girlfriend", priority: "high"},
        {id: 4, title: "university", priority: "low"},
        {id: 5, title: "courses", priority: "high"}
    ];

    let [matters, setMatters] = useState<Array<mattersType>>(mattersInit);

    function priorityClassToggler(matter: mattersType) {
        return matter.priority === "high" ? classes.high : //В зависимости от приоритета лишки выбирается класс
          matter.priority === "medium" ? classes.medium :
            matter.priority === "low" ? classes.low :
              classes.inactive
    }

    let list = matters.map(function (matter) {
            return (
              <li className={classes.list} key={matter.id}>
                  <div className={`${classes.priority} ${priorityClassToggler(matter)}`}>{matter.title} {matter.priority}</div>
                  <Button className={classes.low} onClick={ () => {removeMatter(matter.id)}} text="X"/>
              </li>
            )
        });

    let selector = <li className={classes.list}>
        <span>Sort by priority </span>
        <Button onClick={() => {filterMatters("all")} } className={classes.inactive} text="All"/>
        <Button onClick={() => {filterMatters("high")} } className={classes.high} text="High"/>
        <Button onClick={() => {filterMatters("medium")} } className={classes.medium} text="Medium"/>
        <Button onClick={() => {filterMatters("low")} } className={classes.low} text="Low"/>
    </li>

    function removeMatter(id: number) {
        let removedMatters = matters.filter(matter => matter.id !== id);
        setMatters(removedMatters)
    }

    function filterMatters(priority: "high" | "medium" | "low" | "all") {
        let filteredMatters;
        priority === "all" ? filteredMatters=mattersInit :
          filteredMatters = mattersInit.filter(matter => matter.priority === priority); // фильтрованный стейт равен иницилазац. если значение алл
        setMatters(filteredMatters)
    }

    return (
      <ul>
          {list}
          {selector}
      </ul>
    )
}

export default Matters;