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
    <section id="coupes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-copper mb-4">
            Nos Coupes
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8 mb-12">
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
                  className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-serif font-semibold text-chocolate mb-2">
                  {coupe.name}
                </h3>
                <p className="text-lg font-bold text-copper mb-2">
                  {coupe.price}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {coupe.description}
                </p>
                <div className="flex gap-2 justify-center">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => navigate(`/product/${coupe.id}`)}
                  >
                    Détail
                  </Button>
                  <Button
                    size="sm"
                    className="bg-chocolate text-white hover:bg-chocolate/90"
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
            className="border-copper text-copper hover:bg-copper hover:text-white font-semibold px-8 transition-colors"
          >
            Découvrir nos coupes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Coupes;
