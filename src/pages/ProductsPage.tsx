import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, X, ArrowUpDown, ArrowUp, ArrowDown, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import product1 from "@/assets/Artboard 5.png";
import product2 from "@/assets/Artboard 6.png";
import product3 from "@/assets/Artboard 7.png";
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
import barCaramel from "@/assets/bar-caramel.jpg";
import barSpeculoos from "@/assets/bar-speculoos.jpg";
import barCitron from "@/assets/bar-citron.jpg";
import barPistache from "@/assets/bar-pistache.jpg";
import coupePiedL from "@/assets/Artboard 9.png";
import coupePiedM from "@/assets/Artboard 10.png";
import coupePrestigeGoldM from "@/assets/Artboard 11.png";
import coupeRoyaleGoldL from "@/assets/Artboard 9.png";
import coupeFeddaM from "@/assets/Artboard 10.png";
import coupeFeddaL from "@/assets/Artboard 11.png";
import coffretSmall from "@/assets/Artboard 16.png";
import coffretMedium from "@/assets/Artboard 17.png";
import coffretLarge from "@/assets/Artboard 18.png";

// Définition des catégories et produits
const categories = [
  { id: "all", name: "Tous les produits" },
  { id: "chocolats", name: "Chocolats" },
  { id: "tablettes", name: "Tablettes" },
  { id: "coupes", name: "Coupes" },
  { id: "coffrets", name: "Coffrets" },
  { id: "boites", name: "Boîtes" },
];

