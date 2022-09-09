import React, { createContext, useContext, useReduce } from "react"

export const StateContext = createContext()

export const StateProvider = ({ reduce, initialState, children }) => {
    <StateContext.Provider value={useReduce(reduce, initialState)}>
        {children}
    </StateContext.Provider>
}

export const useStateValue=()=>useContext(StateProvider)