import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Heart, Baby, Cake, ArrowRight, ChevronLeft } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// Images des produits pour les événements
import coffretLarge from "@/assets/coffret-large.jpg";
import coffretMedium from "@/assets/coffret-medium.jpg";
import coffretSmall from "@/assets/coffret-small.jpg";
import coupeAudaceGold from "@/assets/coupe-audace-gold.jpg";
import coupeEmpreinteCopper from "@/assets/coupe-empreinte-copper.jpg";
import barCaramel from "@/assets/bar-caramel.jpg";
import barPistache from "@/assets/bar-pistache.jpg";

interface ServiceArticle {
  id: string;
  title: string;
  category: string;
  icon: any;
  image: string;
  excerpt: string;
  description: string;
  features: string[];
  recommendations: {
    product: string;
    image: string;
    description: string;
  }[];
  tips: string[];
}

const services: ServiceArticle[] = [
  {
    id: "fiancailles",
    title: "Chocolats pour Fiançailles",
    category: "Fiançailles",
    icon: Heart,
    image: coupeAudaceGold,
    excerpt: "Célébrez votre amour avec nos créations chocolatées raffinées, parfaites pour marquer ce moment unique.",
    description: "Les fiançailles sont un moment magique qui mérite d'être célébré avec élégance. Nos chocolats artisanaux sont conçus pour sublimer cette occasion spéciale et offrir à vos invités une expérience gustative inoubliable. Chaque pièce est travaillée avec soin pour refléter la beauté et la douceur de cet engagement.",
    features: [
      "Coffrets personnalisables avec vos initiales",
      "Emballages élégants aux couleurs de votre choix",
      "Chocolats fins aux saveurs raffinées",
      "Possibilité de commandes en grandes quantités",
      "Livraison soignée et ponctuelle",
      "Conseils personnalisés pour votre événement"
    ],
    recommendations: [
      {
        product: "Coffret Premium Large",
        image: coffretLarge,
        description: "Notre coffret signature avec une sélection de 24 chocolats fins, idéal pour offrir aux familles et proches."
      },
      {
        product: "Coupe Audace Gold",
        image: coupeAudaceGold,
        description: "Une présentation luxueuse qui impressionnera vos invités avec des chocolats d'exception."
      },
      {
        product: "Tablette Caramel Premium",
        image: barCaramel,
        description: "Des tablettes artisanales parfaites comme cadeaux d'invités personnalisés."
      }
    ],
    tips: [
      "Commandez 2-3 semaines à l'avance pour garantir la disponibilité",
      "Prévoyez 2-3 chocolats par invité pour une dégustation idéale",
      "Conservez les chocolats dans un endroit frais (18-20°C)",
      "Demandez nos options de personnalisation pour rendre votre événement unique"
    ]
  },
  {
    id: "naissance",
    title: "Chocolats pour Naissance",
    category: "Naissance",
    icon: Baby,
    image: coffretMedium,
    excerpt: "Annoncez l'arrivée de votre bébé avec des chocolats doux et délicats qui toucheront le cœur de tous.",
    description: "L'arrivée d'un nouveau-né est une bénédiction qui se célèbre avec joie et douceur. Nos chocolats pour naissance sont pensés pour partager ce bonheur avec vos proches. Avec des saveurs douces et des présentations adorables, nos créations sont parfaites pour annoncer la bonne nouvelle ou remercier vos visiteurs.",
    features: [
      "Chocolats aux saveurs douces et délicates",
      "Emballages bleus, roses ou neutres selon votre choix",
      "Options de personnalisation avec le prénom du bébé",
      "Mini-coffrets parfaits pour les dragées de naissance",
      "Chocolats adaptés pour les jeunes mamans",
      "Service de livraison à domicile ou à la maternité"
    ],
    recommendations: [
      {
        product: "Coffret Medium Naissance",
        image: coffretMedium,
        description: "Un assortiment de 16 chocolats délicats, parfait pour célébrer l'arrivée de bébé."
      },
      {
        product: "Mini Coffrets Personnalisés",
        image: coffretSmall,
        description: "Petits coffrets élégants à offrir à chaque visiteur, personnalisables avec le prénom."
      },
      {
        product: "Coupe Empreinte Copper",
        image: coupeEmpreinteCopper,
        description: "Une présentation unique pour un moment unique dans votre vie."
      }
    ],
    tips: [
      "Les chocolats au lait et pralinés sont idéaux pour cette occasion",
      "Prévoyez des mini-formats pour faciliter la distribution",
      "Commandez après la naissance pour inclure les informations du bébé",
      "Conservez au frais, surtout si vous êtes à la maternité"
    ]
  },
  {
    id: "anniversaire",
    title: "Chocolats pour Anniversaire",
    category: "Anniversaire",
    icon: Cake,
    image: coupeEmpreinteCopper,
    excerpt: "Rendez chaque anniversaire inoubliable avec nos chocolats artisanaux qui feront briller les yeux de tous.",
    description: "Qu'il s'agisse d'un anniversaire d'enfant ou d'adulte, nos chocolats artisanaux ajoutent une touche de magie à votre célébration. Nous offrons une large gamme de produits adaptés à tous les âges et tous les goûts, des chocolats au lait onctueux aux créations plus sophistiquées pour les palais avertis.",
    features: [
      "Large choix de saveurs pour tous les âges",
      "Possibilité de créer des assortiments personnalisés",
      "Chocolats en forme de chiffres pour marquer l'âge",
      "Coffrets cadeaux luxueux",
      "Options végétariennes et sans gluten disponibles",
      "Création sur mesure selon votre thème d'anniversaire"
    ],
    recommendations: [
      {
        product: "Assortiment Coffret Large",
        image: coffretLarge,
        description: "Le cadeau parfait avec 24 chocolats variés pour satisfaire tous les invités."
      },
      {
        product: "Tablette Pistache Artisanale",
        image: barPistache,
        description: "Une tablette gourmande et originale pour accompagner le gâteau d'anniversaire."
      },
      {
        product: "Coupe Prestige",
        image: coupeAudaceGold,
        description: "Pour les anniversaires importants, une présentation spectaculaire qui marquera les esprits."
      }
    ],
    tips: [
      "Commandez 1-2 semaines à l'avance selon la complexité",
      "Variez les saveurs pour plaire à tous vos invités",
      "Les chocolats se marient parfaitement avec un gâteau d'anniversaire",
      "Demandez nos options de personnalisation avec message spécial",
      "Prévoyez des sachets individuels pour les cadeaux d'invités"
    ]
  }
];

