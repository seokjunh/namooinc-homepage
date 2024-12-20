import Link from "next/link";

type THeaderNav = {
  onMouseEnter: () => void;
};

const HeaderNav = ({ onMouseEnter }: THeaderNav) => {
  return (
    <div
      className="hidden space-x-[4rem] font-pretendard font-semibold md:flex"
      onMouseEnter={onMouseEnter}
    >
      <Link
        href={"/corecode"}
        className="underline-offset-4 hover:text-[#78b237] hover:underline"
      >
        CORECODE
      </Link>
      <Link
        href={"/solution"}
        className="underline-offset-4 hover:text-[#78b237] hover:underline"
      >
        SOLUTION
      </Link>
      <Link
        href={"/aboutus"}
        className="underline-offset-4 hover:text-[#78b237] hover:underline"
      >
        ABOUT US
      </Link>
      <Link
        href={"/support"}
        className="underline-offset-4 hover:text-[#78b237] hover:underline"
      >
        SUPPORT
      </Link>
    </div>
  );
};

export default HeaderNav;
