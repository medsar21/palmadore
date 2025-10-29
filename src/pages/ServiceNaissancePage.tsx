import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Baby, ArrowLeft, Star, CheckCircle } from "lucide-react";

// Images des produits pour les naissances
import coffretMedium from "@/assets/coffret-medium.jpg";
import coffretSmall from "@/assets/coffret-small.jpg";
import coupeEmpreinteCopper from "@/assets/coupe-empreinte-copper.jpg";
import cccImage from "@/assets/ccc.jpg";

const ServiceNaissancePage = () => {
  const navigate = useNavigate();

  const features = [
    "Tables aux saveurs douces et délicates",
    "Décoration bleue, rose ou neutre selon votre choix",
    "Options de personnalisation avec le prénom du bébé",
    "Tables adaptées pour les jeunes mamans",
    "Service de livraison à domicile ou à la maternité",
    "Conseils personnalisés pour votre événement"
  ];

  const recommendations = [
    {
      product: "Table Medium Naissance",
      image: coffretMedium,
      description: "Un assortiment de 16 chocolats délicats, parfait pour célébrer l'arrivée de bébé."
    },
    {
      product: "Mini Tables Personnalisées",
      image: coffretSmall,
      description: "Petites tables élégantes à offrir à chaque visiteur, personnalisables avec le prénom."
    },
    {
      product: "Table Empreinte Copper",
      image: coupeEmpreinteCopper,
      description: "Une présentation unique pour un moment unique dans votre vie."
    }
  ];

  const tips = [
    "Les chocolats au lait et pralinés sont idéaux pour cette occasion",
    "Prévoyez des mini-formats pour faciliter la distribution",
    "Commandez après la naissance pour inclure les informations du bébé",
    "Conservez au frais, surtout si vous êtes à la maternité"
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url(${cccImage})`,
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Button
                variant="ghost"
                onClick={() => navigate('/services')}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour aux services
              </Button>
            </div>
            
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-[hsl(var(--copper))] text-white flex items-center gap-2 w-fit mx-auto">
                <Baby className="w-4 h-4" />
                Naissance
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[hsl(var(--copper))] to-[hsl(var(--gold))] bg-clip-text text-transparent">
                Tables de Naissance Adorables
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                L'arrivée d'un nouveau-né est une bénédiction qui se célèbre avec joie et douceur. Nos tables chocolatées pour naissance sont pensées pour partager ce bonheur avec vos proches. Avec des saveurs douces et des présentations adorables, nos créations sont parfaites pour annoncer la bonne nouvelle.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Nos Services de Table de Naissance</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="bg-background/80 backdrop-blur-sm border-2 hover:border-[hsl(var(--copper))] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-[hsl(var(--copper))] flex-shrink-0 mt-1" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recommendations Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-[hsl(var(--copper))]/10 to-[hsl(var(--gold))]/10">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Nos Recommandations</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {recommendations.map((rec, index) => (
                <Card key={index} className="bg-background/80 backdrop-blur-sm overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={rec.image} 
                      alt={rec.product}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{rec.product}</h3>
                    <p className="text-muted-foreground">{rec.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Conseils Pratiques</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-background/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {tips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-[hsl(var(--copper))] flex-shrink-0 mt-1" />
                        <span className="text-sm">{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Prêt à célébrer l'arrivée de bébé ?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez-nous dès maintenant pour discuter de vos besoins et créer une table chocolatée qui sublimera la célébration de votre nouveau-né.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[hsl(var(--copper))] to-[hsl(var(--gold))] hover:opacity-90"
                onClick={() => navigate('/contact')}
              >
                <Calendar className="mr-2 w-5 h-5" />
                Prendre rendez-vous
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.location.href = 'tel:+212530562079'}
              >
                Nous appeler
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceNaissancePage;