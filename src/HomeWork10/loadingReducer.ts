const initState = {
    loading: false
};

export const loadingReducer = (state = initState, action: ActionsType) => {
    switch (action.type) {
        case "CHANGE-LOADING":
            debugger
            return {...state, loading: action.loading}
        default:
            return state;
    }
};

export const loadingAC = (loading: boolean) => ({type: "CHANGE-LOADING", loading} as const);

// types
export type loadingACType = ReturnType<typeof loadingAC>
export type ActionsType = | loadingACType