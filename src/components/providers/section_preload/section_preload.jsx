"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { lenis } from "@/lib/lenis"
import { usePageReady } from "@/context/loading_context";

export default function Section_preload({ isLoading, preload }) {
  const { setIsReady } = usePageReady();

  useEffect(() => {
    if (isLoading) {
      document.documentElement.classList.add("overflow-hidden");
      document.body.classList.add("overflow-hidden");
      lenis?.stop();
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          document.documentElement.classList.remove("overflow-hidden");
          document.body.classList.remove("overflow-hidden");
          lenis?.start();
          setIsReady(true);
        }}
      >
        {isLoading && (
          <motion.section
            initial={{ top: "0%" }}
            exit={{ top: ["0%", "-5%", "-100%"] }}
            transition={{
              delay: 1.4,
              duration: 1.6,
              times: [0, 0.7, 1],
              ease: [0.65, 0, 0.35, 1],
            }}
            className="fixed z-9999 inset-0 w-full h-full will-change-transform bg-foreground"
          >
            <div className="w-full h-full">
              <div className="w-full h-screen flex flex-col justify-center items-center">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: 0.7 }}
                  transition={{
                    delay: 1.2,
                    duration: 1.6,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  className="relative flex flex-col justify-center items-stretch"
                >
                  <Image
                    src={
                      preload?.preload_logo_normal ||
                      "/assets/images/preload_logo_normal.svg"
                    }
                    alt="preload_logo"
                    width={60}
                    height={60}
                    priority
                    className="w-15 h-15"
                  />
                  {/* fill animation */}
                  <motion.div
                    initial={{ clipPath: "inset(100% 0 0 0)" }}
                    animate={{ clipPath: "inset(0% 0 0 0)" }}
                    transition={{
                      duration: 2,
                      ease: [0.65, 0, 0.35, 1],
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={
                        preload?.preload_logo_fill ||
                        "/assets/images/preload_logo_animate.svg"
                      }
                      alt="preload_logo_fill"
                      width={60}
                      height={60}
                      priority
                      className="w-15 h-15"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
