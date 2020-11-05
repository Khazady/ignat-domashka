const initState = {
    loading: false
};

export const loadingReducer = (state = initState, action: loadingACType) => {
    switch (action.type) {
        case "CHANGE-LOADING":
            return {...state, loading: action.loading}
        default:
            return state;
    }
};

export const loadingAC = (loading: boolean) => ({type: "CHANGE-LOADING", loading} as const);

// types
export type loadingACType = ReturnType<typeof loadingAC>