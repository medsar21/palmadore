import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Heart, ArrowLeft, Users, Star, CheckCircle } from "lucide-react";

// Images des produits pour les mariages
import coffretLarge from "@/assets/coffret-large.jpg";
import coupeAudaceGold from "@/assets/coupe-audace-gold.jpg";
import barCaramel from "@/assets/bar-caramel.jpg";
import cImage from "@/assets/c.jpg";

const ServiceMarriagePage = () => {
  const navigate = useNavigate();

  const features = [
    "Tables chocolatées sur mesure selon votre thème",
    "Décoration harmonisée avec vos couleurs de mariage",
    "Chocolats fins et pralinés d'exception",
    "Service de mise en place professionnel",
    "Coordination avec votre traiteur",
    "Conseils personnalisés pour votre réception"
  ];

  const recommendations = [
    {
      product: "Table Signature Premium",
      image: coffretLarge,
      description: "Notre table signature avec une sélection de 24 chocolats fins, idéale pour les mariages prestigieux."
    },
    {
      product: "Table Romantique",
      image: coupeAudaceGold,
      description: "Une présentation luxueuse et romantique qui impressionnera vos invités avec des chocolats d'exception."
    },
    {
      product: "Tablettes Personnalisées",
      image: barCaramel,
      description: "Des tablettes artisanales personnalisées avec vos initiales, parfaites comme cadeaux d'invités."
    }
  ];

  const tips = [
    "Commandez 4-6 semaines à l'avance pour garantir la disponibilité",
    "Prévoyez 3-4 chocolats par invité pour une dégustation idéale",
    "Harmonisez les couleurs avec votre décoration de mariage",
    "Demandez nos options de personnalisation avec vos initiales",
    "Conservez les chocolats dans un endroit frais jusqu'au jour J"
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url(${cImage})`,
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
                <Users className="w-4 h-4" />
                Mariage
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[hsl(var(--copper))] to-[hsl(var(--gold))] bg-clip-text text-transparent">
                Tables de Mariage Exceptionnelles
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Le mariage est le jour le plus important de votre vie. Nos tables chocolatées sont conçues pour sublimer votre réception et offrir à vos invités une expérience gustative inoubliable. Chaque table est une œuvre d'art gourmande, pensée pour s'harmoniser avec votre décoration et créer des souvenirs magiques.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Nos Services de Table de Mariage</h2>
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
            <h2 className="text-3xl font-bold mb-6">Prêt à créer votre table de mariage parfaite ?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez-nous dès maintenant pour discuter de vos besoins et créer une table chocolatée qui sublimera votre mariage.
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

export default ServiceMarriagePage;