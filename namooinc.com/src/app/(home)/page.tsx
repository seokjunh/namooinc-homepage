import BusinessIntro from "@/components/BusinessIntro";
import CardSlider from "@/components/CardSlider";
import CompanyIntro from "@/components/CompanyIntro";

export default function Home() {
  return (
    <div>
      <CardSlider />
      <CompanyIntro />
      <BusinessIntro />
    </div>
  );
}
