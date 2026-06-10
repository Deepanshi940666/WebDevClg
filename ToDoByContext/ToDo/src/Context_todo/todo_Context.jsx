import { createContext ,useReducer} from "react";

export const storeContext = createContext();

let Obj = {
    text: "",
    todos: [],
};

  function AddData(state, action) {
    if (action.type == "Input") {
      console.log("heyyy");
      return {
        ...state,
        text: action.payload,
      };
    } else if (action.type == "add") {
      // ...state,
      console.log("hiiiii");

      return {
        ...state,
        todos: [...state.todos, state.text],
        text:""
      };
    }
  }

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(AddData, Obj);

  return (
    <storeContext.Provider value={{ state, dispatch }}>
      {children}
    </storeContext.Provider>
  );
};

export default Context;