import Link from "next/link";

type THeaderNav = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const navItems = [
  {
    label: "CORECODE",
    href: "/corecode",
    submenus: [
      { label: "Core Features", href: "/corecode/features" },
      { label: "Pricing", href: "/corecode/pricing" },
      { label: "Documentation", href: "/corecode/docs" },
    ],
  },
  {
    label: "SOLUTION",
    href: "/solution",
    submenus: [
      { label: "Industry Solutions", href: "/solution/industries" },
      { label: "Case Studies", href: "/solution/cases" },
      { label: "Integration", href: "/solution/integration" },
    ],
  },
  {
    label: "ABOUT US",
    href: "/aboutus",
    submenus: [
      { label: "Our Team", href: "/aboutus/team" },
      { label: "Company History", href: "/aboutus/history" },
      { label: "Careers", href: "/aboutus/careers" },
    ],
  },
  {
    label: "SUPPORT",
    href: "/support",
    submenus: [
      { label: "Help Center", href: "/support/help" },
      { label: "Contact Us", href: "/support/contact" },
      { label: "FAQ", href: "/support/faq" },
    ],
  },
];

const DetailMenu = ({ onMouseEnter, onMouseLeave }: THeaderNav) => {
  return (
    <div
      className="w-full bg-[#f5f5f5]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-8">
          {navItems.map(({ label, submenus }) => (
            <div key={label} className="space-y-4">
              <div className="font-pretendard font-semibold">{label}</div>
              {submenus.map((submenu) => (
                <Link
                  key={submenu.label}
                  href={submenu.href}
                  className="block py-2 hover:bg-gray-100 hover:text-[#78b237]"
                >
                  {submenu.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailMenu;
