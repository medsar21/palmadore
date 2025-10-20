import { Award, Heart, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="apropos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-chocolate mb-6">
              Notre Histoire
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Chaque création est le fruit d'une recherche minutieuse d'ingrédients de qualité, issus des meilleures plantations de cacao du monde. Palmador Chocolatier allie des techniques traditionnelles à une touche de modernité pour proposer des saveurs uniques et des textures inoubliables.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Sublimer le chocolat dans toute sa richesse, en respectant son essence naturelle. Derrière chaque tablette, chaque praline et chaque ganache, se cache une passion inébranlable pour l'excellence et le désir d'offrir des moments de pure gourmandise.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ma mission est simple : transformer chaque dégustation en un moment d'évasion, en partageant ma passion pour le chocolat authentique et raffiné.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-chocolate mb-1">Qualité Premium</h3>
                  <p className="text-muted-foreground">
                    Ingrédients sélectionnés avec soin pour une qualité exceptionnelle
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-chocolate mb-1">Créations Sur Mesure</h3>
                  <p className="text-muted-foreground">
                    Personnalisation complète selon vos désirs et votre événement
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-chocolate mb-1">Savoir-Faire Artisanal</h3>
                  <p className="text-muted-foreground">
                    Chaque chocolat est une œuvre d'art réalisée à la main
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="aspect-square rounded-lg overflow-hidden shadow-elegant">
              <div className="w-full h-full bg-gradient-copper flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-6xl font-serif font-bold mb-4">44.3K</div>
                  <div className="text-xl">Clients Satisfaits</div>
                  <div className="mt-8 text-lg opacity-90">
                    Plus de 399 créations réalisées
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
