import Hero from "@/components/Hero";
// Removed FeaturedProducts from homepage as requested
import ChocolateBars from "@/components/ChocolateBars";
import Coffrets from "@/components/Coffrets";
import Coupes from "@/components/Coupes";
import Tablettes from "@/components/Tablettes";
import CAN2026 from "@/components/CAN2026";
import MoroccanCollection from "@/components/MoroccanCollection";
import Events from "@/components/Events";

const Index = () => {
  return (
    <>
      <Hero />
      <ChocolateBars />
      <Coffrets />
      <Coupes />
      <Tablettes />
      <CAN2026 />
      <MoroccanCollection />
      <Events />
    </>
  );
};

export default Index;
