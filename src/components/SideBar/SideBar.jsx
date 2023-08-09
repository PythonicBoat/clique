import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaGamepad, FaAddressBook, FaToolbox } from "react-icons/fa";
import { BiCog } from "react-icons/bi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    // make the icon field an svg
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z" fill="white"/>
    <path d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z" fill="white"/>
    <path d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z" fill="white"/>
    <path d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z" fill="white"/>
    </svg>
    
  },
  {
    path: "/Resources",
    name: "Resources",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.5 10.25L21 12.5L12 17L3 12.5L7.5 10.25M16.5 15.25L21 17.5L12 22L3 17.5L7.5 15.25M12 3L21 7.5L12 12L3 7.5L12 3Z" stroke="#8C8C8C" stroke-width="2"/>
    </svg>,

  },
  {
    name: "Config",
    path: "/Config",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_30_1288)">
    <path d="M16 15C20.009 14.935 23 11.967 23 8C23 4.988 22.003 5.985 21 7C20.009 7.98 18 10 18 10L14 6C14 6 16.02 3.991 17 3C18.015 1.997 18.015 1 16 1C12.033 1 9.05295 3.991 8.99995 8C9.04195 8.976 8.99995 11 8.99995 11C7.11495 12.897 4.65995 15.353 2.99995 17C0.0679535 19.944 4.05595 23.932 6.99995 21C8.64995 19.338 11.113 16.875 13 15C13 15 15.024 14.958 16 15Z" stroke="#8C8C8C" stroke-width="2"/>
    </g>
    <defs>
    <clipPath id="clip0_30_1288">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>,
  },
  {
    path: "/Events",
    name: "Events",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 15.24 22.75 15.49 22.73 15.72C22.7 16.02 22.49 16.28 22.2 16.37C21.91 16.46 21.59 16.36 21.4 16.12C20.69 15.25 19.64 14.75 18.5 14.75C17.65 14.75 16.82 15.04 16.16 15.57C15.26 16.28 14.75 17.34 14.75 18.5C14.75 19.63 15.25 20.69 16.12 21.4C16.36 21.59 16.45 21.91 16.37 22.2C16.28 22.49 16.03 22.7 15.72 22.73C15.49 22.75 15.24 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H14.02C13.52 20.44 13.25 19.49 13.25 18.5C13.25 16.88 13.97 15.39 15.23 14.4C16.91 13.04 19.46 12.92 21.25 14.02V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="#7A7A7A"/>
    <path d="M21.48 7.85999H2.52002C2.11002 7.85999 1.77002 7.51999 1.77002 7.10999C1.77002 6.69999 2.11002 6.35999 2.52002 6.35999H21.48C21.89 6.35999 22.23 6.69999 22.23 7.10999C22.23 7.51999 21.9 7.85999 21.48 7.85999Z" fill="#7A7A7A"/>
    <path d="M8.52002 7.71997C8.11002 7.71997 7.77002 7.37997 7.77002 6.96997V2.10999C7.77002 1.69999 8.11002 1.35999 8.52002 1.35999C8.93002 1.35999 9.27002 1.69999 9.27002 2.10999V6.96997C9.27002 7.37997 8.93002 7.71997 8.52002 7.71997Z" fill="#7A7A7A"/>
    <path d="M15.48 7.27002C15.07 7.27002 14.73 6.93002 14.73 6.52002V2.10999C14.73 1.69999 15.07 1.35999 15.48 1.35999C15.89 1.35999 16.23 1.69999 16.23 2.10999V6.52002C16.23 6.94002 15.9 7.27002 15.48 7.27002Z" fill="#7A7A7A"/>
    <path d="M18.5 23.75C17.28 23.75 16.1 23.33 15.17 22.56C13.95 21.57 13.25 20.09 13.25 18.5C13.25 16.88 13.97 15.39 15.23 14.4C16.15 13.66 17.31 13.25 18.5 13.25C20.09 13.25 21.57 13.95 22.56 15.18C23.32 16.1 23.75 17.28 23.75 18.5C23.75 19.99 23.1 21.43 21.97 22.44C20.99 23.29 19.76 23.75 18.5 23.75ZM18.5 14.75C17.65 14.75 16.82 15.04 16.16 15.57C15.26 16.28 14.75 17.34 14.75 18.5C14.75 19.63 15.25 20.69 16.12 21.4C17.48 22.53 19.59 22.52 20.98 21.31C21.78 20.59 22.25 19.56 22.25 18.5C22.25 17.63 21.95 16.79 21.4 16.13C20.69 15.25 19.63 14.75 18.5 14.75Z" fill="#7A7A7A"/>
    <path d="M17.3798 20.38C17.1298 20.38 16.8798 20.25 16.7398 20.02C16.5298 19.66 16.6398 19.2 16.9998 18.99L18.0398 18.37V17.11C18.0398 16.7 18.3798 16.36 18.7898 16.36C19.1998 16.36 19.5398 16.7 19.5398 17.11V18.8C19.5398 19.06 19.3998 19.31 19.1798 19.44L17.7698 20.28C17.6398 20.34 17.5098 20.38 17.3798 20.38Z" fill="#7A7A7A"/>
    </svg>,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 15.75C9.93 15.75 8.25 14.07 8.25 12C8.25 9.93 9.93 8.25 12 8.25C14.07 8.25 15.75 9.93 15.75 12C15.75 14.07 14.07 15.75 12 15.75ZM12 9.75C10.76 9.75 9.75 10.76 9.75 12C9.75 13.24 10.76 14.25 12 14.25C13.24 14.25 14.25 13.24 14.25 12C14.25 10.76 13.24 9.75 12 9.75Z" fill="#7A7A7A"/>
    <path d="M15.21 22.19C15 22.19 14.79 22.16 14.58 22.11C13.96 21.94 13.44 21.55 13.11 21L12.99 20.8C12.4 19.78 11.59 19.78 11 20.8L10.89 20.99C10.56 21.55 10.04 21.95 9.42 22.11C8.79 22.28 8.14 22.19 7.59 21.86L5.87 20.87C5.26 20.52 4.82 19.95 4.63 19.26C4.45 18.57 4.54 17.86 4.89 17.25C5.18 16.74 5.26 16.28 5.09 15.99C4.92 15.7 4.49 15.53 3.9 15.53C2.44 15.53 1.25 14.34 1.25 12.88V11.12C1.25 9.66 2.44 8.47 3.9 8.47C4.49 8.47 4.92 8.3 5.09 8.01C5.26 7.72 5.19 7.26 4.89 6.75C4.54 6.14 4.45 5.42 4.63 4.74C4.81 4.05 5.25 3.48 5.87 3.13L7.6 2.14C8.73 1.47 10.22 1.86 10.9 3.01L11.02 3.21C11.61 4.23 12.42 4.23 13.01 3.21L13.12 3.02C13.8 1.86 15.29 1.47 16.43 2.15L18.15 3.14C18.76 3.49 19.2 4.06 19.39 4.75C19.57 5.44 19.48 6.15 19.13 6.76C18.84 7.27 18.76 7.73 18.93 8.02C19.1 8.31 19.53 8.48 20.12 8.48C21.58 8.48 22.77 9.67 22.77 11.13V12.89C22.77 14.35 21.58 15.54 20.12 15.54C19.53 15.54 19.1 15.71 18.93 16C18.76 16.29 18.83 16.75 19.13 17.26C19.48 17.87 19.58 18.59 19.39 19.27C19.21 19.96 18.77 20.53 18.15 20.88L16.42 21.87C16.04 22.08 15.63 22.19 15.21 22.19ZM12 18.49C12.89 18.49 13.72 19.05 14.29 20.04L14.4 20.23C14.52 20.44 14.72 20.59 14.96 20.65C15.2 20.71 15.44 20.68 15.64 20.56L17.37 19.56C17.63 19.41 17.83 19.16 17.91 18.86C17.99 18.56 17.95 18.25 17.8 17.99C17.23 17.01 17.16 16 17.6 15.23C18.04 14.46 18.95 14.02 20.09 14.02C20.73 14.02 21.24 13.51 21.24 12.87V11.11C21.24 10.48 20.73 9.96 20.09 9.96C18.95 9.96 18.04 9.52 17.6 8.75C17.16 7.98 17.23 6.97 17.8 5.99C17.95 5.73 17.99 5.42 17.91 5.12C17.83 4.82 17.64 4.58 17.38 4.42L15.65 3.43C15.22 3.17 14.65 3.32 14.39 3.76L14.28 3.95C13.71 4.94 12.88 5.5 11.99 5.5C11.1 5.5 10.27 4.94 9.7 3.95L9.59 3.75C9.34 3.33 8.78 3.18 8.35 3.43L6.62 4.43C6.36 4.58 6.16 4.83 6.08 5.13C6 5.43 6.04 5.74 6.19 6C6.76 6.98 6.83 7.99 6.39 8.76C5.95 9.53 5.04 9.97 3.9 9.97C3.26 9.97 2.75 10.48 2.75 11.12V12.88C2.75 13.51 3.26 14.03 3.9 14.03C5.04 14.03 5.95 14.47 6.39 15.24C6.83 16.01 6.76 17.02 6.19 18C6.04 18.26 6 18.57 6.08 18.87C6.16 19.17 6.35 19.41 6.61 19.57L8.34 20.56C8.55 20.69 8.8 20.72 9.03 20.66C9.27 20.6 9.47 20.44 9.6 20.23L9.71 20.04C10.28 19.06 11.11 18.49 12 18.49Z" fill="#7A7A7A"/>
    </svg>,    
  }
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "60px",

            transition: {
              duration: 0.5,
              type: "tween",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Clique
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;