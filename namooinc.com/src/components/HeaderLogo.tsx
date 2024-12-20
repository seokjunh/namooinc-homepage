import Link from "next/link";
import Image from "next/image";

const HeaderLogo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={"/images/namoo-logo.png"}
        width={100}
        height={10}
        alt="logo"
        className="h-[2rem] w-[8rem]"
      />
      <div className="text-sm text-[#78b237]">Conneting Value</div>
    </Link>
  );
};
export default HeaderLogo;
