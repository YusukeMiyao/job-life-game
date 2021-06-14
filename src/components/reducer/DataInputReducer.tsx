export type State = {
  user1Inputed: number | string
  user2Inputed: number | string
  user3Inputed: number | string
  user4Inputed: number | string
}

export type Action = {
  type: "user1" | "user2" | "user3" | "user4" | "reset"
  payload: number | string
}

export const DataInputReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "user1":
      return { ...state, user1Inputed: action.payload }
    case "user2":
      return { ...state, user2Inputed: action.payload }
    case "user3":
      return { ...state, user3Inputed: action.payload }
    case "user4":
      return { ...state, user4Inputed: action.payload }
    case "reset":
      return {
        user1Inputed: "",
        user2Inputed: "",
        user3Inputed: "",
        user4Inputed: "",
      }
  }
}

// const init = (initInput: any) => {
//   console.log(initInput)
//   return initInput
// }
