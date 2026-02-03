import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

// Import des images des collections
import chamaSmall1 from "@/assets/Morrocan édition/Collection Chama/small.webp";
import chamaSmall2 from "@/assets/Morrocan édition/Collection Chama/small 2.webp";
import chamaBig1 from "@/assets/Morrocan édition/Collection Chama/big.webp";
import chamaBig2 from "@/assets/Morrocan édition/Collection Chama/big 2.webp";

import izzaSmall1 from "@/assets/Morrocan édition/Collection IZZA/smal.webp";
import izzaSmall2 from "@/assets/Morrocan édition/Collection IZZA/smal 2.webp";
import izzaBig1 from "@/assets/Morrocan édition/Collection IZZA/big.webp";
import izzaBig2 from "@/assets/Morrocan édition/Collection IZZA/big 2.webp";

import lammaSmall1 from "@/assets/Morrocan édition/Collection Lamat/small.webp";
import lammaSmall2 from "@/assets/Morrocan édition/Collection Lamat/small 2.webp";
import lammaBig1 from "@/assets/Morrocan édition/Collection Lamat/big .webp";
import lammaBig2 from "@/assets/Morrocan édition/Collection Lamat/big 2.webp";

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
  
  // Collection Lammat
  { id: 108, name: "Lammat Small - Couleur 1", image: lammaSmall1, price: "350 Dhs", weight: "300g", reference: "Réf MC-009", collection: "Lammat" },
  { id: 109, name: "Lammat Small - Couleur 2", image: lammaSmall2, price: "350 Dhs", weight: "300g", reference: "Réf MC-010", collection: "Lammat" },
  { id: 110, name: "Lammat Big - Couleur 1", image: lammaBig1, price: "550 Dhs", weight: "500g", reference: "Réf MC-011", collection: "Lammat" },
  { id: 111, name: "Lammat Big - Couleur 2", image: lammaBig2, price: "550 Dhs", weight: "500g", reference: "Réf MC-012", collection: "Lammat" },
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
        <div className="absolute top-0 left-0 w-96 h-96 bg-copper rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-chocolate rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-slide-up">
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
              className="group overflow-hidden border-2 border-secondary/20 hover:border-chocolate/40 transition-all duration-300 animate-scale-in bg-white shadow-soft hover:shadow-elegant cursor-pointer"
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
                  <Badge className="bg-gradient-copper text-white text-xs">
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
                  className="w-full bg-chocolate hover:bg-chocolate/90 text-white font-semibold text-xs sm:text-sm py-2"
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
            className="bg-gradient-copper text-white font-semibold px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg shadow-elegant hover:scale-105 transition-all duration-300"
          >
            Découvrir toutes les collections
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MoroccanCollection;

