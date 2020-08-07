import React, { useState } from "react";
import {Button} from "@material-ui/core";
import {checkAC, homeWork8Reducer, sortAC} from "./homeWork8Reducer";

export function HomeWork8() {
    let [state, setState] = useState([
        {id: "1", name: "Daniel", age: 17},
        {id: "2", name: "Andrew", age: 25},
        {id: "3", name: "Michael", age: 43},
        {id: "4", name: "John", age: 12},
    ])
    let ascending = () => {
        setState(homeWork8Reducer(state, sortAC("up")))
    }

    let descending = () => {
        setState(homeWork8Reducer(state, sortAC("down")))
    }

    let check = () => {
        setState(homeWork8Reducer(state, checkAC("18")))
    }

    return (
      <>
          <div>{state.map(person => <div key={person.id}>{person.name} - {person.age} age</div>)}</div>
          <Button onClick={ascending}>sort asc</Button>
          <Button onClick={descending}>sort desc</Button>
          <Button onClick={check}>check adults</Button>

      </>
    )
}