"use client"

import { createContext, useContext, useState } from "react"

const PageReadyContext = createContext({
    isReady: false,
    setIsReady: () => {},
});

export function Loading_Context({ children }) {
    const [ isReady, setIsReady ] = useState(false);

    return (
        <PageReadyContext.Provider value={{ isReady, setIsReady }}>
            {children}
        </PageReadyContext.Provider>
    );
}

export function usePageReady() {
    return useContext(PageReadyContext);
}