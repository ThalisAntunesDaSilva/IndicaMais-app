import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

function ContextProvider({children}){
    const [token, setToken ] = useState("")


    return(
        <AuthContext.Provider value={{token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useContextProvider(){
    return useContext(AuthContext)
}