"use client"

import { useContext, useRef } from "react"
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime"

export default function Frozen_route({ children }) {
    const context = useContext(LayoutRouterContext);
    const frozen = useRef(context);

    if (!frozen.current) {
        return <>{children}</>;
    }

    return (
        <LayoutRouterContext value={frozen.current}>
            {children}
        </LayoutRouterContext>
    );
}