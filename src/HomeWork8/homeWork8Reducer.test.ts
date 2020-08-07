import {homeWork8Reducer, SORT, CHECK, sortAC, checkAC} from "./homeWork8Reducer";


test('homeWorkReducer should sort by name alphabetically in ascending order', () => {
    const startState = [
        {id: "1", name: "Daniel", age: 37},
        {id: "2", name: "Andrew", age: 25},
        {id: "3", name: "Michael", age: 43},
    ]
    //стартовые данные
    const endState = homeWork8Reducer(startState, sortAC("up"))
    //засовываем в редьюсер стейт и инструкцию
    expect(endState[0].name).toBe("Andrew");
    //ожидаем, что в финальном стейте 21 в ейдж
    expect(endState[2].name).toBe("Michael");
    //и что мы не задели другое свойство
});

test('homeWorkReducer should sort by name alphabetically in descending order', () => {
    const startState = [
        {id: "1", name: "Daniel", age: 37},
        {id: "2", name: "Andrew", age: 25},
        {id: "3", name: "Michael", age: 43},
    ]
    //стартовые данные
    const endState = homeWork8Reducer(startState, sortAC("down"))
    //засовываем в редьюсер стейт и инструкцию
    expect(endState[2].name).toBe("Andrew");
    //ожидаем, что в финальном стейте 21 в ейдж
    expect(endState[0].name).toBe("Michael");
    //и что мы не задели другое свойство
});

test('homeWorkReducer should return only adults', () => {
    const startState = [
        {id: "1", name: "Daniel", age: 17},
        {id: "2", name: "Andrew", age: 25},
        {id: "3", name: "Michael", age: 43},
        {id: "3", name: "John", age: 12},
    ]
    const endState = homeWork8Reducer(startState, checkAC("18"))
    expect(endState[0].age).toBe(25);
    expect(endState.map(person => person.age )[1]).toBe(43);
});