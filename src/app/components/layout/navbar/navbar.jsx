"use client";
import Image from "next/image";
import { useState } from "react";
import Nav_link from "../../ui/nav_link/nav_link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.section
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
          <div
            onClick={() => setOpen(!open)}
            className="cursor-pointer px-3 py-4 border border-t-2 border-l-2 border-r-0 border-b-2 border-n-300 -mr-0.5 bg-background z-1"
          >
            <Image
              src="/assets/icons/nav_menu.svg"
              alt="nav_hamburger_menu"
              width={24}
              height={24}
            />
          </div>
          <div className="border border-l-2 border-n-300 h-screen p-section flex flex-col justify-between items-stretch bg-background">
            <div className="flex flex-col justify-start items-stretch gap-3">
              <Nav_link
                nav_link="https://webflow.com/templates/html/hauss-website-template"
                nav_text="home"
                variant="text"
              />
              <Nav_link
                nav_link="https://webflow.com/templates/html/hauss-website-template"
                nav_text="collections"
                variant="text"
              />
              <Nav_link
                nav_link="https://webflow.com/templates/html/hauss-website-template"
                nav_text="About"
                variant="text"
              />
              <Nav_link
                nav_link="https://webflow.com/templates/html/hauss-website-template"
                nav_text="Stockists"
                variant="text"
              />
            </div>
            <div className="flex flex-col justify-stretch items-start 2xl:gap-5 xl:gap-5 lg:gap-5 md:gap-5 sm:gap-1.5 gap-5">
              <div className="flex flex-row justify-between items-end w-full">
                <div className="relative 2xl:w-40 xl:w-40 lg:w-40 md:w-40 sm:w-20 w-40 2xl:h-15 xl:h-15 lg:h-15 md:h-15 sm:h-8 h-15">
                <Image
                  src="/assets/icons/nav_logo.svg"
                  alt="nav_logo"
                  fill
                />
                </div>
                <div className="flex flex-row justify-center items-end gap-2">
                  <Nav_link
                    nav_link="https://webflow.com/templates/html/hauss-website-template"
                    nav_icon="/assets/icons/In.svg"
                    variant="icon"
                  />
                  <Nav_link
                    nav_link="https://webflow.com/templates/html/hauss-website-template"
                    nav_icon="/assets/icons/x.svg"
                    variant="icon"
                  />
                  <Nav_link
                    nav_link="https://webflow.com/templates/html/hauss-website-template"
                    nav_icon="/assets/icons/ig.svg"
                    variant="icon"
                  />
                </div>
              </div>
              <Nav_link
                nav_link="https://webflow.com/templates/html/hauss-website-template"
                nav_icon="/assets/icons/arrow.svg"
                nav_text="inquired"
                variant="text-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
