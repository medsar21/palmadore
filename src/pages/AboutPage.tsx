import { Award, Heart, Sparkles, Users, Coffee, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import heroChocolate from "@/assets/hero-chocolate.jpg";

const AboutPage = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-chocolate mb-6">
            Notre Histoire
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez l'histoire passionnante de Palmador Chocolatier, 
            une aventure qui a commencé avec une simple passion pour le chocolat authentique.
          </p>
        </div>

        {/* Main Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-chocolate mb-6">
              Une Passion Née du Cœur
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Chaque création est le fruit d'une recherche minutieuse d'ingrédients de qualité, 
              issus des meilleures plantations de cacao du monde. Palmador Chocolatier allie des 
              techniques traditionnelles à une touche de modernité pour proposer des saveurs 
              uniques et des textures inoubliables.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Sublimer le chocolat dans toute sa richesse, en respectant son essence naturelle. 
              Derrière chaque tablette, chaque praline et chaque ganache, se cache une passion 
              inébranlable pour l'excellence et le désir d'offrir des moments de pure gourmandise.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ma mission est simple : transformer chaque dégustation en un moment d'évasion, 
              en partageant ma passion pour le chocolat authentique et raffiné.
            </p>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img 
                src={heroChocolate} 
                alt="Notre histoire chocolat" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate/60 to-transparent" />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-serif font-bold text-chocolate text-center mb-12">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-copper mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-chocolate mb-3">
                  Passion Authentique
                </h3>
                <p className="text-muted-foreground">
                  Chaque chocolat est créé avec amour et dévotion, 
                  en respectant les traditions artisanales.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-copper mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-chocolate mb-3">
                  Excellence Qualité
                </h3>
                <p className="text-muted-foreground">
                  Nous sélectionnons uniquement les meilleurs ingrédients 
                  pour garantir une qualité exceptionnelle.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="pt-6">
                <Sparkles className="h-12 w-12 text-copper mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-chocolate mb-3">
                  Innovation Créative
                </h3>
                <p className="text-muted-foreground">
                  Nous créons des saveurs uniques qui surprennent 
                  et enchantent vos papilles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-serif font-bold text-chocolate text-center mb-12">
            Notre Processus Artisanal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-gradient-copper rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-chocolate mb-3">
                Sélection Rigoureuse
              </h3>
              <p className="text-muted-foreground">
                Nous choisissons les meilleurs fèves de cacao 
                des plantations les plus réputées au monde.
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-copper rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-chocolate mb-3">
                Transformation Artisanale
              </h3>
              <p className="text-muted-foreground">
                Nos maîtres chocolatiers transforment chaque fève 
                avec des techniques traditionnelles perfectionnées.
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gradient-copper rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-chocolate mb-3">
                Partage & Dégustation
              </h3>
              <p className="text-muted-foreground">
                Chaque création est pensée pour offrir 
                des moments de bonheur partagé.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-secondary/20 to-background rounded-lg p-8 text-center animate-fade-in">
          <h2 className="text-3xl font-serif font-bold text-chocolate mb-6">
            Notre Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            "Transformer chaque dégustation en un moment d'évasion, en partageant notre passion 
            pour le chocolat authentique et raffiné. Nous nous engageons à créer des expériences 
            gustatives exceptionnelles qui éveillent les sens et créent des souvenirs inoubliables."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

