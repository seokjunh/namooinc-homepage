type THeaderNav = {
  onMouseEnter: () => void;
};

const HeaderNav = ({ onMouseEnter }: THeaderNav) => {
  return (
    <div
      className="hidden space-x-[4rem] font-pretendard text-xl font-semibold md:flex"
      onMouseEnter={onMouseEnter}
    >
      <div className="cursor-default hover:text-[#78b237] hover:underline hover:decoration-4 hover:underline-offset-[2.5rem]">
        회사소개
      </div>
      <div className="cursor-default hover:text-[#78b237] hover:underline hover:decoration-4 hover:underline-offset-[2.5rem]">
        솔루션
      </div>
      <div className="cursor-default hover:text-[#78b237] hover:underline hover:decoration-4 hover:underline-offset-[2.5rem]">
        고객지원
      </div>
      <div className="cursor-default hover:text-[#78b237] hover:underline hover:decoration-4 hover:underline-offset-[2.5rem]">
        인재채용
      </div>
    </div>
  );
};

export default HeaderNav;
