import Image from "next/image";

const BusinessIntro = () => {
  return (
    <div className="w-full px-4 py-8 lg:px-[28.125rem] md:py-16">
      <div className="mb-[3.125rem] text-3xl font-black lg:text-6xl">
        Business
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="relative aspect-square overflow-hidden">
          <button className="group h-full w-full">
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
          </button>
        </div>

        <div className="grid aspect-square grid-cols-2 gap-2">
          <div className="relative overflow-hidden">
            <button className="group h-full w-full">
              <div className="relative h-full w-full duration-500 group-hover:scale-110">
                <Image
                  src="/images/img2.png"
                  alt="Large image"
                  fill
                  sizes="1"
                  className="object-cover"
                />
              </div>
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-white md:text-xl">
                CoreCode2
              </div>
            </button>
          </div>
          <div className="relative overflow-hidden">
            <button className="group h-full w-full">
              <div className="relative h-full w-full duration-500 group-hover:scale-110">
                <Image
                  src="/images/img2.png"
                  alt="Large image"
                  fill
                  sizes="1"
                  className="object-cover"
                />
              </div>
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-white md:text-xl">
                CoreCode3
              </div>
            </button>
          </div>
          <div className="relative overflow-hidden">
            <button className="group h-full w-full">
              <div className="relative h-full w-full duration-500 group-hover:scale-110">
                <Image
                  src="/images/img2.png"
                  alt="Large image"
                  fill
                  sizes="1"
                  className="object-cover"
                />
              </div>
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-white md:text-xl">
                CoreCode4
              </div>
            </button>
          </div>
          <div className="relative overflow-hidden">
            <button className="group h-full w-full">
              <div className="relative h-full w-full duration-500 group-hover:scale-110">
                <Image
                  src="/images/img2.png"
                  alt="Large image"
                  fill
                  sizes="1"
                  className="object-cover"
                />
              </div>
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-white md:text-xl">
                CoreCode5
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BusinessIntro;
