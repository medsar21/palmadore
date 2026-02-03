import Hero from "@/components/Hero";
// Removed FeaturedProducts from homepage as requested
import ChocolateBars from "@/components/ChocolateBars";
import Coffrets from "@/components/Coffrets";
import Coupes from "@/components/Coupes";
import Tablettes from "@/components/Tablettes";
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
      <MoroccanCollection />
      <Events />
    </>
  );
};

export default Index;
