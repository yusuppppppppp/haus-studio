"use client";
import Image from "next/image";
import { useState } from "react";
import Nav_link from "./nav_link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar({ navbar }) {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";

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
            className="cursor-pointer shrink-0 relative px-3 py-4 border border-t-2 border-l-2 border-r-0 border-b-2 border-n-300 -mr-0.5 bg-background z-1"
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
              {navbar?.icons?.close ? (
                <Image
                  src={navbar.icons.close}
                  alt="nav_hamburger_menu"
                  width={24}
                  height={24}
                  className="sm:size-6 size-4 object-contain"
                />
              ) : null}
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
              className="absolute inset-0 flex items-center justify-center"
            >
              {navbar?.icons?.open ? (
                <Image
                  src={navbar.icons.open}
                  alt="nav_hamburger_menu_x"
                  width={24}
                  height={24}
                  className="size-4 object-contain"
                />
              ) : null}
            </motion.div>
          </motion.div>

          <div className="border border-l-2 border-n-300 h-screen p-section flex flex-col justify-between items-stretch bg-background">

            <div className="flex flex-col justify-start items-stretch gap-3">
              {navbar?.menu_links?.map((item, index) => {
                if (!isHome && index > 0) return null;

                return (
                  <Nav_link
                    key={index}
                    nav_link={item.link}
                    nav_text={item.text}
                    variant={item.variant}
                    setOpen={setOpen}
                  />
                );
              })}
            </div>

            <div className="flex flex-col justify-stretch items-start md:gap-5 sm:gap-1.5 gap-5">
              <div className="flex flex-row justify-between items-end w-full">
                <div className="relative md:w-40 sm:w-20 w-30 md:h-15 sm:h-8 h-10">
                  {navbar?.logo ? (
                    <Image
                      src={navbar.logo}
                      alt="nav_logo"
                      fill
                      sizes="(max-width: 768px) 5rem, 10rem"
                    />
                  ) : null}
                </div>

                <div className="flex flex-row justify-center items-end gap-2">
                  {navbar?.social_links
                    ?.filter((item) => item.variant === "icon")
                    ?.map((item, index) => (
                      <Nav_link
                        key={index}
                        nav_link={item.link}
                        nav_icon={item.icon}
                        variant={item.variant}
                        setOpen={setOpen}
                      />
                    ))}
                </div>
              </div>

              {navbar?.social_links
                ?.filter((item) => item.variant === "text-icon")
                ?.map((item, index) => (
                  <Nav_link
                    key={index}
                    nav_link={item.link}
                    nav_icon={item.icon}
                    nav_text={item.text}
                    variant={item.variant}
                    setOpen={setOpen}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}