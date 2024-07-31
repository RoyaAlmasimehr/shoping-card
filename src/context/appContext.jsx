import { createContext, useReducer } from "react";
import { reducer } from "../reducer";
export const AppContext = createContext();



function AppProvider({ children }) {
  const initialState = { addedToCart: 0, addedProducts: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
