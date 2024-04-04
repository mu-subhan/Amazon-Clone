import React , {createContext, useContext,useReducer} from 'react';

// prepapring the data layer
export const StateContext =createContext();
// wrap our component provide the provider
export const StateProvider = ({reducer,initialState,children}) =>(
    <StateContext.Provider value = {useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

// this is how we can use it inside a componet
export const useStateValue =()=> useContext(StateContext);