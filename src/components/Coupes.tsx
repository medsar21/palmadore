import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import coupeEleganceS from "@/assets/Artboard 12.png";
import coupeEleganceM from "@/assets/Artboard 13.png";
import coupeEleganceL from "@/assets/Artboard 14.png";
import coupeEmeraudeS from "@/assets/Artboard 15.png";
import coupeEmeraudeM from "@/assets/Artboard 16.png";
import coupePrestige from "@/assets/Artboard 17.png";
import coupePrestigeL from "@/assets/Artboard 18.png";
import coupeTresorM from "@/assets/Artboard 19.png";
import coupeTresorL from "@/assets/Artboard 20.png";
import coupeAudaceS from "@/assets/Artboard 1.png";
import coupeAudaceM from "@/assets/Artboard 2.png";
import coupeAudaceL from "@/assets/Artboard 3.png";
import oumnia from "@/assets/Artboard 4.png";
import oumniaL from "@/assets/Artboard 5.png";
import coupeOvalS from "@/assets/Artboard 6.png";
import coupeOvalM from "@/assets/Artboard 7.png";
import serviteur from "@/assets/Artboard 8.png";
import coupePiedL from "@/assets/Artboard 9.png";
import coupePiedM from "@/assets/Artboard 10.png";
import coupePrestigeGoldM from "@/assets/Artboard 11.png";
import coupeRoyaleGoldL from "@/assets/Artboard 9.png";
import coupeFeddaM from "@/assets/Artboard 10.png";
import coupeFeddaL from "@/assets/Artboard 11.png";

