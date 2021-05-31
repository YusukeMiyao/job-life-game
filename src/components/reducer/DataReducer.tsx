// import { useAllContext } from "../Context";
import { useState, useEffect } from "react";

export const DataReducer = (state: State, action: Action) => {
  const [fetchData, setFetchData] = useState([]);
  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbwciWzBsp-ilIUz6IUngpjMhAqzzi-TQlPRxVX-WWslhA-embNjEMjUq_7G5Yv41Hog/exec"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson, fetchData);
        setFetchData(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const stateUser1 = state.user1;
  const stateUser2 = state.user2;
  const stateUser3 = state.user3;
  const stateUser4 = state.user4;
  const inputedNumber: number = Number(action.payload);

  switch (action.type) {
    case "user1":
      console.log(state);
      return {
        ...state,
        user1: {
          JobPt: (stateUser1.jobPt += fetchData[inputedNumber][1]),
          Money: (stateUser1.money += fetchData[inputedNumber][2]),
          lovePt: (stateUser1.lovePt += fetchData[inputedNumber][3]),
          friendPt: (stateUser1.friendPt += fetchData[inputedNumber][4]),
          hobbyPt: (stateUser1.hobbyPt += fetchData[inputedNumber][5]),
          position: (stateUser1.position =
            fetchData[inputedNumber][6] === undefined
              ? stateUser1.position
              : fetchData[inputedNumber][6]),
        },
      };
    case "user2":
      return {
        ...state,
        user2: {
          JobPt: (stateUser2.jobPt += fetchData[inputedNumber][1]),
          Money: (stateUser2.money += fetchData[inputedNumber][2]),
          lovePt: (stateUser2.lovePt += fetchData[inputedNumber][3]),
          friendPt: (stateUser2.friendPt += fetchData[inputedNumber][4]),
          hobbyPt: (stateUser2.hobbyPt += fetchData[inputedNumber][5]),
          position: (stateUser2.position =
            fetchData[inputedNumber][6] === undefined
              ? stateUser2.position
              : fetchData[inputedNumber][6]),
        },
      };
    case "user3":
      return {
        ...state,
        user3: {
          JobPt: (stateUser3.jobPt += fetchData[inputedNumber][1]),
          Money: (stateUser3.money += fetchData[inputedNumber][2]),
          lovePt: (stateUser3.lovePt += fetchData[inputedNumber][3]),
          friendPt: (stateUser3.friendPt += fetchData[inputedNumber][4]),
          hobbyPt: (stateUser3.hobbyPt += fetchData[inputedNumber][5]),
          position: (stateUser3.position =
            fetchData[inputedNumber][6] === undefined
              ? stateUser3.position
              : fetchData[inputedNumber][6]),
        },
      };
    case "user4":
      return {
        ...state,
        user4: {
          JobPt: (stateUser4.jobPt += fetchData[inputedNumber][1]),
          Money: (stateUser4.money += fetchData[inputedNumber][2]),
          lovePt: (stateUser4.lovePt += fetchData[inputedNumber][3]),
          friendPt: (stateUser4.friendPt += fetchData[inputedNumber][4]),
          hobbyPt: (stateUser4.hobbyPt += fetchData[inputedNumber][5]),
          position: (stateUser4.position =
            fetchData[inputedNumber][6] === undefined
              ? stateUser4.position
              : fetchData[inputedNumber][6]),
        },
      };
    default:
      throw new Error("userNameReducerでエラー発生");
  }
};

type State = {
  user1: {
    jobPt: number;
    money: number;
    lovePt: number;
    friendPt: number;
    hobbyPt: number;
    position: string;
  };
  user2: {
    jobPt: number;
    money: number;
    lovePt: number;
    friendPt: number;
    hobbyPt: number;
    position: string;
  };
  user3: {
    jobPt: number;
    money: number;
    lovePt: number;
    friendPt: number;
    hobbyPt: number;
    position: string;
  };
  user4: {
    jobPt: number;
    money: number;
    lovePt: number;
    friendPt: number;
    hobbyPt: number;
    position: string;
  };
};

type Action = {
  type: "user1" | "user2" | "user3" | "user4";
  payload: string;
};