const ServicesPage = () => {
  const [selectedArticle, setSelectedArticle] = useState<ServiceArticle | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--copper))] to-[hsl(var(--gold))] opacity-10" />
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-[hsl(var(--copper))] text-white">Nos Services</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[hsl(var(--copper))] to-[hsl(var(--gold))] bg-clip-text text-transparent">
              Chocolats pour vos Événements Spéciaux
            </h1>
            <p className="text-lg text-muted-foreground">
              Découvrez nos créations artisanales pour célébrer les moments les plus précieux de votre vie : 
              fiançailles, naissances et anniversaires. Chaque événement mérite des chocolats exceptionnels.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.id} 
                  className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-[hsl(var(--copper))] cursor-pointer"
                  onClick={() => setSelectedArticle(service)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[hsl(var(--copper))] text-white flex items-center gap-2">
                        <IconComponent className="w-4 h-4" />
                        {service.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:text-[hsl(var(--copper))] transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {service.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className="w-full bg-gradient-to-r from-[hsl(var(--copper))] to-[hsl(var(--gold))] hover:opacity-90"
                      onClick={() => setSelectedArticle(service)}
                    >
                      En savoir plus
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[hsl(var(--copper))]/10 to-[hsl(var(--gold))]/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Besoin d'aide pour votre événement ?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour vous conseiller et créer des chocolats personnalisés 
            qui rendront votre événement vraiment spécial.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[hsl(var(--copper))] to-[hsl(var(--gold))] hover:opacity-90"
              onClick={() => window.location.href = '/contact'}
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

      {/* Article Detail Dialog */}
      <Dialog open={!!selectedArticle} onOpenChange={(open) => !open && setSelectedArticle(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedArticle && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedArticle(null)}
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Retour
                  </Button>
                </div>
                <DialogTitle className="text-3xl">{selectedArticle.title}</DialogTitle>
                <DialogDescription className="text-base">
                  {selectedArticle.excerpt}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                {/* Image principale */}
                <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                  <img 
                    src={selectedArticle.image} 
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">À propos</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedArticle.description}
                  </p>
                </div>

                {/* Caractéristiques */}
                <div>
                  <h3 className="text-xl font-semibold mb-3">Nos Services</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedArticle.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-[hsl(var(--copper))] mt-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Produits recommandés */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Nos Recommandations</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {selectedArticle.recommendations.map((rec, index) => (
                      <Card key={index} className="overflow-hidden">
                        <div className="h-40 overflow-hidden">
                          <img 
                            src={rec.image} 
                            alt={rec.product}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="pt-4">
                          <h4 className="font-semibold mb-2">{rec.product}</h4>
                          <p className="text-sm text-muted-foreground">{rec.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Conseils */}
                <div className="bg-secondary/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Conseils Pratiques</h3>
                  <ul className="space-y-2">
                    {selectedArticle.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-[hsl(var(--copper))] font-bold flex-shrink-0">•</span>
                        <span className="text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex gap-4 pt-4">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-[hsl(var(--copper))] to-[hsl(var(--gold))] hover:opacity-90"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Commander maintenant
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.location.href = '/products'}
                  >
                    Voir tous les produits
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ServicesPage;

