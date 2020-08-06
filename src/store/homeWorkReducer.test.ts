import {homeWorkReducer} from './homeWorkReducer.test';

test('user reducer should increment only age', () => {
    const startState = { id: 0, name: "Daniel", age: '37' };
    //стартовые данные
    const endState = ho(startState, { type: 'INCREMENT-AGE' })
    //засовываем в редьюсер стейт и инструкцию
    expect(endState.age).toBe(21);
    //ожидаем, что в финальном стейте 21 в ейдж
    expect(endState.childrenCount).toBe(2);
    //и что мы не задели другое свойство
});