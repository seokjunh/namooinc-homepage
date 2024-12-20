import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h2 className="mb-4 text-4xl font-bold text-red-500">
        404 - 페이지를 찾을 수 없습니다
      </h2>
      <p className="mb-6 text-lg text-gray-700">
        요청하신 페이지가 존재하지 않거나 삭제되었습니다.
      </p>
      <Link
        href="/"
        className="rounded bg-[#78b237] px-4 py-2 text-white transition-colors hover:bg-[#659232]"
      >
        메인 페이지로 돌아가기
      </Link>
    </div>
  );
}
