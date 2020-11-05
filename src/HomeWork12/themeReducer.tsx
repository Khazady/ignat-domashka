const initState = {
    currentTheme: "dark"
};

export const themeReducer = (state = initState, action: changeThemeACType) => {
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, currentTheme: action.currentTheme}
        }
        default:
            return state;
    }
};

export const changeThemeAC = (currentTheme: 'dark'| 'red' | 'some') => ({type: "CHANGE-THEME", currentTheme} as const);

export type changeThemeACType = ReturnType<typeof changeThemeAC>