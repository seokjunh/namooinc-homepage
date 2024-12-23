const Footer = () => {
  return (
    <footer className="px-[5.625rem] py-[6.875rem]">
      <div className="container max-w-6xl">
        <div className="flex items-center text-lg">
          <div className="mr-[6.25rem] text-4xl font-black">NAMOO I&C</div>
          <div className="flex gap-[1.875rem]">
            <div>이용약관</div>
            <div>개인정보처리방침</div>
            <div>이메일주소 무단수집 거부</div>
          </div>
        </div>
        <div className="mb-[1.125rem] mt-16 flex gap-6 text-lg">
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
        <div className="text-lg">
          © {new Date().getFullYear()} NAMOOI&C. All Rights Reserved.
        </div>
        {/* <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          
          <div className="space-y-4 text-center md:text-left">
            <div>대표이사 김경식</div>
            <div>사업자등록번호 211-87-61350</div>
            <div>주소 서울특별시 강남구 도산대로30길 33-8 대경빌딩 3층</div>
          </div>

          
          <div className="flex flex-col items-center gap-4 md:items-end">
            
            <div className="flex flex-col gap-2 md:flex-row md:gap-4">
              <Link
                href="/terms"
                className="underline-offset-4 hover:underline"
              >
                이용약관
              </Link>
              <Link
                href="/privacy"
                className="underline-offset-4 hover:underline"
              >
                개인정보 처리방침
              </Link>
              <Link
                href="/email-policy"
                className="underline-offset-4 hover:underline"
              >
                이메일주소 무단수집 거부
              </Link>
            </div>

            
            <div className="flex items-center gap-2">
              <Image
                src={"/images/namoo-icon.png"}
                width={30}
                height={30}
                alt="namoo"
                className="h-8 w-8"
              />
              <div className="text-3xl">나무아이앤씨</div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col border-t pt-4 md:flex-row md:items-center md:justify-between">
          <div className="text-center text-sm md:text-left">
            © {new Date().getFullYear()} 나무아이앤씨. All Rights Reserved.
          </div>

          <div className="mt-4 flex justify-center gap-6 md:mt-0">
            <Image
              src={"/images/gs.png"}
              width={100}
              height={100}
              alt="gs"
              className="h-24 w-24"
            />
            <Image
              src={"/images/inno.png"}
              width={100}
              height={100}
              alt="inno"
              className="h-24 w-24"
            />
            <Image
              src={"/images/kibo.png"}
              width={100}
              height={100}
              alt="kibo"
              className="h-24 w-24"
            />
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
