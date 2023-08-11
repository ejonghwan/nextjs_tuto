import { createContext, useContext, useState } from 'react';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [LoginInfo, setLoginInfo] = useState({ displayName: "", uid: "" })
    return (
        <GlobalContext.Provider value={{ LoginInfo, setLoginInfo }}>
            {children}
        </GlobalContext.Provider>
    )
}

export function useGlobalData() {
    const globalContext = useContext(GlobalContext);
    if(!globalContext) throw new Error('useGlobal data hook은 GloabalProvider 컴포넌트 안에서만 호출 가능');
    return globalContext;
}