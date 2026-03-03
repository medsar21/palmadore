import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { productsCatalog as allProducts } from "@/data/products";

const tablettes = allProducts.filter((product) => product.category === "tablettes");

const Tablettes = () => {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate('/products?category=tablettes');
  };

  return (
    <section id="tablettes" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-6 sm:mb-10 md:mb-12 animate-slide-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-copper mb-2 sm:mb-4">
            Tablettes
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 max-w-4xl mx-auto">
          {tablettes.map((tablette, index) => (
            <div
              key={tablette.id}
              className="group animate-scale-in cursor-pointer"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              onClick={() => navigate(`/product/${tablette.id}`)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300">
                <img
                  src={tablette.image}
                  alt={tablette.name}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-center mt-2 sm:mt-3 font-serif text-sm sm:text-base md:text-lg text-chocolate font-semibold">
                {tablette.name}
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

export default Tablettes;

