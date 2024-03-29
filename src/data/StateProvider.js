//Use of React Context API similar to redux

import React, {createContext, useContext, useReducer} from "react"

//Prepares the dataLayer
export const StateContext = createContext();

// Wrap our App and provide the Data layer
export const Stateprovider = ({reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
  </StateContext.Provider>
);

//Pull information from the data layer
export const useStateValue = () => useContext(StateContext);