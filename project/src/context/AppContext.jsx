import React, { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const initialState = {
  showContactForm: false
};

function reducer(state, action) {

  switch (action.type) {

    case "SET_CONTACT":
      return {
        ...state,
        showContactForm: action.payload
      };

    case "TOGGLE_CONTACT":
      return {
        ...state,
        showContactForm: !state.showContactForm
      };

    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}