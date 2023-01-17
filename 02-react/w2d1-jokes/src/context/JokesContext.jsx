/* Reducer */
import initialJokes from "../data/jokes";
import jokesReducer from "./jokeReducer";

/* React */
import { createContext, useContext, useReducer } from "react";

export const JokesContext = createContext(null);
export const JokesDispatchContext = createContext(null);

/* Create Provider */
export function JokesProvider({ children }) {
  const [jokes, dispatch] = useReducer(jokesReducer, initialJokes);

  return (
    <JokesContext.Provider value={jokes}>
      <JokesDispatchContext.Provider value={dispatch}>
        {children}
      </JokesDispatchContext.Provider>
    </JokesContext.Provider>
  );
}

export function useJokes() {
  return useContext(JokesContext);
}

export function useJokesDispatch() {
  return useContext(JokesDispatchContext);
}
