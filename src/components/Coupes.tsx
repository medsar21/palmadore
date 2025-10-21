import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import coupeAudaceGold from "@/assets/coupe-audace-gold.jpg";
import coupeAudaceGreen from "@/assets/coupe-audace-green.jpg";
import coupeEmpreinteCopper from "@/assets/coupe-empreinte-copper.jpg";
import coupeEmpreinteSilver from "@/assets/coupe-empreinte-silver.jpg";

const coupes = [
  {
    id: 4,
    name: "Audace",
    price: "950 Dhs",
    description: "coupe dorée en céramique (grande)",
    image: coupeAudaceGold,
  },
  {
    id: 5,
    name: "Audace",
    price: "690 Dhs",
    description: "coupe dorée en céramique (moyenne)",
    image: coupeAudaceGreen,
  },
  {
    id: 6,
    name: "Empreinte",
    price: "1750 Dhs",
    description: "coupe en céramique",
    image: coupeEmpreinteCopper,
  },
  {
    id: 7,
    name: "Empreinte",
    price: "820 Dhs",
    description: "coupelle argenté en céramique (moyenne)",
    image: coupeEmpreinteSilver,
  },
];

const Coupes = () => {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate('/products');
  };

  return (
    <section id="coupes" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-10 md:mb-12 animate-slide-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-copper mb-2 sm:mb-4">
            Nos Coupes
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {coupes.map((coupe, index) => (
            <Card
              key={coupe.id}
              className="group overflow-hidden border-none shadow-soft hover:shadow-elegant transition-all duration-300 animate-scale-in bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-square bg-secondary/10">
                <img
                  src={coupe.image}
                  alt={`${coupe.name} - ${coupe.description}`}
                  className="w-full h-full object-contain p-4 sm:p-6 md:p-8 transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-4 sm:p-5 md:p-6 text-center">
                <h3 className="text-base sm:text-lg md:text-xl font-serif font-semibold text-chocolate mb-2">
                  {coupe.name}
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-copper mb-2">
                  {coupe.price}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                  {coupe.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center w-full">
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto border-chocolate text-chocolate hover:bg-chocolate/10 font-medium py-2 px-4"
                    onClick={() => navigate(`/product/${coupe.id}`)}
                  >
                    Détail
                  </Button>
                  <Button
                    className="w-full sm:w-auto bg-chocolate text-white hover:bg-chocolate/90 font-medium py-2 px-4"
                    onClick={() => navigate(`/product/${coupe.id}?order=true`)}
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
            Découvrir nos coupes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Coupes;
