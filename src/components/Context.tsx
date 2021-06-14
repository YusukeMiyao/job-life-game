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

export const initialInputedState = {
  user1Inputed: "",
  user2Inputed: "",
  user3Inputed: "",
  user4Inputed: "",
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
      "https://script.google.com/macros/s/AKfycbzotiTjhxYNzf-1ag-dafyyYqzwhmiJlxDqf-aqIkqsqHwi3ERyVHUs51J1BxqGfO1R/exec"
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

  const onClickGameEnd = () => {
    handleLink("/awards")
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
    onClickGameEnd,
  }
  return <AllContext.Provider value={value}>{children}</AllContext.Provider>
}
