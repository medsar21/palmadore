import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

// Import des images des collections
import chamaSmall1 from "@/assets/Morrocan édition/Collection Chama/small.png";
import chamaSmall2 from "@/assets/Morrocan édition/Collection Chama/small 2.png";
import chamaBig1 from "@/assets/Morrocan édition/Collection Chama/big.png";
import chamaBig2 from "@/assets/Morrocan édition/Collection Chama/big 2.png";

import izzaSmall1 from "@/assets/Morrocan édition/Collection IZZA/smal.png";
import izzaSmall2 from "@/assets/Morrocan édition/Collection IZZA/smal 2.png";
import izzaBig1 from "@/assets/Morrocan édition/Collection IZZA/big.png";
import izzaBig2 from "@/assets/Morrocan édition/Collection IZZA/big 2.png";

import lamatSmall1 from "@/assets/Morrocan édition/Collection Lamat/small.png";
import lamatSmall2 from "@/assets/Morrocan édition/Collection Lamat/small 2.png";
import lamatBig1 from "@/assets/Morrocan édition/Collection Lamat/big .png";
import lamatBig2 from "@/assets/Morrocan édition/Collection Lamat/big 2.png";

const products = [
  // Collection Chama
  { id: 100, name: "Chama Small - Couleur 1", image: chamaSmall1, price: "350 Dhs", weight: "300g", reference: "Réf MC-001", collection: "Chama" },
  { id: 101, name: "Chama Small - Couleur 2", image: chamaSmall2, price: "350 Dhs", weight: "300g", reference: "Réf MC-002", collection: "Chama" },
  { id: 102, name: "Chama Big - Couleur 1", image: chamaBig1, price: "550 Dhs", weight: "500g", reference: "Réf MC-003", collection: "Chama" },
  { id: 103, name: "Chama Big - Couleur 2", image: chamaBig2, price: "550 Dhs", weight: "500g", reference: "Réf MC-004", collection: "Chama" },
  
  // Collection IZZA
  { id: 104, name: "IZZA Small - Couleur 1", image: izzaSmall1, price: "350 Dhs", weight: "300g", reference: "Réf MC-005", collection: "IZZA" },
  { id: 105, name: "IZZA Small - Couleur 2", image: izzaSmall2, price: "350 Dhs", weight: "300g", reference: "Réf MC-006", collection: "IZZA" },
  { id: 106, name: "IZZA Big - Couleur 1", image: izzaBig1, price: "550 Dhs", weight: "500g", reference: "Réf MC-007", collection: "IZZA" },
  { id: 107, name: "IZZA Big - Couleur 2", image: izzaBig2, price: "550 Dhs", weight: "500g", reference: "Réf MC-008", collection: "IZZA" },
  
  // Collection Lamat
  { id: 108, name: "Lamat Small - Couleur 1", image: lamatSmall1, price: "350 Dhs", weight: "300g", reference: "Réf MC-009", collection: "Lamat" },
  { id: 109, name: "Lamat Small - Couleur 2", image: lamatSmall2, price: "350 Dhs", weight: "300g", reference: "Réf MC-010", collection: "Lamat" },
  { id: 110, name: "Lamat Big - Couleur 1", image: lamatBig1, price: "550 Dhs", weight: "500g", reference: "Réf MC-011", collection: "Lamat" },
  { id: 111, name: "Lamat Big - Couleur 2", image: lamatBig2, price: "550 Dhs", weight: "500g", reference: "Réf MC-012", collection: "Lamat" },
];

const MoroccanCollection = () => {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate('/products?category=special');
  };

  return (
    <section id="moroccan-collection" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-slide-up">
          <Badge className="mb-4 bg-gradient-to-r from-red-600 to-green-600 text-white px-4 py-2 text-sm sm:text-base">
            Édition Limitée
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-chocolate mb-4">
            Moroccan Edition
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos collections exclusives aux couleurs du Maroc, créées avec passion et savoir-faire artisanal
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-2 border-secondary/20 hover:border-red-500/40 transition-all duration-300 animate-scale-in bg-white shadow-soft hover:shadow-elegant cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="relative aspect-square overflow-hidden bg-secondary/10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-3 sm:p-4 transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-2 left-2">
                  <Badge className="bg-gradient-to-r from-red-600 to-green-600 text-white text-xs">
                    {product.collection}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-3 sm:p-4 text-center">
                <h3 className="text-sm sm:text-base font-serif font-semibold text-chocolate mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded">
                    {product.reference}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {product.weight}
                  </span>
                </div>
                <p className="text-lg sm:text-xl font-bold text-copper mb-3">
                  {product.price}
                </p>
                <Button
                  className="w-full bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 text-white font-semibold text-xs sm:text-sm py-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/product/${product.id}`);
                  }}
                >
                  Voir détails
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button
            size="lg"
            onClick={handleDiscoverClick}
            className="bg-gradient-to-r from-red-600 via-green-600 to-red-600 hover:from-red-700 hover:via-green-700 hover:to-red-700 text-white font-semibold px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg shadow-elegant hover:scale-105 transition-all duration-300"
          >
            Découvrir toutes les collections
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MoroccanCollection;

