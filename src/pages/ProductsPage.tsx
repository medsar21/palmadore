import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, X, ArrowUpDown, ArrowUp, ArrowDown, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import coupeAudaceGold from "@/assets/coupe-audace-gold.jpg";
import coupeAudaceGreen from "@/assets/coupe-audace-green.jpg";
import coupeEmpreinteCopper from "@/assets/coupe-empreinte-copper.jpg";
import coupeEmpreinteSilver from "@/assets/coupe-empreinte-silver.jpg";
import barCaramel from "@/assets/bar-caramel.jpg";
import barSpeculoos from "@/assets/bar-speculoos.jpg";
import barCitron from "@/assets/bar-citron.jpg";
import barPistache from "@/assets/bar-pistache.jpg";
import coffretSmall from "@/assets/coffret-small.jpg";
import coffretMedium from "@/assets/coffret-medium.jpg";
import coffretLarge from "@/assets/coffret-large.jpg";

// Définition des catégories et produits
const categories = [
  { id: "all", name: "Tous les produits" },
  { id: "chocolats", name: "Chocolats" },
  { id: "tablettes", name: "Tablettes" },
  { id: "coupes", name: "Coupes" },
  { id: "coffrets", name: "Coffrets" },
  { id: "boites", name: "Boîtes" },
  { id: "truffes", name: "Truffes" },
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
    name: "Audace Dorée",
    description: "Coupe dorée en céramique (grande)",
    price: "950 Dhs",
    image: coupeAudaceGold,
    category: "coupes",
    tags: ["dorée", "céramique"],
  },
  {
    id: 13,
    name: "Audace Verte",
    description: "Coupe dorée en céramique (moyenne)",
    price: "690 Dhs",
    image: coupeAudaceGreen,
    category: "coupes",
    tags: ["verte", "céramique"],
  },
  {
    id: 14,
    name: "Empreinte Cuivre",
    description: "Coupe en céramique",
    price: "1750 Dhs",
    image: coupeEmpreinteCopper,
    category: "coupes",
    tags: ["cuivre", "céramique"],
  },
  {
    id: 15,
    name: "Empreinte Argent",
    description: "Coupelle argentée en céramique (moyenne)",
    price: "820 Dhs",
    image: coupeEmpreinteSilver,
    category: "coupes",
    tags: ["argent", "céramique"],
  },
  {
    id: 16,
    name: "Coupe Élégance",
    description: "Coupe en porcelaine fine",
    price: "1100 Dhs",
    image: coupeAudaceGold,
    category: "coupes",
    tags: ["porcelaine", "élégance"],
  },
  {
    id: 17,
    name: "Coupe Moderne",
    description: "Coupe design contemporain",
    price: "750 Dhs",
    image: coupeAudaceGreen,
    category: "coupes",
    tags: ["moderne", "design"],
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

  // Truffes
  {
    id: 28,
    name: "Truffes Premium",
    description: "Truffes artisanales avec garniture d'or comestible",
    price: "À partir de 350 Dhs",
    image: product3,
    category: "truffes",
    tags: ["premium", "or"],
  },
  {
    id: 29,
    name: "Truffes Classiques",
    description: "Truffes traditionnelles aux saveurs authentiques",
    price: "280 Dhs",
    image: product1,
    category: "truffes",
    tags: ["classique", "traditionnel"],
  },
  {
    id: 30,
    name: "Truffes Cognac",
    description: "Truffes au cognac vieux",
    price: "320 Dhs",
    image: product2,
    category: "truffes",
    tags: ["cognac", "vieux"],
  },
  {
    id: 31,
    name: "Truffes Framboise",
    description: "Truffes à la framboise",
    price: "290 Dhs",
    image: product3,
    category: "truffes",
    tags: ["framboise", "fruit"],
  },
  {
    id: 32,
    name: "Truffes Café",
    description: "Truffes au café arabica",
    price: "300 Dhs",
    image: product1,
    category: "truffes",
    tags: ["café", "arabica"],
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


