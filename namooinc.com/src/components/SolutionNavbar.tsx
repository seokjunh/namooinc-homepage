"use client";

import { useEffect, useState } from "react";

const SolutionNavbar = ({
  scrollRef,
}: {
  scrollRef: React.RefObject<HTMLDivElement[]>;
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  const menuItems = [
    "Concept",
    "Overview",
    "Application Stack",
    "Product Composition",
    "Key Features",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (index: number) => {
    setActiveTab(index);
    
    if (scrollRef.current && scrollRef.current[index]) {
      scrollRef.current[index].scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`grid h-auto min-h-[3.75rem] grid-cols-2 gap-4 bg-black p-4 text-white sm:px-[4.375rem] md:flex md:h-[3.75rem] md:items-center md:gap-6 lg:px-[22.5rem] ${isFixed ? "fixed top-[6.25rem] z-50 w-full" : ""}`}
    >
      {menuItems.map((item, idx) => (
        <div
          key={idx}
          className={`flex cursor-pointer items-center justify-center rounded-3xl p-2 ${
            activeTab === idx ? "bg-white text-black" : ""
          }`}
          onClick={() => handleMenuItemClick(idx)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default SolutionNavbar;
