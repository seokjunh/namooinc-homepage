import Link from "next/link";

type THeaderNav = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const navItems = [
  {
    label: "회사소개",
    href: "/company",
    submenus: [
      { label: "기업소개", href: "/company/intro" },
      { label: "CEO", href: "/company/ceo" },
      { label: "연혁", href: "/company/history" },
      { label: "비전", href: "/company/vision" },
    ],
  },
  {
    label: "솔루션",
    href: "/solution",
    submenus: [
      { label: "CORECODE", href: "/solution/corecode" },
      { label: "P2E", href: "/solution/p2e" },
      { label: "Q2E", href: "/solution/q2e" },
      { label: "S2E", href: "/solution/s2e" },
      { label: "U2E", href: "/solution/u2e" },
    ],
  },
  {
    label: "고객지원",
    href: "/support",
    submenus: [
      { label: "공지사항", href: "/support/notice" },
      { label: "FAQ", href: "/support/faq" },
      { label: "문의하기", href: "/support/inquiry" },
      { label: "자료실", href: "/support/downloads" },
    ],
  },
  {
    label: "인재채용",
    href: "/support",
    submenus: [
      { label: "채용정보", href: "/careers/jobs" },
      { label: "채용문의", href: "/careers/inquiry" },
    ],
  },
];

const DetailMenu = ({ onMouseEnter, onMouseLeave }: THeaderNav) => {
  return (
    <div
      className="w-full bg-white"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex justify-around border-t px-[30rem] py-5">
        {navItems.map(({ label, submenus }, index) => (
          <div
            key={label}
            className={`space-y-2 ${index !== navItems.length - 1 ? "border-r border-gray-200 pr-24" : ""}`}
          >
            <div className="font-pretendard text-lg font-bold">{label}</div>
            {submenus.map((submenu) => (
              <Link
                key={submenu.label}
                href={submenu.href}
                className="block py-2 hover:text-[#78b237]"
              >
                {submenu.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailMenu;
