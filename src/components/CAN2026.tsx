import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import canImage from "@/assets/can.webp";

const CAN2026 = () => {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate('/products?category=special');
  };

  return (
    <section id="can2026" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-copper rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-chocolate rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-chocolate mb-4">
            CAN 2026 Maroc
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Célébrez la Coupe d'Afrique des Nations 2026 avec nos créations chocolatées personnalisées aux couleurs du Maroc
          </p>
        </div>

        {/* Main Image */}
        <div className="mb-8 sm:mb-12 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <img
              src={canImage}
              alt="CAN 2026 Maroc - Produits personnalisés"
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-2">
                Produits Personnalisés CAN 2026
              </h3>
              <p className="text-white/90 text-sm sm:text-base">
                Chocolats artisanaux aux couleurs du Maroc pour célébrer cette grande compétition
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 sm:mb-12">
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-red-500/20 hover:border-red-500/40 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🇲🇦</span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-chocolate mb-2">
                Couleurs du Maroc
              </h3>
              <p className="text-muted-foreground text-sm">
                Produits aux couleurs rouge et verte du drapeau marocain
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-2 border-green-500/20 hover:border-green-500/40 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚽</span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-chocolate mb-2">
                Personnalisation
              </h3>
              <p className="text-muted-foreground text-sm">
                Créations sur mesure avec logos et messages personnalisés
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-2 border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-chocolate mb-2">
                Édition Limitée
              </h3>
              <p className="text-muted-foreground text-sm">
                Collection exclusive pour célébrer la CAN 2026 au Maroc
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button
            size="lg"
            onClick={handleDiscoverClick}
            className="bg-gradient-to-r from-red-600 via-green-600 to-red-600 hover:from-red-700 hover:via-green-700 hover:to-red-700 text-white font-semibold px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg shadow-elegant hover:scale-105 transition-all duration-300"
          >
            Découvrir nos produits CAN 2026
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CAN2026;

