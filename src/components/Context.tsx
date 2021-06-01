import React, { useContext, useReducer, useState, useEffect } from "react"
// import NameEntry from "./NameEntry";
import { userNameReducer } from "./reducer/UserNameReducer"
import { useHistory } from "react-router-dom"
import {
  // DataInputReducer,
  DataReducer,
  // State,
  // Action,
} from "./reducer/DataReducer"

import { DataInputReducer } from "./reducer/DataInputReducer"

export const AllContext = React.createContext({} as any)
export const useAllContext = () => useContext(AllContext)

const InitialUserNameState = {
  userName1: "",
  userName2: "",
  userName3: "",
  userName4: "",
}

const InitialDataState = {
  user1: {
    jobPt: 0,
    money: 0,
    lovePt: 0,
    friendPt: 0,
    hobbyPt: 0,
    position: "平社員",
  },
  user2: {
    jobPt: 0,
    money: 0,
    lovePt: 0,
    friendPt: 0,
    hobbyPt: 0,
    position: "平社員",
  },
  user3: {
    jobPt: 0,
    money: 0,
    lovePt: 0,
    friendPt: 0,
    hobbyPt: 0,
    position: "平社員",
  },
  user4: {
    jobPt: 0,
    money: 0,
    lovePt: 0,
    friendPt: 0,
    hobbyPt: 0,
    position: "平社員",
  },
}

const initialInputedState = {
  user1Inputed: 0,
  user2Inputed: 0,
  user3Inputed: 0,
  user4Inputed: 0,
}

export const AllContextProveider: React.FC = ({ children }) => {
  const history = useHistory()
  const handleLink = (path: any) => history.push(path)

  const [userNameState, userNameDispatch] = useReducer(
    userNameReducer,
    InitialUserNameState
  )
  const [dataState, dataDispatch] = useReducer(DataReducer, InitialDataState)

  const [fetchData, setFetchData] = useState([])
  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbwciWzBsp-ilIUz6IUngpjMhAqzzi-TQlPRxVX-WWslhA-embNjEMjUq_7G5Yv41Hog/exec"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setFetchData(responseJson)
        console.log(fetchData, responseJson)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const [inputedState, inputedDispatch] = useReducer(
    DataInputReducer,
    initialInputedState
  )

  const onSubmit = () => {
    handleLink("/game")
  }

  const value = {
    ...userNameState,
    userNameDispatch,
    ...dataState,
    fetchData,
    dataDispatch,
    ...inputedState,
    inputedDispatch,
    onSubmit,
  }
  return <AllContext.Provider value={value}>{children}</AllContext.Provider>
}
