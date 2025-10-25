import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Heart, Baby, Cake, ArrowRight, ChevronLeft, Users } from "lucide-react";

// Images des produits pour les événements
import coffretLarge from "@/assets/coffret-large.jpg";
import coffretMedium from "@/assets/coffret-medium.jpg";
import coffretSmall from "@/assets/coffret-small.jpg";
import coupeAudaceGold from "@/assets/coupe-audace-gold.jpg";
import coupeEmpreinteCopper from "@/assets/coupe-empreinte-copper.jpg";
import barCaramel from "@/assets/bar-caramel.jpg";
import barPistache from "@/assets/bar-pistache.jpg";

// Nouvelles images de tables
import cImage from "@/assets/c.jpg";
import ccImage from "@/assets/cc.jpg";
import cccImage from "@/assets/ccc.jpg";

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
    id: "mariage",
    title: "Tables de Mariage",
    category: "Mariage",
    icon: Users,
    image: cImage,
    excerpt: "Créez des tables de mariage exceptionnelles avec nos créations chocolatées artisanales, parfaites pour impressionner vos invités.",
    description: "Le mariage est le jour le plus important de votre vie. Nos tables chocolatées sont conçues pour sublimer votre réception et offrir à vos invités une expérience gustative inoubliable. Chaque table est une œuvre d'art gourmande, pensée pour s'harmoniser avec votre décoration et créer des souvenirs magiques.",
    features: [
      "Tables chocolatées sur mesure selon votre thème",
      "Décoration harmonisée avec vos couleurs de mariage",
      "Chocolats fins et pralinés d'exception",
      "Service de mise en place professionnel",
      "Coordination avec votre traiteur",
      "Conseils personnalisés pour votre réception"
    ],
    recommendations: [
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
    ],
    tips: [
      "Commandez 4-6 semaines à l'avance pour garantir la disponibilité",
      "Prévoyez 3-4 chocolats par invité pour une dégustation idéale",
      "Harmonisez les couleurs avec votre décoration de mariage",
      "Demandez nos options de personnalisation avec vos initiales",
      "Conservez les chocolats dans un endroit frais jusqu'au jour J"
    ]
  },
  {
    id: "fiancailles",
    title: "Tables de Fiançailles",
    category: "Fiançailles",
    icon: Heart,
    image: ccImage,
    excerpt: "Célébrez vos fiançailles avec des tables chocolatées raffinées, parfaites pour marquer ce moment unique et romantique.",
    description: "Les fiançailles sont un moment magique qui mérite d'être célébré avec élégance. Nos tables chocolatées sont conçues pour sublimer cette occasion spéciale et offrir à vos invités une expérience gustative inoubliable. Chaque table reflète la beauté et la douceur de votre engagement.",
    features: [
      "Tables personnalisables avec vos initiales",
      "Décoration élégante aux couleurs de votre choix",
      "Chocolats fins aux saveurs raffinées",
      "Possibilité de commandes en grandes quantités",
      "Service de mise en place soigné",
      "Conseils personnalisés pour votre événement"
    ],
    recommendations: [
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
    title: "Tables de Naissance",
    category: "Naissance",
    icon: Baby,
    image: cccImage,
    excerpt: "Annoncez l'arrivée de votre bébé avec des tables chocolatées douces et délicates qui toucheront le cœur de tous.",
    description: "L'arrivée d'un nouveau-né est une bénédiction qui se célèbre avec joie et douceur. Nos tables chocolatées pour naissance sont pensées pour partager ce bonheur avec vos proches. Avec des saveurs douces et des présentations adorables, nos créations sont parfaites pour annoncer la bonne nouvelle.",
    features: [
      "Tables aux saveurs douces et délicates",
      "Décoration bleue, rose ou neutre selon votre choix",
      "Options de personnalisation avec le prénom du bébé",
      "Tables adaptées pour les jeunes mamans",
      "Service de livraison à domicile ou à la maternité",
      "Conseils personnalisés pour votre événement"
    ],
    recommendations: [
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
    title: "Tables d'Anniversaire",
    category: "Anniversaire",
    icon: Cake,
    image: cImage,
    excerpt: "Rendez chaque anniversaire inoubliable avec nos tables chocolatées artisanales qui feront briller les yeux de tous.",
    description: "Qu'il s'agisse d'un anniversaire d'enfant ou d'adulte, nos tables chocolatées artisanales ajoutent une touche de magie à votre célébration. Nous offrons une large gamme de produits adaptés à tous les âges et tous les goûts, des chocolats au lait onctueux aux créations plus sophistiquées pour les palais avertis.",
    features: [
      "Tables avec large choix de saveurs pour tous les âges",
      "Possibilité de créer des assortiments personnalisés",
      "Tables en forme de chiffres pour marquer l'âge",
      "Décoration adaptée au thème d'anniversaire",
      "Options végétariennes et sans gluten disponibles",
      "Création sur mesure selon votre thème"
    ],
    recommendations: [
      {
        product: "Table Assortiment Large",
        image: coffretLarge,
        description: "Le cadeau parfait avec 24 chocolats variés pour satisfaire tous les invités."
      },
      {
        product: "Tablette Pistache Artisanale",
        image: barPistache,
        description: "Une tablette gourmande et originale pour accompagner le gâteau d'anniversaire."
      },
      {
        product: "Table Prestige",
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
  const navigate = useNavigate();

  const handleServiceClick = (serviceId: string) => {
    switch (serviceId) {
      case 'mariage':
        navigate('/services/mariage');
        break;
      case 'fiancailles':
        navigate('/services/fiancailles');
        break;
      case 'naissance':
        navigate('/services/naissance');
        break;
      case 'anniversaire':
        navigate('/services/anniversaire');
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--copper))] to-[hsl(var(--gold))] opacity-10" />
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-[hsl(var(--copper))] text-white">Nos Services</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[hsl(var(--copper))] to-[hsl(var(--gold))] bg-clip-text text-transparent">
              Tables de Mariage & Événements Spéciaux
            </h1>
            <p className="text-lg text-muted-foreground">
              Découvrez nos services de préparation de tables chocolatées pour vos événements les plus précieux : 
              mariages, fiançailles, naissances et anniversaires. Chaque table est une œuvre d'art gourmande.
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
                  onClick={() => handleServiceClick(service.id)}
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
                      onClick={() => handleServiceClick(service.id)}
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
          <h2 className="text-3xl font-bold mb-6">Besoin d'aide pour votre table d'événement ?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour vous conseiller et créer des tables chocolatées personnalisées 
            qui rendront votre événement vraiment spécial et mémorable.
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

    </div>
  );
};

export default ServicesPage;

