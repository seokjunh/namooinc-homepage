import Link from "next/link";
import Image from "next/image";

const HeaderLogo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={"/images/namoo-logo.png"}
        width={200}
        height={200}
        alt="logo"
        className="h-[2rem] w-[8rem] xl:h-[3rem] xl:w-[11rem]"
      />
      <div className="text-[0.55rem] text-[#78b237] xl:text-xs">Conneting Value</div>
    </Link>
  );
};
export default HeaderLogo;
