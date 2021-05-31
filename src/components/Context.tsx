import React, { useContext, useReducer, useState } from "react";
// import NameEntry from "./NameEntry";
import { userNameReducer } from "./reducer/UserNameReducer";
import { useHistory } from "react-router-dom";

export const AllContext = React.createContext({} as any);
export const useAllContext = () => useContext(AllContext);

const InitialUserNameState = {
  userName1: "",
  userName2: "",
  userName3: "",
  userName4: "",
};

export const AllContextProveider: React.FC = ({ children }) => {
  const history = useHistory();
  const handleLink = (path: any) => history.push(path);
  const [state, dispatch] = useReducer(userNameReducer, InitialUserNameState);
  //gitignore jsonData
  const [jsonData, setJsonData] = useState();

  const onSubmit = () => {
    handleLink("/game");
  };

  const fetchClient = () => {
    return fetch(
      "https://script.google.com/macros/s/AKfycbwciWzBsp-ilIUz6IUngpjMhAqzzi-TQlPRxVX-WWslhA-embNjEMjUq_7G5Yv41Hog/exec"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson, jsonData);
        setJsonData(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const value = {
    ...state,
    dispatch,
    onSubmit,
    fetchClient,
  };
  return <AllContext.Provider value={value}>{children}</AllContext.Provider>;
};
