import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, Heart, Share2, Star, ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { productsCatalog as allProducts } from "@/data/products";
import { getProductUrl, submitOrderToGoogleSheet } from "@/lib/order-sheet";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [isPersonalized, setIsPersonalized] = useState(false);
  const [personalizationText, setPersonalizationText] = useState("");
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [isSubmittingOrder, setIsSubmittingOrder] = useState(false);
  const [orderForm, setOrderForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const parsedId = Number.parseInt(id || "", 10);
  const product = allProducts.find((p) => p.id === parsedId);

  useEffect(() => {
    const orderParam = searchParams.get("order");
    if (orderParam === "true") {
      setShowOrderForm(true);
    }
  }, [searchParams]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-chocolate mb-4">Produit non trouve</h1>
          <Button onClick={() => navigate("/products")}>Retour aux produits</Button>
        </div>
      </div>
    );
  }

  const rating = product.rating ?? 4.8;
  const reviews = product.reviews ?? 0;
  const fullDescription = product.fullDescription ?? product.description;
  const ingredients = product.ingredients ?? "Non specifies";
  const weight = product.weight ?? "-";

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const productUrl = getProductUrl(product);
    if (!productUrl) {
      toast({
        title: "Echec d'envoi",
        description: "URL du produit introuvable. Ouvrez le produit depuis la liste puis reessayez.",
        variant: "destructive",
      });
      return;
    }

    const orderNumber = `CMD-${Date.now().toString().slice(-6)}`;
    const orderPayload = {
      timestamp: new Date().toISOString(),
      orderNumber,
      productId: product.id,
      productName: product.name || "Ouvrir le produit",
      productUrl,
      productCategory: product.category,
      productPrice: product.price,
      quantity,
      isPersonalized,
      personalizationText: personalizationText || "",
      customerFullName: orderForm.fullName,
      customerEmail: orderForm.email,
      customerPhone: orderForm.phone,
      customerAddress: orderForm.address,
      customerMessage: orderForm.message || "",
    };

    setIsSubmittingOrder(true);

    try {
      await submitOrderToGoogleSheet(orderPayload);

      navigate("/order-confirmation", {
        state: {
          orderNumber,
          product,
          quantity,
          isPersonalized,
          personalizationText,
          orderForm,
        },
      });
    } catch (error) {
      const description = error instanceof Error ? error.message : "Impossible d'envoyer la commande.";
      toast({
        title: "Echec d'envoi",
        description,
        variant: "destructive",
      });
    } finally {
      setIsSubmittingOrder(false);
    }
  };

  const renderStars = (value: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(value) ? "fill-accent text-accent" : "text-muted-foreground"}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-white/80 backdrop-blur-sm border-b border-secondary/20 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate("/products")}
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
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-elegant bg-secondary/10 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-4"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
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

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-serif font-bold text-chocolate mb-4">{product.name}</h1>
              {product.reference && (
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-orange-100 text-orange-800 px-3 py-1">{product.reference}</Badge>
                  {product.weight && <span className="text-sm text-muted-foreground">{product.weight}</span>}
                </div>
              )}
              <p className="text-xl text-muted-foreground mb-6">{product.description}</p>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">{renderStars(rating)}</div>
                <span className="text-sm text-muted-foreground">
                  {rating} ({reviews} avis)
                </span>
              </div>

              <div className="text-3xl font-bold text-copper mb-6">{product.price}</div>
            </div>

            <Card className="bg-secondary/5">
              <CardContent className="p-6">
                <h3 className="font-semibold text-chocolate mb-3">Description</h3>
                <p className="text-muted-foreground mb-4">{fullDescription}</p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-chocolate">Poids:</span>
                    <span className="ml-2 text-muted-foreground">{weight}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-chocolate">Ingredients:</span>
                    <span className="ml-2 text-muted-foreground">{ingredients}</span>
                  </div>
                </div>

                {product.allergens && (
                  <div className="mt-4">
                    <span className="font-semibold text-chocolate">Allergenes:</span>
                    <span className="ml-2 text-muted-foreground">{product.allergens}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="bg-secondary/5">
              <CardContent className="p-6">
                <h3 className="font-semibold text-chocolate mb-4">Options</h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="quantity" className="font-semibold">
                      Quantite
                    </Label>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        type="button"
                      >
                        -
                      </Button>
                      <span className="w-12 text-center">{quantity}</span>
                      <Button variant="outline" size="sm" onClick={() => setQuantity(quantity + 1)} type="button">
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
                        placeholder="Entrez votre message personnalise..."
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

        <div className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-chocolate mb-8 text-center">Vous aimerez aussi</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {allProducts
              .filter((p) => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((suggestedProduct) => (
                <Card
                  key={suggestedProduct.id}
                  className="group overflow-hidden border-none shadow-soft hover:shadow-elegant transition-all duration-300 cursor-pointer"
                  onClick={() => navigate(`/product/${suggestedProduct.id}`)}
                >
                  <div className="relative overflow-hidden aspect-square bg-secondary/10 flex items-center justify-center">
                    <img
                      src={suggestedProduct.image}
                      alt={suggestedProduct.name}
                      className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <CardContent className="p-3 sm:p-4">
                    <h3 className="text-sm sm:text-base font-serif font-semibold text-chocolate mb-1 sm:mb-2 line-clamp-1">
                      {suggestedProduct.name}
                    </h3>
                    <p
                      className="text-xs sm:text-sm text-muted-foreground mb-2 overflow-hidden"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {suggestedProduct.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-base font-bold text-copper">{suggestedProduct.price}</span>
                      <Button
                        size="sm"
                        className="bg-chocolate hover:bg-chocolate/90 text-white text-xs sm:text-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/product/${suggestedProduct.id}`);
                        }}
                      >
                        Voir
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {allProducts.filter((p) => p.category === product.category && p.id !== product.id).length === 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {allProducts
                .filter((p) => p.id !== product.id)
                .slice(0, 4)
                .map((suggestedProduct) => (
                  <Card
                    key={suggestedProduct.id}
                    className="group overflow-hidden border-none shadow-soft hover:shadow-elegant transition-all duration-300 cursor-pointer"
                    onClick={() => navigate(`/product/${suggestedProduct.id}`)}
                  >
                    <div className="relative overflow-hidden aspect-square bg-secondary/10 flex items-center justify-center">
                      <img
                        src={suggestedProduct.image}
                        alt={suggestedProduct.name}
                        className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-3 sm:p-4">
                      <h3 className="text-sm sm:text-base font-serif font-semibold text-chocolate mb-1 sm:mb-2 line-clamp-1">
                        {suggestedProduct.name}
                      </h3>
                      <p
                        className="text-xs sm:text-sm text-muted-foreground mb-2 overflow-hidden"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {suggestedProduct.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm sm:text-base font-bold text-copper">{suggestedProduct.price}</span>
                        <Button
                          size="sm"
                          className="bg-chocolate hover:bg-chocolate/90 text-white text-xs sm:text-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/product/${suggestedProduct.id}`);
                          }}
                        >
                          Voir
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          )}
        </div>
      </div>

      {showOrderForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md bg-white">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-chocolate mb-6">Finaliser votre commande</h2>

              <form onSubmit={handleOrderSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="fullName" className="font-semibold">
                    Nom complet *
                  </Label>
                  <Input
                    id="fullName"
                    value={orderForm.fullName}
                    onChange={(e) => setOrderForm({ ...orderForm, fullName: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="font-semibold">
                    Telephone *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={orderForm.phone}
                    onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="font-semibold">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={orderForm.email}
                    onChange={(e) => setOrderForm({ ...orderForm, email: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="font-semibold">
                    Adresse complete *
                  </Label>
                  <Textarea
                    id="address"
                    value={orderForm.address}
                    onChange={(e) => setOrderForm({ ...orderForm, address: e.target.value })}
                    required
                    className="mt-1"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="font-semibold">
                    Message (optionnel)
                  </Label>
                  <Textarea
                    id="message"
                    value={orderForm.message}
                    onChange={(e) => setOrderForm({ ...orderForm, message: e.target.value })}
                    className="mt-1"
                    rows={2}
                    placeholder="Instructions speciales..."
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowOrderForm(false)}
                    className="flex-1"
                    disabled={isSubmittingOrder}
                  >
                    Annuler
                  </Button>
                  <Button type="submit" className="flex-1 bg-chocolate hover:bg-chocolate/90 text-white" disabled={isSubmittingOrder}>
                    {isSubmittingOrder ? "Envoi..." : "Confirmer la commande"}
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
