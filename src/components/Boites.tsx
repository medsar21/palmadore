import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import boite1 from "@/assets/Artboard 6.png";
import boite2 from "@/assets/Artboard 3.png";

const boites = [
  {
    id: 40,
    name: "Boîte Premium",
    price: "65 Dhs",
    description: "Boîte élégante pour vos chocolats",
    image: boite1,
  },
  {
    id: 41,
    name: "Boîte Cadeau",
    price: "55 Dhs",
    description: "Boîte cadeau raffinée",
    image: boite2,
  },
];

const Boites = () => {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate('/products?category=boites');
  };

  return (
    <section id="boites" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-6 sm:mb-10 md:mb-12 animate-slide-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-copper mb-2 sm:mb-4">
            Nos Boites
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {boites.map((boite, index) => (
            <Card
              key={boite.id}
              className="group overflow-hidden border-none shadow-soft hover:shadow-elegant transition-all duration-300 animate-scale-in bg-background"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-square bg-secondary/10">
                <img
                  src={boite.image}
                  alt={boite.name}
                  className="w-full h-full object-contain p-4 sm:p-6 md:p-8 transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <CardContent className="p-4 sm:p-5 md:p-6 text-center">
                <h3 className="text-base sm:text-lg md:text-xl font-serif font-semibold text-chocolate mb-2">
                  {boite.name}
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-copper mb-2">
                  {boite.price}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                  {boite.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center w-full">
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto border-chocolate text-chocolate hover:bg-chocolate/10 font-medium py-2 px-4"
                    onClick={() => navigate(`/product/${boite.id}`)}
                  >
                    Détail
                  </Button>
                  <Button
                    className="w-full sm:w-auto bg-chocolate text-white hover:bg-chocolate/90 font-medium py-2 px-4"
                    onClick={() => navigate(`/product/${boite.id}?order=true`)}
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
            Découvrir nos boites
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Boites;

