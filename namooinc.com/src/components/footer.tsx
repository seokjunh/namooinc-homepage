const Footer = () => {
  return (
    <div className="bg-gray-100 px-8 py-16 lg:px-[5.625rem] lg:py-[6.875rem]">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-4 text-4xl font-black lg:mb-0 lg:mr-[6.25rem]">
          NAMOO I&C
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
