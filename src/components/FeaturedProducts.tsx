import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import coffretLarge from "@/assets/Artboard 18.webp";
import coffretMedium from "@/assets/Artboard 17.webp";
import coffretSmall from "@/assets/Artboard 16.webp";
import coupeAudaceGold from "@/assets/Artboard 12.webp";
import coupeEmpreinteCopper from "@/assets/Artboard 14.webp";

const featuredProducts = [
  {
    id: 1,
    name: "Coffret Prestige",
    image: coffretLarge,
    tag: "Bestseller",
    description: "Collection exclusive de chocolats fins",
  },
  {
    id: 2,
    name: "Coupe Audace Gold",
    image: coupeAudaceGold,
    tag: "Nouveau",
    description: "Création premium avec finition dorée",
  },
  {
    id: 3,
    name: "Coffret Medium",
    image: coffretMedium,
    tag: "Populaire",
    description: "Assortiment raffiné pour toutes occasions",
  },
  {
    id: 4,
    name: "Coupe Empreinte",
    image: coupeEmpreinteCopper,
    tag: "Premium",
    description: "Design unique en cuivre artisanal",
  },
  {
    id: 5,
    name: "Coffret Small",
    image: coffretSmall,
    tag: "Cadeau",
    description: "Parfait pour une attention délicate",
  },
];

const FeaturedProducts = () => null;

export default FeaturedProducts;
