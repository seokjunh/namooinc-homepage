"use client";

import { useState, useCallback } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const sliderImages = [
  {
    src: "/images/img3.png",
    alt: "CoreCode Image 1",
    title: "Connecting Value, CoreCode",
    description: "미래의 Digital 기술로 제조 산업의 경쟁력을 높입니다.",
  },
  {
    src: "/images/img3.png",
    alt: "CoreCode Image 2",
    title: "Connecting Value, CoreCode",
    description: "미래의 Digital 기술로 제조 산업의 경쟁력을 높입니다.",
  },
];

const CardSlider = () => {
  const [key, setKey] = useState(0);

  // 윈도우 크기 변경 시 슬라이더 재렌더링
  const handleResize = useCallback(() => {
    setKey((prevKey) => prevKey + 1);
  }, []);

  return (
    <Swiper
      key={key}
      slidesPerView={1}
      loop={true}
      pagination={{
        type: "bullets",
        clickable: true,
        bulletClass: "swiper-pagination-bullet custom-bullet",
      }}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false, // 사용자 상호작용 후 자동재생 유지
      }}
      speed={1300}
      className="h-[50vh] md:h-screen [&_.custom-bullet]:h-3 [&_.custom-bullet]:w-3 [&_.custom-bullet]:rounded-full [&_.custom-bullet]:bg-white"
      onResize={handleResize} // 크기 변경 이벤트 핸들러 추가
      resizeObserver={true} // 반응형 옵저버 활성화
    >
      {sliderImages.map((image, index) => (
        <SwiperSlide key={index} className="relative">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            className="object-cover"
          />
          <div className="absolute left-[15%] top-[40%] flex items-center">
            <div className="text-white">
              <h2 className="mb-4 text-4xl font-extrabold md:text-6xl lg:text-7xl">
                {image.title}
              </h2>
              <p className="text-sm md:text-base lg:text-xl">
                {image.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;
