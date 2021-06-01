export type State = {
  user1Inputed: number
  user2Inputed: number
  user3Inputed: number
  user4Inputed: number
}

export type Action = {
  type: "user1" | "user2" | "user3" | "user4"
  payload: number
}

export const DataInputReducer = (state: State, action: Action) => {
  console.log(state)
  switch (action.type) {
    case "user1":
      return { ...state, user1Inputed: action.payload }
    case "user2":
      return { ...state, user2Inputed: action.payload }
    case "user3":
      return { ...state, user3Inputed: action.payload }
    case "user4":
      return { ...state, user4Inputed: action.payload }
  }
}
