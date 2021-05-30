export const userNameReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "userName1":
      console.log(state);
      return { ...state, userName1: action.payload };
    case "userName2":
      return { ...state, userName2: action.payload };
    case "userName3":
      return { ...state, userName3: action.payload };
    case "userName4":
      return { ...state, userName4: action.payload };
    default:
      throw new Error("userNameReducerでエラー発生");
  }
};

type State = {
  userName1: string;
  userName2: string;
  userName3: string;
  userName4: string;
};

type Action = {
  type: "userName1" | "userName2" | "userName3" | "userName4";
  payload: string;
};
