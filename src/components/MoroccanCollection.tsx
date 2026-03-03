import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { productsCatalog as allProducts } from "@/data/products";

const products = allProducts.filter((product) => product.category === "special");

const getCollectionName = (productName: string): string => {
  return productName.split(" ")[0] || "Collection";
};

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
                    {getCollectionName(product.name)}
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