const allProducts = [
  // Chocolats
  {
    id: 1,
    name: "Collection Classique",
    description: "Assortiment de chocolats fins aux saveurs traditionnelles",
    price: "À partir de 250 Dhs",
    image: product1,
    category: "chocolats",
    tags: ["traditionnel", "assortiment"],
  },
  {
    id: 2,
    name: "Chocolat Noir Premium",
    description: "Chocolat noir pur à 70% de cacao",
    price: "180 Dhs",
    image: product2,
    category: "chocolats",
    tags: ["noir", "premium"],
  },
  {
    id: 3,
    name: "Chocolat au Lait",
    description: "Chocolat au lait crémeux et doux",
    price: "160 Dhs",
    image: product3,
    category: "chocolats",
    tags: ["lait", "crémeux"],
  },
  {
    id: 4,
    name: "Chocolat Blanc Vanille",
    description: "Chocolat blanc à la vanille de Madagascar",
    price: "170 Dhs",
    image: product1,
    category: "chocolats",
    tags: ["blanc", "vanille"],
  },
  {
    id: 5,
    name: "Chocolat Noir Épicé",
    description: "Chocolat noir aux épices orientales",
    price: "190 Dhs",
    image: product2,
    category: "chocolats",
    tags: ["noir", "épicé"],
  },

  // Tablettes
  {
    id: 6,
    name: "Tablette Caramel",
    description: "Tablette au caramel beurre salé",
    price: "120 Dhs",
    image: barCaramel,
    category: "tablettes",
    tags: ["caramel", "beurre salé"],
  },
  {
    id: 7,
    name: "Tablette Spéculoos",
    description: "Tablette aux biscuits spéculoos",
    price: "130 Dhs",
    image: barSpeculoos,
    category: "tablettes",
    tags: ["spéculoos", "biscuits"],
  },
  {
    id: 8,
    name: "Tablette Citron",
    description: "Tablette au citron confit",
    price: "125 Dhs",
    image: barCitron,
    category: "tablettes",
    tags: ["citron", "confit"],
  },
  {
    id: 9,
    name: "Tablette Pistache",
    description: "Tablette à la pistache d'Iran",
    price: "140 Dhs",
    image: barPistache,
    category: "tablettes",
    tags: ["pistache", "Iran"],
  },
  {
    id: 10,
    name: "Tablette Noisette",
    description: "Tablette aux noisettes grillées",
    price: "135 Dhs",
    image: barCaramel,
    category: "tablettes",
    tags: ["noisette", "grillé"],
  },
  {
    id: 11,
    name: "Tablette Framboise",
    description: "Tablette aux framboises séchées",
    price: "145 Dhs",
    image: barSpeculoos,
    category: "tablettes",
    tags: ["framboise", "fruit"],
  },

  // Coupes
  {
    id: 12,
    name: "Coupe Élégance S",
    description: "Coupe élégante en porcelaine blanche avec base dorée. Assortiment de 150g de chocolats fins emballés dans des papiers dorés, verts et bruns.",
    price: "200 Dhs",
    image: coupeEleganceS,
    category: "coupes",
    tags: ["élégance", "porcelaine", "150g"],
    reference: "Réf 035",
    weight: "150g",
  },
  {
    id: 13,
    name: "Coupe Élégance M",
    description: "Coupe élégante moyenne en porcelaine blanche avec base dorée. Assortiment généreux de 350g de chocolats fins disposés en couches concentriques.",
    price: "350 Dhs",
    image: coupeEleganceM,
    category: "coupes",
    tags: ["élégance", "porcelaine", "350g"],
    reference: "Réf 036",
    weight: "350g",
  },
  {
    id: 14,
    name: "Coupe Élégance L",
    description: "Grande coupe élégante en porcelaine blanche avec base dorée. Assortiment premium de 650g de chocolats fins arrangés en dôme élégant.",
    price: "750 Dhs",
    image: coupeEleganceL,
    category: "coupes",
    tags: ["élégance", "porcelaine", "650g"],
    reference: "Réf 037",
    weight: "650g",
  },
  {
    id: 15,
    name: "Coupe Émeraude S",
    description: "Coupe émeraude petite avec base dorée sphérique. Assortiment de 350g de chocolats carrés emballés dans des papiers dorés et vert émeraude.",
    price: "350 Dhs",
    image: coupeEmeraudeS,
    category: "coupes",
    tags: ["émeraude", "dorée", "350g"],
    reference: "Réf 038",
    weight: "350g",
  },
  {
    id: 16,
    name: "Coupe Émeraude M",
    description: "Coupe émeraude moyenne avec base dorée sphérique. Assortiment généreux de 650g de chocolats carrés emballés dans des papiers dorés et vert émeraude.",
    price: "750 Dhs",
    image: coupeEmeraudeM,
    category: "coupes",
    tags: ["émeraude", "dorée", "650g"],
    reference: "Réf 039",
    weight: "650g",
  },
  {
    id: 17,
    name: "Coupe Prestige",
    description: "Coupe prestige en or texturé avec motif tissé. Assortiment de 500g de chocolats rectangulaires emballés dans des papiers dorés et orange.",
    price: "650 Dhs",
    image: coupePrestige,
    category: "coupes",
    tags: ["prestige", "dorée", "500g"],
    reference: "Réf 040",
    weight: "500g",
  },
  {
    id: 18,
    name: "Coupe Prestige L",
    description: "Grande coupe prestige en or texturé avec motif tissé. Assortiment premium de 900g de chocolats rectangulaires emballés dans des papiers dorés et orange.",
    price: "950 Dhs",
    image: coupePrestigeL,
    category: "coupes",
    tags: ["prestige", "dorée", "900g"],
    reference: "Réf 041",
    weight: "900g",
  },
  {
    id: 19,
    name: "Coupe Tresor M",
    description: "Coupe trésor moyenne sur plateau gris argenté avec pieds dorés. Assortiment de 800g de chocolats carrés emballés dans des papiers bleu royal et blanc.",
    price: "1100 Dhs",
    image: coupeTresorM,
    category: "coupes",
    tags: ["trésor", "argenté", "800g"],
    reference: "Réf 042",
    weight: "800g",
  },
  {
    id: 20,
    name: "Coupe Tresor L",
    description: "Grande coupe trésor sur plateau gris argenté avec pieds dorés. Assortiment exceptionnel de 1400g de chocolats carrés emballés dans des papiers bleu royal, blanc et doré.",
    price: "1650 Dhs",
    image: coupeTresorL,
    category: "coupes",
    tags: ["trésor", "argenté", "1400g"],
    reference: "Réf 043",
    weight: "1400g",
  },
  {
    id: 21,
    name: "Coupe Audace S",
    description: "Coupe audace petite avec base dorée circulaire et support argenté. Assortiment de 850g de chocolats carrés emballés dans des papiers rouge vif et blanc.",
    price: "1200 Dhs",
    image: coupeAudaceS,
    category: "coupes",
    tags: ["audace", "rouge", "850g"],
    reference: "Réf 044",
    weight: "850g",
  },
  {
    id: 22,
    name: "Coupe Audace M",
    description: "Coupe audace moyenne avec base dorée circulaire et support argenté. Assortiment généreux de 1500g de chocolats carrés emballés dans des papiers rouge vif et blanc.",
    price: "1800 Dhs",
    image: coupeAudaceM,
    category: "coupes",
    tags: ["audace", "rouge", "1500g"],
    reference: "Réf 045",
    weight: "1500g",
  },
  {
    id: 23,
    name: "Coupe Audace L",
    description: "Grande coupe audace avec base dorée circulaire et support argenté. Assortiment exceptionnel de 2300g de chocolats carrés emballés dans des papiers rouge vif et blanc.",
    price: "2600 Dhs",
    image: coupeAudaceL,
    category: "coupes",
    tags: ["audace", "rouge", "2300g"],
    reference: "Réf 046",
    weight: "2300g",
  },
  {
    id: 24,
    name: "Oumnia",
    description: "Boîte cadeau élégante en crème avec intérieur doré et couvercle orné. Assortiment de 300g de chocolats carrés emballés dans des papiers vert-bleu sarcelle et argenté.",
    price: "550 Dhs",
    image: oumnia,
    category: "coupes",
    tags: ["oumnia", "boîte", "300g"],
    reference: "Réf 047",
    weight: "300g",
  },
  {
    id: 25,
    name: "Oumnia L",
    description: "Grande boîte cadeau élégante en crème avec intérieur doré et couvercle orné. Assortiment généreux de 700g de chocolats carrés emballés dans des papiers vert-bleu sarcelle et argenté.",
    price: "950 Dhs",
    image: oumniaL,
    category: "coupes",
    tags: ["oumnia", "boîte", "700g"],
    reference: "Réf 048",
    weight: "700g",
  },
  {
    id: 26,
    name: "Coupe Oval S",
    description: "Coupe ovale petite en porcelaine blanche. Assortiment de 600g de chocolats emballés dans des papiers métalliques dorés, cuivrés et argentés.",
    price: "650 Dhs",
    image: coupeOvalS,
    category: "coupes",
    tags: ["ovale", "porcelaine", "600g"],
    reference: "Réf 023",
    weight: "600g",
  },
  {
    id: 27,
    name: "Coupe Oval M",
    description: "Coupe ovale moyenne en porcelaine blanche. Assortiment généreux de 900g de chocolats emballés dans des papiers métalliques dorés, cuivrés et argentés.",
    price: "950 Dhs",
    image: coupeOvalM,
    category: "coupes",
    tags: ["ovale", "porcelaine", "900g"],
    reference: "Réf 024",
    weight: "900g",
  },
  {
    id: 28,
    name: "Serviteur",
    description: "Serviteur à deux étages circulaires en porcelaine blanche avec bordures dorées. Assortiment exceptionnel de 1.1kg de chocolats emballés dans des papiers métalliques dorés, cuivrés et argentés.",
    price: "1200 Dhs",
    image: serviteur,
    category: "coupes",
    tags: ["serviteur", "deux étages", "1.1kg"],
    reference: "Réf 025",
    weight: "1.1kg",
  },
  {
    id: 29,
    name: "Coupe à pied L",
    description: "Élégante coupe à pied de taille L en céramique blanche avec base dorée. Garnie d'un assortiment raffiné de 450g de chocolats fins. Son design est sublimé par une décoration en foil rouge et un ornement précieux au centre.",
    price: "550 Dhs",
    image: coupePiedL,
    category: "coupes",
    tags: ["pied", "céramique", "450g"],
    reference: "Réf 026",
    weight: "450g",
  },
  {
    id: 30,
    name: "Coupe à pied M",
    description: "Somptueuse coupe à pied de taille M en céramique blanche avec base dorée. Offre une sélection généreuse de 900g de nos chocolats d'exception. Son allure luxueuse avec ses ornements scintillants en fait une pièce maîtresse.",
    price: "1100 Dhs",
    image: coupePiedM,
    category: "coupes",
    tags: ["pied", "céramique", "900g"],
    reference: "Réf 027",
    weight: "900g",
  },
  {
    id: 31,
    name: "Coupe Prestige Gold M",
    description: "Coupe prestige dorée de taille moyenne. Assortiment généreux de 900g de chocolats variés incluant des pralines, des chocolats enrobés de foil vert émeraude et doré, ainsi que des chocolats blancs. Ornée d'un ornement précieux.",
    price: "1300 Dhs",
    image: coupePrestigeGoldM,
    category: "coupes",
    tags: ["prestige", "gold", "900g"],
    reference: "Réf 028",
    weight: "900g",
  },
  {
    id: 32,
    name: "Coupe Royale Gold L",
    description: "Coupe royale dorée de grande taille. Assortiment exceptionnel de 1.1kg de chocolats premium incluant des pralines, des chocolats enrobés de foil vert émeraude et doré, ainsi que des chocolats blancs. Le summum du luxe.",
    price: "1500 Dhs",
    image: coupeRoyaleGoldL,
    category: "coupes",
    tags: ["royale", "gold", "1.1kg"],
    reference: "Réf 029",
    weight: "1.1kg",
  },
  {
    id: 33,
    name: "Coupe Fedda M",
    description: "Coupe Fedda argentée de taille moyenne avec poignées dorées et base dorée ornée. Assortiment raffiné de 650g de chocolats incluant des bonbons enrobés de foil doré avec embellissements, des pralines et des chocolats blancs.",
    price: "1650 Dhs",
    image: coupeFeddaM,
    category: "coupes",
    tags: ["fedda", "argentée", "650g"],
    reference: "Réf 033",
    weight: "650g",
  },
  {
    id: 34,
    name: "Coupe Fedda L",
    description: "Grande coupe Fedda argentée avec accents dorés et base dorée ornée. Assortiment exceptionnel de 1.1kg de chocolats premium incluant des bonbons enrobés de foil doré avec embellissements, des pralines et des chocolats blancs.",
    price: "1950 Dhs",
    image: coupeFeddaL,
    category: "coupes",
    tags: ["fedda", "argentée", "1.1kg"],
    reference: "Réf 034",
    weight: "1.1kg",
  },

  // Coffrets
  {
    id: 18,
    name: "Coffret Découverte",
    description: "Coffret petit format - 12 pièces",
    price: "180 Dhs",
    image: coffretSmall,
    category: "coffrets",
    tags: ["découverte", "12 pièces"],
  },
  {
    id: 19,
    name: "Coffret Prestige",
    description: "Coffret moyen format - 24 pièces",
    price: "320 Dhs",
    image: coffretMedium,
    category: "coffrets",
    tags: ["prestige", "24 pièces"],
  },
  {
    id: 20,
    name: "Volupté - 450 Grs",
    description: "plateau en cuir bicolore (petit)",
    price: "700.00 Dhs",
    image: coffretSmall,
    category: "coffrets",
    tags: ["plateau", "cuir"],
  },
  {
    id: 21,
    name: "Volupté - 1kg",
    description: "plateau en cuir bicolore (moyen)",
    price: "1500.00 Dhs",
    image: coffretMedium,
    category: "coffrets",
    tags: ["plateau", "cuir"],
  },
  {
    id: 22,
    name: "Volupté - 2kg",
    description: "plateau en cuir bicolore (grand)",
    price: "2600.00 Dhs",
    image: coffretLarge,
    category: "coffrets",
    tags: ["plateau", "cuir"],
  },

  // Boîtes
  {
    id: 23,
    name: "Boîte Classique",
    description: "Boîte en carton recyclé",
    price: "45 Dhs",
    image: coffretSmall,
    category: "boites",
    tags: ["classique", "recyclé"],
  },
  {
    id: 24,
    name: "Boîte Premium",
    description: "Boîte en carton premium",
    price: "65 Dhs",
    image: coffretMedium,
    category: "boites",
    tags: ["premium", "carton"],
  },
  {
    id: 25,
    name: "Boîte Métal",
    description: "Boîte en métal étamé",
    price: "85 Dhs",
    image: coffretLarge,
    category: "boites",
    tags: ["métal", "étamé"],
  },
  {
    id: 26,
    name: "Boîte Bois",
    description: "Boîte en bois massif",
    price: "120 Dhs",
    image: coffretSmall,
    category: "boites",
    tags: ["bois", "massif"],
  },
  {
    id: 27,
    name: "Boîte Cadeau",
    description: "Boîte cadeau avec ruban",
    price: "55 Dhs",
    image: coffretMedium,
    category: "boites",
    tags: ["cadeau", "ruban"],
  },

];

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // Lire la catégorie depuis l'URL au chargement de la page
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  // Configuration de la pagination
  const productsPerPage = 12;

  // Fonction pour extraire le prix numérique
  const extractPrice = (priceString: string) => {
    const match = priceString.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  };

  // Filtrage et tri des produits
  const filteredProducts = allProducts
    .filter(product => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return extractPrice(a.price) - extractPrice(b.price);
        case "price-desc":
          return extractPrice(b.price) - extractPrice(a.price);
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

  // Calcul de la pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Réinitialiser la page quand les filtres changent
  const handleFilterChange = (newCategory: string, newSearchTerm: string, newSortBy: string) => {
    setSelectedCategory(newCategory);
    setSearchTerm(newSearchTerm);
    setSortBy(newSortBy);
    setCurrentPage(1); // Retour à la première page
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setSearchTerm("");
    setSortBy("default");
    setCurrentPage(1);
  };

  // Fonctions de pagination
  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header avec titre et recherche */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-chocolate mb-3 sm:mb-4">
              Nos Produits
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre gamme complète de créations chocolatées artisanales
            </p>
          </div>

          {/* Barre de filtrage */}
          <div className="bg-white rounded-xl shadow-soft border border-secondary/20 p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
              {/* Recherche */}
              <div className="w-full lg:w-64">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-chocolate/60 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Rechercher..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      handleFilterChange(selectedCategory, e.target.value, sortBy);
                    }}
                    className="pl-10 pr-4 py-2 border border-secondary/30 focus:border-chocolate focus:ring-2 focus:ring-chocolate/20 transition-all rounded-lg"
                  />
                </div>
              </div>

              {/* Catégories */}
              <div className="flex flex-wrap gap-2 w-full lg:flex-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleFilterChange(category.id, searchTerm, sortBy)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                      selectedCategory === category.id
                        ? "bg-chocolate text-white shadow-md"
                        : "bg-secondary/20 text-chocolate hover:bg-chocolate/10 border border-secondary/30"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Tri */}
              <div className="flex items-center gap-3 w-full lg:w-auto">
                <Select value={sortBy} onValueChange={(value) => handleFilterChange(selectedCategory, searchTerm, value)}>
                  <SelectTrigger className="w-full lg:w-[180px] border-secondary/30 focus:border-chocolate focus:ring-2 focus:ring-chocolate/20 rounded-lg">
                    <SelectValue placeholder="Trier par" />
                  </SelectTrigger>
                  <SelectContent className="rounded-lg">
                    <SelectItem value="default">Par défaut</SelectItem>
                    <SelectItem value="price-asc">Prix croissant</SelectItem>
                    <SelectItem value="price-desc">Prix décroissant</SelectItem>
                    <SelectItem value="name-asc">A-Z</SelectItem>
                    <SelectItem value="name-desc">Z-A</SelectItem>
                  </SelectContent>
                </Select>

                {/* Bouton effacer */}
                {(selectedCategory !== "all" || searchTerm || sortBy !== "default") && (
                  <button
                    onClick={clearFilters}
                    className="p-2 text-chocolate hover:bg-chocolate/10 rounded-lg transition-all border border-secondary/30"
                    title="Effacer les filtres"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Compteur de résultats */}
            <div className="mt-4 pt-4 border-t border-secondary/20">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Badge className="bg-chocolate text-white">
                  {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''}
                </Badge>
                {selectedCategory !== "all" && (
                  <span>
                    dans <span className="font-semibold text-chocolate">{categories.find(c => c.id === selectedCategory)?.name}</span>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grille des produits */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-3 sm:px-4">
          {currentProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {currentProducts.map((product, index) => (
                <Card 
                  key={product.id} 
                  className="group overflow-hidden border-2 border-gray-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in h-full flex flex-col hover:border-chocolate/20 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                        <ShoppingCart className="h-4 w-4 text-chocolate" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-3 sm:p-4 md:p-6 flex flex-col flex-grow">
                    <h3 className="text-xs sm:text-sm md:text-lg font-serif font-semibold text-chocolate mb-1 sm:mb-2 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                      {product.name}
                    </h3>
                    {(product as any).reference && (
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded">
                          {(product as any).reference}
                        </span>
                        {(product as any).weight && (
                          <span className="text-xs text-muted-foreground">
                            {(product as any).weight}
                          </span>
                        )}
                      </div>
                    )}
                    <p className="text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm overflow-hidden flex-grow" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
                      {product.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-1 sm:px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                      {product.tags.length > 2 && (
                        <span className="px-1 sm:px-2 py-0.5 sm:py-1 bg-gray-200 text-gray-700 rounded-md text-xs font-medium">
                          +{product.tags.length - 2}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 mt-auto">
                      <span className="text-sm sm:text-base md:text-lg font-bold text-chocolate">
                        {product.price}
                      </span>
                      <Button
                        size="sm"
                        onClick={() => navigate(`/product/${product.id}`)}
                        className="bg-gradient-to-r from-chocolate to-copper hover:from-chocolate/90 hover:to-copper/90 text-white font-semibold text-xs sm:text-sm w-full sm:w-auto py-2 px-3 sm:px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                      >
                        <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        Commander
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-serif font-bold text-chocolate mb-2">
                Aucun produit trouvé
              </h3>
              <p className="text-muted-foreground mb-6">
                Essayez de modifier vos critères de recherche ou de filtrage
              </p>
              <Button onClick={clearFilters} variant="outline">
                Effacer les filtres
              </Button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center mt-8 sm:mt-12 space-x-1 sm:space-x-2">
              {/* Bouton Précédent */}
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-xl border-2 border-gray-200 bg-white hover:bg-gray-50 hover:border-chocolate disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-xs sm:text-sm font-semibold"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Précédent</span>
                <span className="sm:hidden">Préc</span>
              </button>

              {/* Numéros de pages */}
              <div className="flex items-center space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // Afficher seulement quelques pages autour de la page actuelle
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm ${
                          currentPage === page
                            ? "bg-gradient-to-r from-chocolate to-copper text-white shadow-lg scale-110"
                            : "bg-white border-2 border-gray-200 text-gray-700 hover:border-chocolate hover:text-chocolate hover:scale-105"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  } else if (
                    page === currentPage - 2 ||
                    page === currentPage + 2
                  ) {
                    return <span key={page} className="text-gray-400 font-bold">...</span>;
                  }
                  return null;
                })}
              </div>

              {/* Bouton Suivant */}
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-xl border-2 border-gray-200 bg-white hover:bg-gray-50 hover:border-chocolate disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-xs sm:text-sm font-semibold"
              >
                <span className="hidden sm:inline">Suivant</span>
                <span className="sm:hidden">Suiv</span>
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          )}

          {/* Informations de pagination */}
          {totalPages > 1 && (
            <div className="text-center mt-4 sm:mt-6">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl text-xs sm:text-sm text-gray-600 font-medium">
                <span>Page {currentPage} sur {totalPages}</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span className="hidden sm:inline">Affichage de {startIndex + 1} à {Math.min(endIndex, filteredProducts.length)} sur {filteredProducts.length} produits</span>
                <span className="sm:hidden">{startIndex + 1}-{Math.min(endIndex, filteredProducts.length)}/{filteredProducts.length}</span>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;