const coupes = [
  {
    id: 12,
    name: "Coupe Élégance S",
    price: "200 Dhs",
    description: "Coupe élégante en porcelaine blanche avec base dorée. Assortiment de 150g de chocolats fins emballés dans des papiers dorés, verts et bruns. Parfaite pour offrir ou se faire plaisir.",
    image: coupeEleganceS,
    reference: "Réf 035",
    weight: "150g",
  },
  {
    id: 13,
    name: "Coupe Élégance M",
    price: "350 Dhs",
    description: "Coupe élégante moyenne en porcelaine blanche avec base dorée. Assortiment généreux de 350g de chocolats fins disposés en couches concentriques avec emballages dorés, verts et bruns.",
    image: coupeEleganceM,
    reference: "Réf 036",
    weight: "350g",
  },
  {
    id: 14,
    name: "Coupe Élégance L",
    price: "750 Dhs",
    description: "Grande coupe élégante en porcelaine blanche avec base dorée. Assortiment premium de 650g de chocolats fins arrangés en dôme élégant avec une variété d'emballages métalliques.",
    image: coupeEleganceL,
    reference: "Réf 037",
    weight: "650g",
  },
  {
    id: 15,
    name: "Coupe Émeraude S",
    price: "350 Dhs",
    description: "Coupe émeraude petite avec base dorée sphérique. Assortiment de 350g de chocolats carrés emballés dans des papiers dorés et vert émeraude, avec pralines au centre.",
    image: coupeEmeraudeS,
    reference: "Réf 038",
    weight: "350g",
  },
  {
    id: 16,
    name: "Coupe Émeraude M",
    price: "750 Dhs",
    description: "Coupe émeraude moyenne avec base dorée sphérique. Assortiment généreux de 650g de chocolats carrés emballés dans des papiers dorés et vert émeraude, avec pralines et chocolats blancs au centre.",
    image: coupeEmeraudeM,
    reference: "Réf 039",
    weight: "650g",
  },
  {
    id: 17,
    name: "Coupe Prestige",
    price: "650 Dhs",
    description: "Coupe prestige en or texturé avec motif tissé. Assortiment de 500g de chocolats rectangulaires emballés dans des papiers dorés et orange, avec pralines au centre.",
    image: coupePrestige,
    reference: "Réf 040",
    weight: "500g",
  },
  {
    id: 18,
    name: "Coupe Prestige L",
    price: "950 Dhs",
    description: "Grande coupe prestige en or texturé avec motif tissé. Assortiment premium de 900g de chocolats rectangulaires emballés dans des papiers dorés et orange, avec pralines et dattes enrobées au centre.",
    image: coupePrestigeL,
    reference: "Réf 041",
    weight: "900g",
  },
  {
    id: 19,
    name: "Coupe Tresor M",
    price: "1100 Dhs",
    description: "Coupe trésor moyenne sur plateau gris argenté avec pieds dorés. Assortiment de 800g de chocolats carrés emballés dans des papiers bleu royal et blanc, avec pralines et chocolats décoratifs au centre.",
    image: coupeTresorM,
    reference: "Réf 042",
    weight: "800g",
  },
  {
    id: 20,
    name: "Coupe Tresor L",
    price: "1650 Dhs",
    description: "Grande coupe trésor sur plateau gris argenté avec pieds dorés. Assortiment exceptionnel de 1400g de chocolats carrés emballés dans des papiers bleu royal, blanc et doré, avec pralines et décorations au centre.",
    image: coupeTresorL,
    reference: "Réf 043",
    weight: "1400g",
  },
  {
    id: 21,
    name: "Coupe Audace S",
    price: "1200 Dhs",
    description: "Coupe audace petite avec base dorée circulaire et support argenté. Assortiment de 850g de chocolats carrés emballés dans des papiers rouge vif et blanc, avec pralines décoratives au centre.",
    image: coupeAudaceS,
    reference: "Réf 044",
    weight: "850g",
  },
  {
    id: 22,
    name: "Coupe Audace M",
    price: "1800 Dhs",
    description: "Coupe audace moyenne avec base dorée circulaire et support argenté. Assortiment généreux de 1500g de chocolats carrés emballés dans des papiers rouge vif et blanc, avec pralines et noisettes au centre.",
    image: coupeAudaceM,
    reference: "Réf 045",
    weight: "1500g",
  },
  {
    id: 23,
    name: "Coupe Audace L",
    price: "2600 Dhs",
    description: "Grande coupe audace avec base dorée circulaire et support argenté. Assortiment exceptionnel de 2300g de chocolats carrés emballés dans des papiers rouge vif et blanc, avec pralines, noisettes et amandes au centre.",
    image: coupeAudaceL,
    reference: "Réf 046",
    weight: "2300g",
  },
  {
    id: 24,
    name: "Oumnia",
    price: "550 Dhs",
    description: "Boîte cadeau élégante en crème avec intérieur doré et couvercle orné. Assortiment de 300g de chocolats carrés emballés dans des papiers vert-bleu sarcelle et argenté, accompagné d'un petit livre décoratif.",
    image: oumnia,
    reference: "Réf 047",
    weight: "300g",
  },
  {
    id: 25,
    name: "Oumnia L",
    price: "950 Dhs",
    description: "Grande boîte cadeau élégante en crème avec intérieur doré et couvercle orné. Assortiment généreux de 700g de chocolats carrés emballés dans des papiers vert-bleu sarcelle et argenté, accompagné d'un petit livre décoratif.",
    image: oumniaL,
    reference: "Réf 048",
    weight: "700g",
  },
  {
    id: 26,
    name: "Coupe Oval S",
    price: "650 Dhs",
    description: "Coupe ovale petite en porcelaine blanche. Assortiment de 600g de chocolats emballés dans des papiers métalliques dorés, cuivrés et argentés, avec pralines au centre.",
    image: coupeOvalS,
    reference: "Réf 023",
    weight: "600g",
  },
  {
    id: 27,
    name: "Coupe Oval M",
    price: "950 Dhs",
    description: "Coupe ovale moyenne en porcelaine blanche. Assortiment généreux de 900g de chocolats emballés dans des papiers métalliques dorés, cuivrés et argentés, avec pralines texturées et noisettes au centre.",
    image: coupeOvalM,
    reference: "Réf 024",
    weight: "900g",
  },
  {
    id: 28,
    name: "Serviteur",
    price: "1200 Dhs",
    description: "Serviteur à deux étages circulaires en porcelaine blanche avec bordures dorées. Assortiment exceptionnel de 1.1kg de chocolats emballés dans des papiers métalliques dorés, cuivrés et argentés, arrangés en cercles concentriques avec élément décoratif central.",
    image: serviteur,
    reference: "Réf 025",
    weight: "1.1kg",
  },
  {
    id: 29,
    name: "Coupe à pied L",
    price: "550 Dhs",
    description: "Élégante coupe à pied de taille L en céramique blanche avec base dorée. Garnie d'un assortiment raffiné de 450g de chocolats fins. Son design est sublimé par une décoration en foil rouge et un ornement précieux au centre. Idéale pour un cadeau sophistiqué.",
    image: coupePiedL,
    reference: "Réf 026",
    weight: "450g",
  },
  {
    id: 30,
    name: "Coupe à pied M",
    price: "1100 Dhs",
    description: "Somptueuse coupe à pied de taille M en céramique blanche avec base dorée. Offre une sélection généreuse de 900g de nos chocolats d'exception. Son allure luxueuse avec ses ornements scintillants en fait une pièce maîtresse pour toute occasion spéciale.",
    image: coupePiedM,
    reference: "Réf 027",
    weight: "900g",
  },
  {
    id: 31,
    name: "Coupe Prestige Gold M",
    price: "1300 Dhs",
    description: "Coupe prestige dorée de taille moyenne. Assortiment généreux de 900g de chocolats variés incluant des pralines, des chocolats enrobés de foil vert émeraude et doré, ainsi que des chocolats blancs. Ornée d'un ornement précieux en forme de bijou.",
    image: coupePrestigeGoldM,
    reference: "Réf 028",
    weight: "900g",
  },
  {
    id: 32,
    name: "Coupe Royale Gold L",
    price: "1500 Dhs",
    description: "Coupe royale dorée de grande taille. Assortiment exceptionnel de 1.1kg de chocolats premium incluant des pralines, des chocolats enrobés de foil vert émeraude et doré, ainsi que des chocolats blancs. Ornée d'un ornement précieux en forme de bijou. Le summum du luxe.",
    image: coupeRoyaleGoldL,
    reference: "Réf 029",
    weight: "1.1kg",
  },
  {
    id: 33,
    name: "Coupe Fedda M",
    price: "1650 Dhs",
    description: "Coupe Fedda argentée de taille moyenne avec poignées dorées et base dorée ornée. Assortiment raffiné de 650g de chocolats incluant des bonbons enrobés de foil doré avec embellissements, des pralines et des chocolats blancs avec nappage au centre.",
    image: coupeFeddaM,
    reference: "Réf 033",
    weight: "650g",
  },
  {
    id: 34,
    name: "Coupe Fedda L",
    price: "1950 Dhs",
    description: "Grande coupe Fedda argentée avec accents dorés et base dorée ornée. Assortiment exceptionnel de 1.1kg de chocolats premium incluant des bonbons enrobés de foil doré avec embellissements, des pralines et des chocolats blancs avec nappage. Design luxueux et élégant.",
    image: coupeFeddaL,
    reference: "Réf 034",
    weight: "1.1kg",
  },
];

const Coupes = () => {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate('/products');
  };

  return (
    <section id="coupes" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-6 sm:mb-10 md:mb-12 animate-slide-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-copper mb-2 sm:mb-4">
            Nos Coupes
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
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

export default Coupes;
