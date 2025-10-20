import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Heart, Share2, Star, ShoppingCart } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import coupeAudaceGold from "@/assets/coupe-audace-gold.jpg";
import coupeAudaceGreen from "@/assets/coupe-audace-green.jpg";
import coupeEmpreinteCopper from "@/assets/coupe-empreinte-copper.jpg";
import coupeEmpreinteSilver from "@/assets/coupe-empreinte-silver.jpg";

// Base de données des produits (même que ProductsPage)
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
    fullDescription: "Notre collection classique réunit les saveurs intemporelles du chocolat. Chaque pièce est soigneusement sélectionnée pour offrir une expérience gustative exceptionnelle. Un assortiment parfait pour découvrir l'art du chocolat dans sa forme la plus pure.",
    ingredients: "Cacao pur, sucre de canne, beurre de cacao, vanille naturelle",
    weight: "250g",
    allergens: "Contient du lait et des traces de noix",
    rating: 4.8,
    reviews: 127
  },
  {
    id: 2,
    name: "Chocolat Noir Premium",
    description: "Chocolat noir pur à 70% de cacao",
    price: "180 Dhs",
    image: product2,
    category: "chocolats",
    tags: ["noir", "premium"],
    fullDescription: "Un chocolat noir d'exception avec 70% de cacao pur. Cette tablette révèle des notes fruitées et une amertume équilibrée qui séduira les amateurs de chocolat noir authentique.",
    ingredients: "Cacao 70%, sucre de canne, beurre de cacao",
    weight: "100g",
    allergens: "Peut contenir des traces de lait et de noix",
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: "Chocolat au Lait",
    description: "Chocolat au lait crémeux et doux",
    price: "160 Dhs",
    image: product3,
    category: "chocolats",
    tags: ["lait", "crémeux"],
    fullDescription: "Notre chocolat au lait allie douceur et crémeux pour une expérience gourmande incomparable. Parfait pour les moments de détente et de partage.",
    ingredients: "Cacao, lait entier, sucre de canne, beurre de cacao, vanille",
    weight: "100g",
    allergens: "Contient du lait",
    rating: 4.7,
    reviews: 156
  },
  // Coupes
  {
    id: 4,
    name: "Audace Dorée",
    description: "Coupe dorée en céramique (grande)",
    price: "950 Dhs",
    image: coupeAudaceGold,
    category: "coupes",
    tags: ["dorée", "céramique"],
    fullDescription: "Une coupe d'exception en céramique dorée qui sublime vos créations chocolatées. Design moderne et élégant pour des présentations raffinées.",
    ingredients: "Céramique de qualité, dorure 24 carats",
    weight: "800g",
    allergens: "Aucun",
    rating: 4.9,
    reviews: 43
  },
  {
    id: 5,
    name: "Audace Verte",
    description: "Coupe dorée en céramique (moyenne)",
    price: "690 Dhs",
    image: coupeAudaceGreen,
    category: "coupes",
    tags: ["verte", "céramique"],
    fullDescription: "Version moyenne de notre coupe Audace avec une finition verte élégante. Parfaite pour des portions individuelles raffinées.",
    ingredients: "Céramique de qualité, émail vert",
    weight: "500g",
    allergens: "Aucun",
    rating: 4.8,
    reviews: 67
  },
  {
    id: 6,
    name: "Empreinte Cuivre",
    description: "Coupe en céramique",
    price: "1750 Dhs",
    image: coupeEmpreinteCopper,
    category: "coupes",
    tags: ["cuivre", "céramique"],
    fullDescription: "Une œuvre d'art en céramique avec finition cuivre. Chaque pièce est unique et témoigne de notre savoir-faire artisanal.",
    ingredients: "Céramique artisanale, finition cuivre",
    weight: "1200g",
    allergens: "Aucun",
    rating: 5.0,
    reviews: 28
  },
  {
    id: 7,
    name: "Empreinte Argent",
    description: "Coupelle argentée en céramique (moyenne)",
    price: "820 Dhs",
    image: coupeEmpreinteSilver,
    category: "coupes",
    tags: ["argent", "céramique"],
    fullDescription: "Coupelle raffinée avec finition argentée. Design épuré et moderne pour une présentation sophistiquée de vos créations.",
    ingredients: "Céramique de qualité, finition argent",
    weight: "600g",
    allergens: "Aucun",
    rating: 4.7,
    reviews: 52
  },
  // Truffes
  {
    id: 8,
    name: "Truffes Premium",
    description: "Truffes artisanales avec garniture d'or comestible",
    price: "À partir de 350 Dhs",
    image: product3,
    category: "truffes",
    tags: ["premium", "or"],
    fullDescription: "Nos truffes premium sont une véritable œuvre d'art culinaire. Garnies d'or comestible, elles offrent une expérience gustative et visuelle exceptionnelle.",
    ingredients: "Ganache au chocolat noir, cacao pur, or comestible 24 carats",
    weight: "200g (12 pièces)",
    allergens: "Contient du lait et des traces de noix",
    rating: 4.9,
    reviews: 91
  },
  {
    id: 9,
    name: "Truffes Classiques",
    description: "Truffes traditionnelles aux saveurs authentiques",
    price: "280 Dhs",
    image: product1,
    category: "truffes",
    tags: ["classique", "traditionnel"],
    fullDescription: "Retour aux sources avec nos truffes classiques. Recette traditionnelle respectée pour des saveurs authentiques et intemporelles.",
    ingredients: "Ganache au chocolat, cacao en poudre, crème fraîche",
    weight: "150g (9 pièces)",
    allergens: "Contient du lait",
    rating: 4.6,
    reviews: 134
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isPersonalized, setIsPersonalized] = useState(false);
  const [personalizationText, setPersonalizationText] = useState("");
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderForm, setOrderForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    message: ""
  });

  const product = allProducts.find(p => p.id === parseInt(id || "0"));

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-chocolate mb-4">Produit non trouvé</h1>
          <Button onClick={() => navigate('/products')}>
            Retour aux produits
          </Button>
        </div>
      </div>
    );
  }

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Rediriger vers la page de confirmation avec les données
    navigate('/order-confirmation', {
      state: {
        product,
        quantity,
        isPersonalized,
        personalizationText,
        orderForm
      }
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? 'fill-accent text-accent' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header avec navigation */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-secondary/20 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/products')}
              className="flex items-center gap-2 text-chocolate hover:bg-chocolate/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux produits
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image du produit */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              <Badge variant="secondary" className="bg-chocolate/10 text-chocolate">
                {product.category}
              </Badge>
              {product.tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Informations du produit */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-serif font-bold text-chocolate mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {product.description}
              </p>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} avis)
                </span>
              </div>

              <div className="text-3xl font-bold text-copper mb-6">
                {product.price}
              </div>
            </div>

            {/* Description complète */}
            <Card className="bg-secondary/5">
              <CardContent className="p-6">
                <h3 className="font-semibold text-chocolate mb-3">Description</h3>
                <p className="text-muted-foreground mb-4">{product.fullDescription}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-chocolate">Poids:</span>
                    <span className="ml-2 text-muted-foreground">{product.weight}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-chocolate">Ingrédients:</span>
                    <span className="ml-2 text-muted-foreground">{product.ingredients}</span>
                  </div>
                </div>
                
                {product.allergens && (
                  <div className="mt-4">
                    <span className="font-semibold text-chocolate">Allergènes:</span>
                    <span className="ml-2 text-muted-foreground">{product.allergens}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Options de personnalisation */}
            <Card className="bg-secondary/5">
              <CardContent className="p-6">
                <h3 className="font-semibold text-chocolate mb-4">Options</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="quantity" className="font-semibold">Quantité</Label>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </Button>
                      <span className="w-12 text-center">{quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="personalize"
                      checked={isPersonalized}
                      onChange={(e) => setIsPersonalized(e.target.checked)}
                      className="rounded border-chocolate text-chocolate focus:ring-chocolate"
                    />
                    <Label htmlFor="personalize" className="font-semibold">
                      Personnaliser ce produit
                    </Label>
                  </div>

                  {isPersonalized && (
                    <div>
                      <Label htmlFor="personalization" className="font-semibold">
                        Message de personnalisation
                      </Label>
                      <Textarea
                        id="personalization"
                        placeholder="Entrez votre message personnalisé..."
                        value={personalizationText}
                        onChange={(e) => setPersonalizationText(e.target.value)}
                        className="mt-2"
                        rows={3}
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Boutons d'action */}
            <div className="flex gap-4">
              <Button
                size="lg"
                className="flex-1 bg-chocolate hover:bg-chocolate/90 text-white"
                onClick={() => setShowOrderForm(true)}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Commander
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de commande */}
      {showOrderForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md bg-white">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-chocolate mb-6">Finaliser votre commande</h2>
              
              <form onSubmit={handleOrderSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="fullName" className="font-semibold">Nom complet *</Label>
                  <Input
                    id="fullName"
                    value={orderForm.fullName}
                    onChange={(e) => setOrderForm({...orderForm, fullName: e.target.value})}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="font-semibold">Téléphone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={orderForm.phone}
                    onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="font-semibold">Adresse complète *</Label>
                  <Textarea
                    id="address"
                    value={orderForm.address}
                    onChange={(e) => setOrderForm({...orderForm, address: e.target.value})}
                    required
                    className="mt-1"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="font-semibold">Message (optionnel)</Label>
                  <Textarea
                    id="message"
                    value={orderForm.message}
                    onChange={(e) => setOrderForm({...orderForm, message: e.target.value})}
                    className="mt-1"
                    rows={2}
                    placeholder="Instructions spéciales..."
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowOrderForm(false)}
                    className="flex-1"
                  >
                    Annuler
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-chocolate hover:bg-chocolate/90 text-white"
                  >
                    Confirmer la commande
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
