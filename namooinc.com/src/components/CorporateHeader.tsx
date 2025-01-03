"use client";

import { useState } from "react";
import DetailMenu from "./DetailMenu";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import MobileMenu from "./MobileMenu";

const CorporateHeader = () => {
  const [showDetailMenu, setShowDetailMenu] = useState(false);

  const handleMouseEnter = () => setShowDetailMenu(true);
  const handleMouseLeave = () => setShowDetailMenu(false);

  return (
    <div>
      <div className="fixed z-10 flex h-[6.25rem] w-full items-center justify-around">
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
    </div>
  );
};
export default CorporateHeader;
