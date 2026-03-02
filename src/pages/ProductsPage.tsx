import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, X, ArrowUpDown, ArrowUp, ArrowDown, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { productCategories as categories, productsCatalog as allProducts } from "@/data/products";

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
                  <div className="relative overflow-hidden aspect-square bg-secondary/10 flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
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


