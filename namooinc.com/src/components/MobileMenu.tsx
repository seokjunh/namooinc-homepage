"use client";

import { useState } from "react";
import Menu from "../../public/svg/Menu";
import Link from "next/link";

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <button className="md:hidden" onClick={toggleMobileMenu}>
        <Menu />
      </button>

      {isMobileMenuOpen && (
        <div className="absolute top-full w-full bg-white text-black shadow-xl md:hidden">
          <div className="flex flex-col items-center space-y-4 py-6 font-bold">
            <Link
              href="/corecode"
              className="underline-offset-4 hover:text-[#78b237] hover:underline"
              onClick={toggleMobileMenu}
            >
              CORECODE
            </Link>
            <Link
              href="/solution"
              className="underline-offset-4 hover:text-[#78b237] hover:underline"
              onClick={toggleMobileMenu}
            >
              SOLUTION
            </Link>
            <Link
              href="/aboutus"
              className="underline-offset-4 hover:text-[#78b237] hover:underline"
              onClick={toggleMobileMenu}
            >
              ABOUT US
            </Link>
            <Link
              href="/support"
              className="underline-offset-4 hover:text-[#78b237] hover:underline"
              onClick={toggleMobileMenu}
            >
              SUPPORT
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
