import React, { useContext, useReducer } from "react";
import NameEntry from "./NameEntry";
import { userNameReducer } from "./reducer/UserNameReducer";

const InitialUserNameState = {
  userName1: "",
  userName2: "",
  userName3: "",
  userName4: "",
};

export const AllContext = React.createContext({} as any);
export const useAllContext = () => useContext(AllContext);

export const AllContextProveider: React.FC = () => {
  const [state, dispatch] = useReducer(userNameReducer, InitialUserNameState);

  const value = {
    ...state,
    dispatch,
  };
  return (
    <AllContext.Provider value={value}>
      <NameEntry />
    </AllContext.Provider>
  );
};
