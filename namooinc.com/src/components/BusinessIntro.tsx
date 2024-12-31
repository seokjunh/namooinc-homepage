import Image from "next/image";
import Link from "next/link";

const BusinessIntro = () => {
  return (
    <div className="w-full px-4 py-8 md:py-16 lg:px-[28.125rem]">
      <div className="mb-[3.125rem] text-3xl font-black lg:text-6xl">
        Business
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="relative aspect-square overflow-hidden">
          <Link href={"/corecode"} className="group h-full w-full">
            <div className="relative h-full w-full duration-500 group-hover:scale-110">
              <Image
                src="/images/img2.png"
                alt="Large image"
                fill
                sizes="1"
                className="object-cover"
              />
            </div>
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-white">
              CoreCode1
            </div>
          </Link>
        </div>

        <div className="grid aspect-square grid-cols-2 gap-2">
          <div className="relative overflow-hidden">
            <Link href={"/corecode"} className="group h-full w-full">
              <div className="relative h-full w-full duration-500 group-hover:scale-110">
                <Image
                  src="/images/img2.png"
                  alt="Large image"
                  fill
                  sizes="1"
                  className="object-cover"
                />
              </div>
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-white">
                CoreCode2
              </div>
            </Link>
          </div>
          <div className="relative overflow-hidden">
            <Link href={"/corecode"} className="group h-full w-full">
              <div className="relative h-full w-full duration-500 group-hover:scale-110">
                <Image
                  src="/images/img2.png"
                  alt="Large image"
                  fill
                  sizes="1"
                  className="object-cover"
                />
              </div>
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-white">
                CoreCode3
              </div>
            </Link>
          </div>
          <div className="relative overflow-hidden">
            <Link href={"/corecode"} className="group h-full w-full">
              <div className="relative h-full w-full duration-500 group-hover:scale-110">
                <Image
                  src="/images/img2.png"
                  alt="Large image"
                  fill
                  sizes="1"
                  className="object-cover"
                />
              </div>
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-white">
                CoreCode4
              </div>
            </Link>
          </div>
          <div className="relative overflow-hidden">
            <Link href={"/corecode"} className="group h-full w-full">
              <div className="relative h-full w-full duration-500 group-hover:scale-110">
                <Image
                  src="/images/img2.png"
                  alt="Large image"
                  fill
                  sizes="1"
                  className="object-cover"
                />
              </div>
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-white">
                CoreCode5
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BusinessIntro;
