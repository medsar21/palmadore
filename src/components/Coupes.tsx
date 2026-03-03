import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { productsCatalog as allProducts } from "@/data/products";

const coffrets = allProducts.filter((product) => product.category === "coffrets");

const Coupes = () => {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate('/products?category=coffrets');
  };

  return (
    <section id="coffrets" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-6 sm:mb-10 md:mb-12 animate-slide-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-copper mb-2 sm:mb-4">
            Nos Coffrets
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
          {coffrets.map((coffret, index) => (
            <Card
              key={coffret.id}
              className="group overflow-hidden border-none shadow-soft hover:shadow-elegant transition-all duration-300 animate-scale-in bg-card w-full sm:w-[300px] md:w-[350px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-square bg-secondary/10 flex items-center justify-center">
                <img
                  src={coffret.image}
                  alt={`${coffret.name} - ${coffret.description}`}
                  className="w-full h-full object-contain p-4 sm:p-6 md:p-8 transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <CardContent className="p-4 sm:p-5 md:p-6 text-center">
                <h3 className="text-base sm:text-lg md:text-xl font-serif font-semibold text-chocolate mb-2">
                  {coffret.name}
                </h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  {coffret.reference && (
                    <span className="text-xs sm:text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">
                      {coffret.reference}
                    </span>
                  )}
                  {coffret.weight && (
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      {coffret.weight}
                    </span>
                  )}
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-copper mb-2">
                  {coffret.price}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 line-clamp-2">
                  {coffret.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center w-full">
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto border-chocolate text-chocolate hover:bg-chocolate/10 font-medium py-2 px-4"
                    onClick={() => navigate(`/product/${coffret.id}`)}
                  >
                    Détail
                  </Button>
                  <Button
                    className="w-full sm:w-auto bg-chocolate text-white hover:bg-chocolate/90 font-medium py-2 px-4"
                    onClick={() => navigate(`/product/${coffret.id}?order=true`)}
                  >
                    Commander
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={handleDiscoverClick}
            className="border-copper text-copper hover:bg-copper hover:text-white font-semibold px-6 sm:px-8 py-3 text-sm sm:text-base transition-colors"
          >
            Découvrir nos coffrets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Coupes;
