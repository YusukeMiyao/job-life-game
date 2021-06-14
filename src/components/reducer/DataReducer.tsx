// import { useAllContext } from "../Context";
// import { useState, useEffect } from "react"
// import { useAllContext } from "../Context"

export const DataReducer = (
  state: State<{
    jobPt: number
    money: number
    lovePt: number
    friendPt: number
    hobbyPt: number
    position: string
  }>,
  action: Action
) => {
  {
    console.log(state)
  }
  // const context = useAllContext()
  const fetchData = action.fetchData

  const stateUser1 = state.user1
  const stateUser2 = state.user2
  const stateUser3 = state.user3
  const stateUser4 = state.user4
  const inputedNumber: number = Number(action.inputedNum)

  switch (action.type) {
    case "user1":
      return {
        ...state,

        user1: {
          jobPt: (state.user1.jobPt += fetchData[inputedNumber][1] / 2),
          money: (stateUser1.money += fetchData[inputedNumber][2] / 2),
          lovePt: (stateUser1.lovePt += fetchData[inputedNumber][3] / 2),
          friendPt: (stateUser1.friendPt += fetchData[inputedNumber][4] / 2),
          hobbyPt: (stateUser1.hobbyPt += fetchData[inputedNumber][5] / 2),
          position: (stateUser1.position =
            fetchData[inputedNumber][6] === undefined
              ? stateUser1.position
              : fetchData[inputedNumber][6]),
        },
      }
    case "user2":
      return {
        ...state,
        user2: {
          jobPt: (stateUser2.jobPt += fetchData[inputedNumber][1] / 2),
          money: (stateUser2.money += fetchData[inputedNumber][2] / 2),
          lovePt: (stateUser2.lovePt += fetchData[inputedNumber][3] / 2),
          friendPt: (stateUser2.friendPt += fetchData[inputedNumber][4] / 2),
          hobbyPt: (stateUser2.hobbyPt += fetchData[inputedNumber][5] / 2),
          position: (stateUser2.position =
            fetchData[inputedNumber][6] === undefined
              ? stateUser2.position
              : fetchData[inputedNumber][6]),
        },
      }
    case "user3":
      return {
        ...state,
        user3: {
          jobPt: (stateUser3.jobPt += fetchData[inputedNumber][1] / 2),
          money: (stateUser3.money += fetchData[inputedNumber][2] / 2),
          lovePt: (stateUser3.lovePt += fetchData[inputedNumber][3] / 2),
          friendPt: (stateUser3.friendPt += fetchData[inputedNumber][4] / 2),
          hobbyPt: (stateUser3.hobbyPt += fetchData[inputedNumber][5] / 2),
          position: (stateUser3.position =
            fetchData[inputedNumber][6] === undefined
              ? stateUser3.position
              : fetchData[inputedNumber][6]),
        },
      }
    case "user4":
      return {
        ...state,
        user4: {
          jobPt: (stateUser4.jobPt += fetchData[inputedNumber][1] / 2),
          money: (stateUser4.money += fetchData[inputedNumber][2] / 2),
          lovePt: (stateUser4.lovePt += fetchData[inputedNumber][3] / 2),
          friendPt: (stateUser4.friendPt += fetchData[inputedNumber][4]) / 2,
          hobbyPt: (stateUser4.hobbyPt += fetchData[inputedNumber][5] / 2),
          position: (stateUser4.position =
            fetchData[inputedNumber][6] === undefined
              ? stateUser4.position
              : fetchData[inputedNumber][6]),
        },
      }
    default:
      throw new Error()
  }
}

export type State<T> = {
  user1: T
  user2: T
  user3: T
  user4: T
}

// type inputedState = {
//   user1Inputed: number;
//   user2Inputed: number;
//   user3Inputed: number;
//   user4Inputed: number;
// };

export type Action = {
  type: "user1" | "user2" | "user3" | "user4"
  fetchData: any
  inputedNum: number
}

// export const DataInputReducer = (
//   state: State<number>,
//   action: Action<number>
// ) => {
//   switch (action.type) {
//     case "user1":
//       return { user1: action.payload }
//     case "user2":
//       return { user2: action.payload }
//     case "user3":
//       return { user3: action.payload }
//     case "user4":
//       return { user4: action.payload }
//   }
// }
