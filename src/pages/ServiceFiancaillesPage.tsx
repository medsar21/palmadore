import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Calendar, Phone, MapPin, Clock } from "lucide-react";

// Images des produits pour les événements
import coffretLarge from "@/assets/coffret-large.jpg";
import coupeAudaceGold from "@/assets/coupe-audace-gold.jpg";
import barCaramel from "@/assets/bar-caramel.jpg";
import ccImage from "@/assets/cc.jpg";

const ServiceFiancaillesPage = () => {
  const navigate = useNavigate();

  const recommendations = [
    {
      product: "Table Premium Fiançailles",
      image: coffretLarge,
      description: "Notre table signature avec une sélection de 24 chocolats fins, idéale pour célébrer vos fiançailles."
    },
    {
      product: "Table Romantique",
      image: coupeAudaceGold,
      description: "Une présentation luxueuse qui impressionnera vos invités avec des chocolats d'exception."
    },
    {
      product: "Tablettes Caramel Premium",
      image: barCaramel,
      description: "Des tablettes artisanales parfaites comme cadeaux d'invités personnalisés."
    }
  ];

  const features = [
    "Tables personnalisables avec vos initiales",
    "Décoration élégante aux couleurs de votre choix",
    "Chocolats fins aux saveurs raffinées",
    "Possibilité de commandes en grandes quantités",
    "Service de mise en place soigné",
    "Conseils personnalisés pour votre événement"
  ];

  const tips = [
    "Commandez 2-3 semaines à l'avance pour garantir la disponibilité",
    "Prévoyez 2-3 chocolats par invité pour une dégustation idéale",
    "Conservez les chocolats dans un endroit frais (18-20°C)",
    "Demandez nos options de personnalisation pour rendre votre événement unique"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Header avec navigation */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--copper))] to-[hsl(var(--gold))] opacity-10" />
        <div className="container mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate('/services')}
              className="flex items-center gap-2 text-chocolate hover:text-copper"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux services
            </Button>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-[hsl(var(--copper))] text-white flex items-center gap-2 w-fit mx-auto">
              <Heart className="w-4 h-4" />
              Tables de Fiançailles
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[hsl(var(--copper))] to-[hsl(var(--gold))] bg-clip-text text-transparent">
              Tables de Fiançailles Romantiques
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Célébrez vos fiançailles avec des tables chocolatées raffinées, 
              parfaites pour marquer ce moment unique et romantique de votre histoire d'amour.
            </p>
          </div>
        </div>
      </section>

      {/* Image principale */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={ccImage} 
              alt="Table de Fiançailles Palmador"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">
                Votre Table de Fiançailles Sur Mesure
              </h2>
              <p className="text-white/90">
                Une création romantique pour célébrer votre engagement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-chocolate mb-6">
              À Propos de Nos Tables de Fiançailles
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Les fiançailles sont un moment magique qui mérite d'être célébré avec élégance. Nos tables chocolatées 
              sont conçues pour sublimer cette occasion spéciale et offrir à vos invités une expérience gustative 
              inoubliable. Chaque table reflète la beauté et la douceur de votre engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Nos Services */}
      <section className="py-12 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-chocolate text-center mb-12">
            Nos Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
                <CardContent className="pt-0">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--copper))] mt-2 flex-shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Produits recommandés */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-chocolate text-center mb-12">
            Nos Recommandations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {recommendations.map((rec, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={rec.image} 
                    alt={rec.product}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-chocolate mb-3">
                    {rec.product}
                  </h3>
                  <p className="text-muted-foreground mb-4">{rec.description}</p>
                  <Button className="w-full bg-chocolate hover:bg-chocolate/90 text-white">
                    Commander
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conseils pratiques */}
      <section className="py-12 px-4 bg-gradient-to-r from-[hsl(var(--copper))]/10 to-[hsl(var(--gold))]/10">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl font-serif font-bold text-chocolate">
                Conseils Pratiques
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[hsl(var(--copper))] font-bold flex-shrink-0 text-lg">•</span>
                    <span className="text-sm font-medium">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-chocolate mb-6">
            Prêt à Célébrer Vos Fiançailles ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contactez-nous dès maintenant pour créer la table de fiançailles parfaite pour votre événement romantique.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-0 text-center">
                <Phone className="h-8 w-8 text-chocolate mx-auto mb-3" />
                <h3 className="font-semibold text-chocolate mb-2">Téléphone</h3>
                <a href="tel:+212530562079" className="text-sm text-muted-foreground hover:text-chocolate">
                  +212 530 56 20 79
                </a>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-0 text-center">
                <MapPin className="h-8 w-8 text-chocolate mx-auto mb-3" />
                <h3 className="font-semibold text-chocolate mb-2">Adresse</h3>
                <p className="text-sm text-muted-foreground">
                  Av. Moulay abderrahmane<br />
                  Kenitra
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-0 text-center">
                <Clock className="h-8 w-8 text-chocolate mx-auto mb-3" />
                <h3 className="font-semibold text-chocolate mb-2">Horaires</h3>
                <p className="text-sm text-muted-foreground">
                  Lun - Ven: 9h - 19h<br />
                  Sam: 10h - 18h
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[hsl(var(--copper))] to-[hsl(var(--gold))] hover:opacity-90"
              onClick={() => navigate('/contact')}
            >
              <Calendar className="mr-2 w-5 h-5" />
              Demander un devis
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.location.href = 'tel:+212530562079'}
            >
              <Phone className="mr-2 w-5 h-5" />
              Nous appeler
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceFiancaillesPage;
