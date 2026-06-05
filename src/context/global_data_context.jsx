"use client"

import { createContext, useContext } from "react"

export const Global_data_context = createContext(null);

export function useGlobalData() {
    return useContext(Global_data_context);
}