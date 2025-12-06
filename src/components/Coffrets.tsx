import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
// Import des images de coupes
import coupeEleganceS from "@/assets/Artboard 7.webp";
import coupeEleganceM from "@/assets/Artboard 8.webp";
import coupeEleganceL from "@/assets/Artboard 9.webp";
import coupeEmeraudeS from "@/assets/Artboard 10.webp";
import coupeEmeraudeM from "@/assets/Artboard 11.webp";
import coupePrestigeImg from "@/assets/Artboard 1.webp";
import coupePrestigeLImg from "@/assets/Artboard 2.webp";
import coupeTresorM from "@/assets/Artboard 5.webp";
import coupeTresorL from "@/assets/Artboard 4.webp";
import coupeAudaceS from "@/assets/coupe 4.webp";
import coupeAudaceM from "@/assets/coupe 5.webp";
import coupeAudaceL from "@/assets/coupe 6.webp";
import coupeFeddaM from "@/assets/Artboard 14.webp";
import coupeFeddaL from "@/assets/Artboard 15.webp";
import coupePiedM from "@/assets/Artboard 13.webp";
import coupePiedL from "@/assets/Artboard 12.webp";

const coupes = [
  {
    id: 15,
    name: "Coupe Élégance S",
    price: "200 Dhs",
    description: "Coupe élégante en porcelaine blanche avec base dorée",
    image: coupeEleganceS,
    reference: "Réf 035",
    weight: "150g",
  },
  {
    id: 151,
    name: "Coupe Élégance M",
    price: "350 Dhs",
    description: "Coupe élégante moyenne en porcelaine blanche",
    image: coupeEleganceM,
    reference: "Réf 036",
    weight: "350g",
  },
  {
    id: 152,
    name: "Coupe Élégance L",
    price: "750 Dhs",
    description: "Grande coupe élégante en porcelaine blanche",
    image: coupeEleganceL,
    reference: "Réf 037",
    weight: "650g",
  },
  {
    id: 18,
    name: "Coupe Émeraude S",
    price: "350 Dhs",
    description: "Coupe émeraude avec base dorée sphérique",
    image: coupeEmeraudeS,
    reference: "Réf 038",
    weight: "350g",
  },
  {
    id: 16,
    name: "Coupe Émeraude M",
    price: "750 Dhs",
    description: "Coupe émeraude moyenne avec base dorée",
    image: coupeEmeraudeM,
    reference: "Réf 039",
    weight: "650g",
  },
  {
    id: 153,
    name: "Coupe Prestige",
    price: "650 Dhs",
    description: "Coupe prestige dorée texturée",
    image: coupePrestigeImg,
    reference: "Réf 040",
    weight: "500g",
  },
  {
    id: 154,
    name: "Coupe Prestige L",
    price: "950 Dhs",
    description: "Grande coupe prestige dorée texturée",
    image: coupePrestigeLImg,
    reference: "Réf 041",
    weight: "900g",
  },
  {
    id: 20,
    name: "Coupe Tresor M",
    price: "1100 Dhs",
    description: "Coupe trésor ovale avec finition grise matte",
    image: coupeTresorM,
    reference: "Réf 042",
    weight: "800g",
  },
  {
    id: 21,
    name: "Coupe Tresor L",
    price: "1650 Dhs",
    description: "Grande coupe trésor ovale avec finition grise",
    image: coupeTresorL,
    reference: "Réf 043",
    weight: "1400g",
  },
  {
    id: 22,
    name: "Coupe Audace S",
    price: "1200 Dhs",
    description: "Coupe audace circulaire sur support argenté",
    image: coupeAudaceS,
    reference: "Réf 044",
    weight: "850g",
  },
  {
    id: 23,
    name: "Coupe Audace M",
    price: "1800 Dhs",
    description: "Coupe audace circulaire moyenne",
    image: coupeAudaceM,
    reference: "Réf 045",
    weight: "1500g",
  },
  {
    id: 24,
    name: "Coupe Audace L",
    price: "2600 Dhs",
    description: "Grande coupe audace circulaire",
    image: coupeAudaceL,
    reference: "Réf 046",
    weight: "2300g",
  },
  {
    id: 30,
    name: "Coupe à pied M",
    price: "550 Dhs",
    description: "Élégante coupe à pied moyenne",
    image: coupePiedM,
    reference: "Réf 026",
    weight: "450g",
  },
  {
    id: 31,
    name: "Coupe à pied L",
    price: "1100 Dhs",
    description: "Somptueuse grande coupe à pied",
    image: coupePiedL,
    reference: "Réf 026",
    weight: "900g",
  },
  {
    id: 36,
    name: "Coupe Fedda M",
    price: "1650 Dhs",
    description: "Coupe Fedda argentée avec poignées dorées",
    image: coupeFeddaM,
    reference: "Réf 033",
    weight: "650g",
  },
  {
    id: 37,
    name: "Coupe Fedda L",
    price: "1950 Dhs",
    description: "Grande coupe Fedda argentée",
    image: coupeFeddaL,
    reference: "Réf 034",
    weight: "1.1kg",
  },
];

const Coffrets = () => {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate('/products?category=coupes');
  };

  return (
    <section id="coupes" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-6 sm:mb-10 md:mb-12 animate-slide-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-copper mb-2 sm:mb-4">
            Nos Coupes
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {coupes.slice(0, 6).map((coupe, index) => (
            <Card
              key={coupe.id}
              className="group overflow-hidden border-none shadow-soft hover:shadow-elegant transition-all duration-300 animate-scale-in bg-background"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-square bg-secondary/10 flex items-center justify-center">
                <img
                  src={coupe.image}
                  alt={coupe.name}
                  className="w-full h-full object-contain p-4 sm:p-6 md:p-8 transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <CardContent className="p-4 sm:p-5 md:p-6 text-center">
                <h3 className="text-base sm:text-lg md:text-xl font-serif font-semibold text-chocolate mb-2">
                  {coupe.name}
                </h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  {coupe.reference && (
                    <span className="text-xs sm:text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">
                      {coupe.reference}
                    </span>
                  )}
                  {coupe.weight && (
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      {coupe.weight}
                    </span>
                  )}
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-copper mb-2">
                  {coupe.price}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 line-clamp-2">
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

export default Coffrets;
