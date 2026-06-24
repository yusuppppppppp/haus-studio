"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation";
import Frozen_route from "../frozen_route/frozen_route";
import { EASE_IN_OUT } from "@/animations/ease_in_out/ease_in_out";

const calculateRandomBlockDelay = (rowIndex, totalRows) => {
    const blockDelay = Math.random() * 0.5;
    const rowDelay = (totalRows - rowIndex - 1) * 0.05;
    return blockDelay + rowDelay;
}

const STYLES = {
    wrapper: "fixed top-0 left-0 w-screen h-screen flex flex-col pointer-events-none z-99999",
    child: "w-full flex flex-1",
    block: "flex-1 bg-amber-00 -m-[0.5px]",
};

const TRANSITION = {
    duration: 0.5,
    ease: EASE_IN_OUT,
};

export default function PageTransition({ children }) {
    const currentPath = usePathname();

    const TOTAL_ROWS = 10;
    const BLOCKS_PER_ROW = 11;

    const rowList = Array.from({ length: TOTAL_ROWS });
    const blockList = Array.from({ length: BLOCKS_PER_ROW });

    return (
        <AnimatePresence mode="wait">
            <motion.div key={currentPath}>

                <Frozen_route>{children}</Frozen_route>

                <div className={STYLES.wrapper}>
                    {rowList.map((_, rowNumber) => (
                        <div className={STYLES.child} key={`in-row-${rowNumber}`}>
                            {blockList.map((_, blockNumber) => (
                                <motion.div
                                    key={`in-block-${blockNumber}`}
                                    initial={{ scaleY: 1 }}
                                    animate={{ scaleY: 0 }}
                                    exit={{ scaleY: 0 }}
                                    transition={{
                                        ...TRANSITION,
                                        delay: calculateRandomBlockDelay(rowNumber, TOTAL_ROWS),
                                    }}
                                    className={`${STYLES.block} origin-top`}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                <div className={STYLES.wrapper}>
                    {rowList.map((_, rowNumber) => (
                        <div className={STYLES.child} key={`in-block-${rowNumber}`}>
                            {blockList.map((_, blockNumber) => (
                                <motion.div
                                    key={`in-block-${blockNumber}`}
                                    initial={{ scaleY: 0 }}
                                    animate={{ scaleY: 0 }}
                                    exit={{ scaleY: 1 }}
                                    transition={{
                                        ...TRANSITION,
                                        delay: calculateRandomBlockDelay(rowNumber, TOTAL_ROWS),
                                    }}
                                    className={`${STYLES.block} origin-bottom`}
                                />
                            ))}
                        </div>
                    ))}
                </div>


            </motion.div>
        </AnimatePresence>
    )
}

