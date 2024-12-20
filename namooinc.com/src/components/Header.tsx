"use client";

import MobileMenu from "./MobileMenu";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import { useEffect, useState } from "react";
import DetailMenu from "./DetailMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDetailMenu, setShowDetailMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => setShowDetailMenu(true);
  const handleMouseLeave = () => setShowDetailMenu(false);

  return (
    <>
      <div
        className={`fixed z-10 flex h-[6.25rem] w-full items-center justify-around ${
          isScrolled || showDetailMenu
            ? "bg-white"
            : "bg-transparent text-white"
        }`}
      >
        <HeaderLogo />
        <HeaderNav onMouseEnter={handleMouseEnter} />
        <MobileMenu />
      </div>

      <div
        className={`fixed left-0 top-[6.25rem] z-[5] w-full transition-transform duration-300 ${
          showDetailMenu ? "translate-y-0" : "hidden -translate-y-full"
        }`}
      >
        <DetailMenu
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </>
  );
};

export default Header;
