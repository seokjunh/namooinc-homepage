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
          <div className="flex flex-col items-center space-y-4 py-6 font-bold text-lg">
            <Link
              href="/company"
              className="underline-offset-4 hover:text-[#78b237] hover:underline"
              onClick={toggleMobileMenu}
            >
              회사소개
            </Link>
            <Link
              href="/solution"
              className="underline-offset-4 hover:text-[#78b237] hover:underline"
              onClick={toggleMobileMenu}
            >
              솔루션
            </Link>
            <Link
              href="/support"
              className="underline-offset-4 hover:text-[#78b237] hover:underline"
              onClick={toggleMobileMenu}
            >
              고객지원
            </Link>
            <Link
              href="/recruit"
              className="underline-offset-4 hover:text-[#78b237] hover:underline"
              onClick={toggleMobileMenu}
            >
              인재영입
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
