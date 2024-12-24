const Footer = () => {
  return (
    <div className="bg-gray-200 px-8 py-16 lg:px-[5.625rem] lg:py-[6.875rem]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-lg lg:flex-row">
          <div className="mb-4 text-4xl font-black lg:mb-0 lg:mr-[6.25rem]">
            NAMOO I&C
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-xs md:text-lg lg:justify-start">
            <div>이용약관</div>
            <div>개인정보처리방침</div>
            <div>이메일주소 무단수집 거부</div>
          </div>
        </div>
        <div className="mb-8 mt-16 flex flex-col gap-6 text-lg lg:flex-row">
          <div>서울특별시 강남구 도산대로30길 33-8 대경빌딩 3층</div>
          <div className="flex">
            <div className="mr-2 font-bold">대표이사</div>
            <div>김경식</div>
          </div>
          <div className="flex">
            <div className="mr-2 font-bold">TEL</div>
            <div>02-3018-5114</div>
          </div>
          <div className="flex">
            <div className="mr-2 font-bold">FAX</div>
            <div>02-3018-5114</div>
          </div>
        </div>
        <div className="text-center text-lg lg:text-left">
          © {new Date().getFullYear()} NAMOOI&C. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
