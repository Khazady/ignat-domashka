export type homeWorkReducerStateType =  Array< {id: string, name: string, age: number} >
export type homeWorkReducerActionType = { type: string, payload: any }

export const SORT = "SORT"
export const CHECK = "CHECK"


export const homeWork8Reducer = (state: homeWorkReducerStateType, action: homeWorkReducerActionType) => {
    switch (action.type) {
        case SORT:
            switch (action.payload) {
                case "up":
                  let Sstate = [...state.map(p => p).sort((a, b) => a.name > b.name ? 1 : -1)]
                  //return [...state.sort((a, b) => a.name > b.name ? 1 : -1)]
                    return Sstate
                case "down":
                    return [...state.sort((a, b) => a.name > b.name ? -1 : 1)]
                default:
                    return state
            }
        case CHECK:
            switch (action.payload) {
                case "18":
                    return [...state.filter(person => person.age >= 18)]
                default:
                    return state
            }
        default:
            return state
    }

};

export const sortAC = (payload: string) => ({type: SORT, payload} as const)
export const checkAC = (payload: string) => ({type: CHECK, payload} as const)