import CorporateHeader from "@/components/CorporateHeader";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CorporateHeader />
      {children}
    </>
  );
}
