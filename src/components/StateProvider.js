import React, { createContext, useReducer } from "react";

export const theContext = createContext();
const StateProvider = ({reducer,initialState,children}) => {
  return (
    <>
      <theContext.Provider value={useReducer(reducer,initialState)}>
            {children}
      </theContext.Provider>
    </>
  );
};

export default StateProvider;
// how to use value in component
// export const useStateValue=()=>useContext(theContext);
