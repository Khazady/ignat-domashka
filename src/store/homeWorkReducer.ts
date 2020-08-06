
export type homeWorkReducerStateType = Array<{ id: string, name: string, age: number }>;

export type homeWorkReducerActionType = { type: string, payload: any }

export const homeWorkReducer = (state: homeWorkReducerStateType, action: homeWorkReducerActionType) => {
      return [];
  };