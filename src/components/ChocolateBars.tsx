import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import barCaramel from "@/assets/bar-caramel.jpg";
import barSpeculoos from "@/assets/bar-speculoos.jpg";
import barCitron from "@/assets/bar-citron.jpg";
import barPistache from "@/assets/bar-pistache.jpg";

const bars = [
  { id: 1, name: "Caramel", image: barCaramel },
  { id: 2, name: "Spéculoos", image: barSpeculoos },
  { id: 3, name: "Citron", image: barCitron },
  { id: 4, name: "Pistache", image: barPistache },
];

const ChocolateBars = () => {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate('/products?category=tablettes');
  };

  const handleBarClick = () => {
    navigate('/products?category=tablettes');
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-6 sm:mb-8 animate-slide-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-chocolate mb-2 sm:mb-3">
            Croquez, Craquez, Fondez...
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-primary mb-4 sm:mb-6">
            Chaque tablette est une <span className="text-copper font-semibold">Signature</span> !
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          {bars.map((bar, index) => (
            <div
              key={bar.id}
              className="group animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={handleBarClick}
            >
              <div className="relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300">
                <img
                  src={bar.image}
                  alt={`Tablette ${bar.name}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-center mt-2 sm:mt-3 font-serif text-sm sm:text-base md:text-lg text-chocolate font-semibold">
                {bar.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={handleDiscoverClick}
            className="bg-gradient-copper text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 shadow-elegant hover:scale-105 transition-transform text-sm sm:text-base"
          >
            Découvrir nos tablettes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChocolateBars;
