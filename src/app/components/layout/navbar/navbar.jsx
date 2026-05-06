"use client";
import Image from "next/image";
import { useState } from "react";
import Nav_link from "../../ui/nav_link/nav_link";
import { animate, motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.nav
      initial={{ x: "89%" }}
      animate={{ x: open ? "0%" : "89%" }}
      transition={{
        type: "spring",
        stiffness: 130,
        damping: 15,
      }}
      className="h-screen z-99 fixed left-auto right-0 top-0 bottom-0"
    >
      <div className="w-full h-full mx-auto">
        <div className="h-full flex flex-row justify-center items-center">
          <motion.div
            onClick={() => setOpen(!open)}
            animate={open ? "open" : "closed"}
            className="cursor-pointer relative px-3 py-4 border border-t-2 border-l-2 border-r-0 border-b-2 border-n-300 -mr-0.5 bg-background z-1"
          >
            <motion.div
              variants={{
                closed: { opacity: 1, visibility: "visible" },
                open: { opacity: 0, visibility: "hidden" },
              }}
              transition={{
                duration: 0.4,
                ease: [0.65, 0, 0.35, 1],
              }}
              className="w-full h-full"
            >
              <Image
                src="/assets/icons/nav_menu.svg"
                alt="nav_hamburger_menu"
                width={24}
                height={24}
              />
            </motion.div>
            <motion.div
              variants={{
                closed: { opacity: 0, visibility: "hidden" },
                open: { opacity: 1, visibility: "visible" },
              }}
              transition={{
                duration: 0.4,
                ease: [0.65, 0, 0.35, 1],
              }}
              className="w-full h-full absolute inset-y-3.5 inset-x-3"
            >
              <Image
                src="/assets/icons/close.svg"
                alt="nav_hamburger_menu"
                width={22.5}
                height={22.5}
              />
            </motion.div>
          </motion.div>
          <div className="border border-l-2 border-n-300 h-screen p-section flex flex-col justify-between items-stretch bg-background">
            <div className="flex flex-col justify-start items-stretch gap-3">
              <Nav_link
                nav_link="/#section_hero"
                nav_text="home"
                variant="text"
                setOpen={setOpen}
              />
              <Nav_link
                nav_link="/#collection_main"
                nav_text="collections"
                variant="text"
                setOpen={setOpen}
              />
              <Nav_link
                nav_link="/#section_about"
                nav_text="About"
                variant="text"
                setOpen={setOpen}
              />
              <Nav_link
                nav_link="/#section_stockists"
                nav_text="Stockists"
                variant="text"
                setOpen={setOpen}
              />
            </div>
            <div className="flex flex-col justify-stretch items-start 2xl:gap-5 xl:gap-5 lg:gap-5 md:gap-5 sm:gap-1.5 gap-5">
              <div className="flex flex-row justify-between items-end w-full">
                <div className="relative 2xl:w-40 xl:w-40 lg:w-40 md:w-40 sm:w-20 w-40 2xl:h-15 xl:h-15 lg:h-15 md:h-15 sm:h-8 h-15">
                  <Image src="/assets/icons/nav_logo.svg" alt="nav_logo" fill />
                </div>
                <div className="flex flex-row justify-center items-end gap-2">
                  <Nav_link
                    nav_link="https://webflow.com/templates/html/hauss-website-template"
                    nav_icon="/assets/icons/In.svg"
                    variant="icon"
                    setOpen={setOpen}
                  />
                  <Nav_link
                    nav_link="https://webflow.com/templates/html/hauss-website-template"
                    nav_icon="/assets/icons/x.svg"
                    variant="icon"
                    setOpen={setOpen}
                  />
                  <Nav_link
                    nav_link="https://webflow.com/templates/html/hauss-website-template"
                    nav_icon="/assets/icons/ig.svg"
                    variant="icon"
                    setOpen={setOpen}
                  />
                </div>
              </div>
              <Nav_link
                nav_link="https://webflow.com/templates/html/hauss-website-template"
                nav_icon="/assets/icons/arrow.svg"
                nav_text="inquired"
                variant="text-icon"
                setOpen={setOpen}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
