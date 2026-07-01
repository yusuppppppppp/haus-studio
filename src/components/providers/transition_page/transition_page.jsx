"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { TransitionRouter } from "next-transition-router";
import { EASE_IN_OUT } from "@/animations/ease_in_out/ease_in_out";

const TOTAL_ROWS = 10;
const BLOCKS_PER_ROW = 11;

const calculateRandomBlockDelay = (rowIndex, totalRows) => {
  const blockDelay = Math.random() * 0.5;
  const rowDelay = (totalRows - rowIndex - 1) * 0.05;
  return blockDelay + rowDelay;
};

const STYLES = {
  wrapper:
    "fixed inset-0 w-screen h-screen flex flex-col pointer-events-none z-[99999]",
  child: "w-full flex flex-1",
  block: "flex-1 bg-amber-400 -m-[0.5px]",
};

const TRANSITION = {
  duration: 0.5,
  ease: EASE_IN_OUT,
};

function EnterLayer({ cycle, active, delayMap }) {
  if (!active) return null;

  return (
    <div className={STYLES.wrapper}>
      {Array.from({ length: TOTAL_ROWS }).map((_, rowNumber) => (
        <div className={STYLES.child} key={`enter-row-${cycle}-${rowNumber}`}>
          {Array.from({ length: BLOCKS_PER_ROW }).map((_, blockNumber) => (
            <motion.div
              key={`enter-block-${cycle}-${rowNumber}-${blockNumber}`}
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{
                ...TRANSITION,
                delay: delayMap[rowNumber][blockNumber],
              }}
              className={`${STYLES.block} origin-top`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function LeaveLayer({ cycle, active, delayMap }) {
  if (!active) return null;

  return (
    <div className={STYLES.wrapper}>
      {Array.from({ length: TOTAL_ROWS }).map((_, rowNumber) => (
        <div className={STYLES.child} key={`leave-row-${cycle}-${rowNumber}`}>
          {Array.from({ length: BLOCKS_PER_ROW }).map((_, blockNumber) => (
            <motion.div
              key={`leave-block-${cycle}-${rowNumber}-${blockNumber}`}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                ...TRANSITION,
                delay: delayMap[rowNumber][blockNumber],
              }}
              className={`${STYLES.block} origin-bottom`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function TransitionPage({ children }) {
  const [enterCycle, setEnterCycle] = useState(0);
  const [leaveCycle, setLeaveCycle] = useState(0);
  const [showEnter, setShowEnter] = useState(false);
  const [showLeave, setShowLeave] = useState(false);

  const delayMap = useMemo(() => {
    return Array.from({ length: TOTAL_ROWS }, (_, rowIndex) =>
      Array.from({ length: BLOCKS_PER_ROW }, () =>
        calculateRandomBlockDelay(rowIndex, TOTAL_ROWS)
      )
    );
  }, []);

  const maxDelay = useMemo(() => Math.max(...delayMap.flat()), [delayMap]);
  const totalDuration = (maxDelay + TRANSITION.duration) * 1000;

  return (
    <TransitionRouter
      auto
      leave={(next) => {
        setShowLeave(true);
        setLeaveCycle((prev) => prev + 1);

        setTimeout(() => {
          next();
        }, totalDuration);
      }}
      enter={(next) => {
        setShowLeave(false);
        setShowEnter(true);
        setEnterCycle((prev) => prev + 1);

        setTimeout(() => {
          setShowEnter(false);
          next();
        }, totalDuration);
      }}
    >
      {children}

      <EnterLayer
        cycle={enterCycle}
        active={showEnter}
        delayMap={delayMap}
      />

      <LeaveLayer
        cycle={leaveCycle}
        active={showLeave}
        delayMap={delayMap}
      />
    </TransitionRouter>
  );
}