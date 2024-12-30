import SolutionDesc from "@/components/SolutionDesc";
// import SolutionNavbar from "@/components/SolutionNavbar";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="w-full">
        <Image
          src={"/images/img2.png"}
          alt="img2"
          width={0}
          height={0}
          sizes="100vw"
          className="h-[30.25rem] w-full object-cover"
        />
      </div>
      {/* <SolutionNavbar /> */}
      <SolutionDesc />
    </div>
  );
};

export default page;
