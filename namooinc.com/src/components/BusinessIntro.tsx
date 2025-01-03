import Image from "next/image";
import Link from "next/link";

const BusinessIntro = () => {
  const smallCards = [
    {
      title: "CoreCode2",
      href: "/corecode",
      img: "/images/img2.png",
      alt: "img2",
    },
    {
      title: "CoreCode3",
      href: "/corecode",
      img: "/images/img2.png",
      alt: "img3",
    },
    {
      title: "CoreCode4",
      href: "/corecode",
      img: "/images/img2.png",
      alt: "img4",
    },
    {
      title: "CoreCode5",
      href: "/corecode",
      img: "/images/img2.png",
      alt: "img5",
    },
  ];

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
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white md:text-xl">
              CoreCode1
            </div>
          </Link>
        </div>

        <div className="grid aspect-square grid-cols-2 gap-2">
          {smallCards.map((card, idx) => (
            <div key={idx} className="relative overflow-hidden">
              <Link href={card.href} className="group h-full w-full">
                <div className="relative h-full w-full duration-500 group-hover:scale-110">
                  <Image
                    src={card.img}
                    alt={card.alt}
                    fill
                    sizes="1"
                    className="object-cover"
                  />
                </div>
                <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-white md:text-xl">
                  {card.title}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BusinessIntro;
