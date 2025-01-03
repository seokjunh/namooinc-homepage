import SolutionDesc from "@/components/SolutionDesc";
// import SolutionNavbar from "@/components/SolutionNavbar";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="relative w-full">
        <Image
          src={"/images/corecode_img.png"}
          alt="img2"
          width={0}
          height={0}
          sizes="100vw"
          className="h-[30.25rem] w-full object-cover"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-white md:text-2xl lg:text-4xl">
          제조 현장의 시스템과 장비 연계의 표준화
        </div>
      </div>
      <SolutionDesc />
    </div>
  );
};

export default page;
