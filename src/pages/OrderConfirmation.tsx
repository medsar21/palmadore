import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowLeft, Home, Package, Clock, MapPin, Phone } from "lucide-react";

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const orderData = location.state;

  if (!orderData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-chocolate mb-4">Commande non trouvée</h1>
          <Button onClick={() => navigate('/products')}>
            Retour aux produits
          </Button>
        </div>
      </div>
    );
  }

  const { product, quantity, isPersonalized, personalizationText, orderForm } = orderData;

  // Générer un numéro de commande fictif
  const orderNumber = `CMD-${Date.now().toString().slice(-6)}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header de confirmation */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-serif font-bold text-chocolate mb-4">
            Commande Confirmée !
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Votre commande a été prise en charge avec succès. Nous vous contacterons dans les plus brefs délais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Détails de la commande */}
          <Card className="lg:col-span-2">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-chocolate mb-6">
                Détails de votre commande
              </h2>

              <div className="space-y-6">
                {/* Produit */}
                <div className="flex items-start gap-4 p-4 bg-secondary/5 rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-chocolate mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-chocolate/10 text-chocolate">
                        {product.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">Quantité: {quantity}</span>
                    </div>
                    <div className="text-lg font-bold text-copper">{product.price}</div>
                  </div>
                </div>

                {/* Personnalisation */}
                {isPersonalized && personalizationText && (
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <h4 className="font-semibold text-chocolate mb-2">Personnalisation</h4>
                    <p className="text-muted-foreground italic">"{personalizationText}"</p>
                  </div>
                )}

                {/* Informations de livraison */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-chocolate">Informations de livraison</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-chocolate mt-0.5" />
                      <div>
                        <p className="font-medium">{orderForm.fullName}</p>
                        <p className="text-sm text-muted-foreground">{orderForm.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-chocolate" />
                      <span>{orderForm.phone}</span>
                    </div>
                  </div>
                  
                  {orderForm.message && (
                    <div className="p-3 bg-secondary/5 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Message:</span> {orderForm.message}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Résumé et prochaines étapes */}
          <div className="space-y-6">
            {/* Résumé de commande */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-chocolate mb-4">Résumé</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Numéro de commande</span>
                    <span className="font-mono text-sm font-semibold">{orderNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Produit</span>
                    <span className="font-semibold">{product.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Quantité</span>
                    <span className="font-semibold">{quantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Prix</span>
                    <span className="font-semibold text-copper">{product.price}</span>
                  </div>
                  {isPersonalized && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Personnalisation</span>
                      <span className="font-semibold text-green-600">Incluse</span>
                    </div>
                  )}
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-copper">{product.price}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prochaines étapes */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-chocolate mb-4">Prochaines étapes</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-chocolate text-white text-xs flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-sm">Confirmation</p>
                      <p className="text-xs text-muted-foreground">Votre commande est confirmée</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 text-muted-foreground text-xs flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-sm">Préparation</p>
                      <p className="text-xs text-muted-foreground">Nous préparons votre commande</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 text-muted-foreground text-xs flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-sm">Livraison</p>
                      <p className="text-xs text-muted-foreground">Nous vous contacterons pour la livraison</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Informations de contact */}
            <Card className="bg-chocolate/5 border-chocolate/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-chocolate mb-4">Besoin d'aide ?</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-chocolate" />
                    <span>+212 530 56 20 79</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-chocolate" />
                    <span>+212 660 43 60 40</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-chocolate" />
                    <span>Lun - Sam: 9h - 20h</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button
            variant="outline"
            onClick={() => navigate('/products')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Continuer mes achats
          </Button>
          <Button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 bg-chocolate hover:bg-chocolate/90 text-white"
          >
            <Home className="h-4 w-4" />
            Retour à l'accueil
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
