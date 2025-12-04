import { useState, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Heart, Share2, Star, ShoppingCart } from "lucide-react";
import product1 from "@/assets/Artboard 5.png";
import product2 from "@/assets/Artboard 6.png";
import product3 from "@/assets/Artboard 7.png";
import coupeEleganceS from "@/assets/Artboard 12.png";
import coupeEleganceM from "@/assets/Artboard 13.png";
import coupeEleganceL from "@/assets/Artboard 14.png";
import coupeEmeraudeS from "@/assets/Artboard 15.png";
import coupeEmeraudeM from "@/assets/Artboard 16.png";
import coupePrestige from "@/assets/Artboard 17.png";
import coupePrestigeL from "@/assets/Artboard 18.png";
import coupeTresorM from "@/assets/Artboard 19.png";
import coupeTresorL from "@/assets/Artboard 20.png";
import coupeAudaceS from "@/assets/Artboard 1.png";
import coupeAudaceM from "@/assets/Artboard 2.png";
import coupeAudaceL from "@/assets/Artboard 3.png";
import oumnia from "@/assets/Artboard 4.png";
import oumniaL from "@/assets/Artboard 5.png";
import coupeOvalS from "@/assets/Artboard 6.png";
import coupeOvalM from "@/assets/Artboard 7.png";
import serviteur from "@/assets/Artboard 8.png";
import coupePiedL from "@/assets/Artboard 9.png";
import coupePiedM from "@/assets/Artboard 10.png";
import coupePrestigeGoldM from "@/assets/Artboard 11.png";
import coupeRoyaleGoldL from "@/assets/Artboard 9.png";
import coupeFeddaM from "@/assets/Artboard 10.png";
import coupeFeddaL from "@/assets/Artboard 11.png";
import coffretSmall from "@/assets/Artboard 16.png";
import coffretMedium from "@/assets/Artboard 17.png";
import coffretLarge from "@/assets/Artboard 18.png";

// Base de données des produits (même que ProductsPage)
const allProducts = [
  // Chocolats
  {
    id: 1,
    name: "Collection Classique",
    description: "Assortiment de chocolats fins aux saveurs traditionnelles",
    price: "À partir de 250 Dhs",
    image: product1,
    category: "chocolats",
    tags: ["traditionnel", "assortiment"],
    fullDescription: "Notre collection classique réunit les saveurs intemporelles du chocolat. Chaque pièce est soigneusement sélectionnée pour offrir une expérience gustative exceptionnelle. Un assortiment parfait pour découvrir l'art du chocolat dans sa forme la plus pure.",
    ingredients: "Cacao pur, sucre de canne, beurre de cacao, vanille naturelle",
    weight: "250g",
    allergens: "Contient du lait et des traces de noix",
    rating: 4.8,
    reviews: 127
  },
  {
    id: 2,
    name: "Chocolat Noir Premium",
    description: "Chocolat noir pur à 70% de cacao",
    price: "180 Dhs",
    image: product2,
    category: "chocolats",
    tags: ["noir", "premium"],
    fullDescription: "Un chocolat noir d'exception avec 70% de cacao pur. Cette tablette révèle des notes fruitées et une amertume équilibrée qui séduira les amateurs de chocolat noir authentique.",
    ingredients: "Cacao 70%, sucre de canne, beurre de cacao",
    weight: "100g",
    allergens: "Peut contenir des traces de lait et de noix",
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: "Chocolat au Lait",
    description: "Chocolat au lait crémeux et doux",
    price: "160 Dhs",
    image: product3,
    category: "chocolats",
    tags: ["lait", "crémeux"],
    fullDescription: "Notre chocolat au lait allie douceur et crémeux pour une expérience gourmande incomparable. Parfait pour les moments de détente et de partage.",
    ingredients: "Cacao, lait entier, sucre de canne, beurre de cacao, vanille",
    weight: "100g",
    allergens: "Contient du lait",
    rating: 4.7,
    reviews: 156
  },
  // Coupes
  {
    id: 12,
    name: "Coupe Élégance S",
    description: "Coupe élégante en porcelaine blanche avec base dorée. Assortiment de 150g de chocolats fins emballés dans des papiers dorés, verts et bruns.",
    price: "200 Dhs",
    image: coupeEleganceS,
    category: "coupes",
    tags: ["élégance", "porcelaine", "150g"],
    reference: "Réf 035",
    fullDescription: "Coupe élégante en porcelaine blanche avec base dorée. Assortiment de 150g de chocolats fins emballés dans des papiers dorés, verts et bruns. Parfaite pour offrir ou se faire plaisir. Chaque chocolat est soigneusement sélectionné pour offrir une expérience gustative exceptionnelle.",
    ingredients: "Chocolats fins variés, papiers d'emballage métalliques",
    weight: "150g",
    allergens: "Contient du lait et peut contenir des traces de noix",
    rating: 4.8,
    reviews: 45
  },
  {
    id: 13,
    name: "Coupe Élégance M",
    description: "Coupe élégante moyenne en porcelaine blanche avec base dorée. Assortiment généreux de 350g de chocolats fins disposés en couches concentriques.",
    price: "350 Dhs",
    image: coupeEleganceM,
    category: "coupes",
    tags: ["élégance", "porcelaine", "350g"],
    reference: "Réf 036",
    fullDescription: "Coupe élégante moyenne en porcelaine blanche avec base dorée. Assortiment généreux de 350g de chocolats fins disposés en couches concentriques avec emballages dorés, verts et bruns. Une présentation raffinée qui impressionnera vos invités.",
    ingredients: "Chocolats fins variés, papiers d'emballage métalliques",
    weight: "350g",
    allergens: "Contient du lait et peut contenir des traces de noix",
    rating: 4.9,
    reviews: 67
  },
  {
    id: 14,
    name: "Coupe Élégance L",
    description: "Grande coupe élégante en porcelaine blanche avec base dorée. Assortiment premium de 650g de chocolats fins arrangés en dôme élégant.",
    price: "750 Dhs",
    image: coupeEleganceL,
    category: "coupes",
    tags: ["élégance", "porcelaine", "650g"],
    reference: "Réf 037",
    fullDescription: "Grande coupe élégante en porcelaine blanche avec base dorée. Assortiment premium de 650g de chocolats fins arrangés en dôme élégant avec une variété d'emballages métalliques. Le cadeau parfait pour les grandes occasions.",
    ingredients: "Chocolats fins variés, papiers d'emballage métalliques",
    weight: "650g",
    allergens: "Contient du lait et peut contenir des traces de noix",
    rating: 5.0,
    reviews: 89
  },
  {
    id: 15,
    name: "Coupe Émeraude S",
    description: "Coupe émeraude petite avec base dorée sphérique. Assortiment de 350g de chocolats carrés emballés dans des papiers dorés et vert émeraude.",
    price: "350 Dhs",
    image: coupeEmeraudeS,
    category: "coupes",
    tags: ["émeraude", "dorée", "350g"],
    reference: "Réf 038",
    fullDescription: "Coupe émeraude petite avec base dorée sphérique. Assortiment de 350g de chocolats carrés emballés dans des papiers dorés et vert émeraude, avec pralines au centre. Design unique et élégant.",
    ingredients: "Chocolats carrés, pralines, papiers d'emballage métalliques",
    weight: "350g",
    allergens: "Contient du lait et peut contenir des traces de noix",
    rating: 4.7,
    reviews: 52
  },
  {
    id: 16,
    name: "Coupe Émeraude M",
    description: "Coupe émeraude moyenne avec base dorée sphérique. Assortiment généreux de 650g de chocolats carrés emballés dans des papiers dorés et vert émeraude.",
    price: "750 Dhs",
    image: coupeEmeraudeM,
    category: "coupes",
    tags: ["émeraude", "dorée", "650g"],
    reference: "Réf 039",
    fullDescription: "Coupe émeraude moyenne avec base dorée sphérique. Assortiment généreux de 650g de chocolats carrés emballés dans des papiers dorés et vert émeraude, avec pralines et chocolats blancs au centre. Une présentation luxueuse.",
    ingredients: "Chocolats carrés, pralines, chocolats blancs, papiers d'emballage métalliques",
    weight: "650g",
    allergens: "Contient du lait et peut contenir des traces de noix",
    rating: 4.8,
    reviews: 73
  },
  {
    id: 17,
    name: "Coupe Prestige",
    description: "Coupe prestige en or texturé avec motif tissé. Assortiment de 500g de chocolats rectangulaires emballés dans des papiers dorés et orange.",
    price: "650 Dhs",
    image: coupePrestige,
    category: "coupes",
    tags: ["prestige", "dorée", "500g"],
    reference: "Réf 040",
    fullDescription: "Coupe prestige en or texturé avec motif tissé. Assortiment de 500g de chocolats rectangulaires emballés dans des papiers dorés et orange, avec pralines au centre. Design exclusif et raffiné.",
    ingredients: "Chocolats rectangulaires, pralines, papiers d'emballage métalliques",
    weight: "500g",
    allergens: "Contient du lait et peut contenir des traces de noix",
    rating: 4.9,
    reviews: 61
  },
  {
    id: 18,
    name: "Coupe Prestige L",
    description: "Grande coupe prestige en or texturé avec motif tissé. Assortiment premium de 900g de chocolats rectangulaires emballés dans des papiers dorés et orange.",
    price: "950 Dhs",
    image: coupePrestigeL,
    category: "coupes",
    tags: ["prestige", "dorée", "900g"],
    reference: "Réf 041",
    fullDescription: "Grande coupe prestige en or texturé avec motif tissé. Assortiment premium de 900g de chocolats rectangulaires emballés dans des papiers dorés et orange, avec pralines et dattes enrobées au centre. Le summum du luxe.",
    ingredients: "Chocolats rectangulaires, pralines, dattes enrobées, papiers d'emballage métalliques",
    weight: "900g",
    allergens: "Contient du lait et peut contenir des traces de noix",
    rating: 5.0,
    reviews: 84
  },
  {
    id: 19,
    name: "Coupe Tresor M",
    description: "Coupe trésor moyenne sur plateau gris argenté avec pieds dorés. Assortiment de 800g de chocolats carrés emballés dans des papiers bleu royal et blanc.",
    price: "1100 Dhs",
    image: coupeTresorM,
    category: "coupes",
    tags: ["trésor", "argenté", "800g"],
    reference: "Réf 042",
    fullDescription: "Coupe trésor moyenne sur plateau gris argenté avec pieds dorés. Assortiment de 800g de chocolats carrés emballés dans des papiers bleu royal et blanc, avec pralines et chocolats décoratifs au centre. Une véritable œuvre d'art.",
    ingredients: "Chocolats carrés, pralines, chocolats décoratifs, papiers d'emballage métalliques",
    weight: "800g",
    allergens: "Contient du lait et peut contenir des traces de noix",
    rating: 4.9,
    reviews: 56
  },
  {
    id: 20,
    name: "Coupe Tresor L",
    description: "Grande coupe trésor sur plateau gris argenté avec pieds dorés. Assortiment exceptionnel de 1400g de chocolats carrés emballés dans des papiers bleu royal, blanc et doré.",
    price: "1650 Dhs",
    image: coupeTresorL,
    category: "coupes",
    tags: ["trésor", "argenté", "1400g"],
    reference: "Réf 043",
    fullDescription: "Grande coupe trésor sur plateau gris argenté avec pieds dorés. Assortiment exceptionnel de 1400g de chocolats carrés emballés dans des papiers bleu royal, blanc et doré, avec pralines et décorations au centre. Le cadeau ultime.",
    ingredients: "Chocolats carrés, pralines, décorations, papiers d'emballage métalliques",
    weight: "1400g",
    allergens: "Contient du lait et peut contenir des traces de noix",
    rating: 5.0,
    reviews: 92
  },
  {
    id: 21,
    name: "Coupe Audace S",
    description: "Coupe audace petite avec base dorée circulaire et support argenté. Assortiment de 850g de chocolats carrés emballés dans des papiers rouge vif et blanc.",
    price: "1200 Dhs",
    image: coupeAudaceS,
    category: "coupes",
    tags: ["audace", "rouge", "850g"],
    reference: "Réf 044",
    fullDescription: "Coupe audace petite avec base dorée circulaire et support argenté. Assortiment de 850g de chocolats carrés emballés dans des papiers rouge vif et blanc, avec pralines décoratives au centre. Design audacieux et moderne.",
    ingredients: "Chocolats carrés, pralines, papiers d'emballage métalliques",
    weight: "850g",
    allergens: "Contient du lait et peut contenir des traces de noix",
    rating: 4.8,
    reviews: 48
  },
  {
    id: 22,
    name: "Coupe Audace M",
    description: "Coupe audace moyenne avec base dorée circulaire et support argenté. Assortiment généreux de 1500g de chocolats carrés emballés dans des papiers rouge vif et blanc.",
    price: "1800 Dhs",
    image: coupeAudaceM,
    category: "coupes",
    tags: ["audace", "rouge", "1500g"],
    reference: "Réf 045",
    fullDescription: "Coupe audace moyenne avec base dorée circulaire et support argenté. Assortiment généreux de 1500g de chocolats carrés emballés dans des papiers rouge vif et blanc, avec pralines et noisettes au centre. Pour les grandes occasions.",
    ingredients: "Chocolats carrés, pralines, noisettes, papiers d'emballage métalliques",
    weight: "1500g",
    allergens: "Contient du lait et des noisettes",
    rating: 4.9,
    reviews: 65
  },
  {
    id: 23,
    name: "Coupe Audace L",
    description: "Grande coupe audace avec base dorée circulaire et support argenté. Assortiment exceptionnel de 2300g de chocolats carrés emballés dans des papiers rouge vif et blanc.",
    price: "2600 Dhs",
    image: coupeAudaceL,
    category: "coupes",
    tags: ["audace", "rouge", "2300g"],
    reference: "Réf 046",
    fullDescription: "Grande coupe audace avec base dorée circulaire et support argenté. Assortiment exceptionnel de 2300g de chocolats carrés emballés dans des papiers rouge vif et blanc, avec pralines, noisettes et amandes au centre. Le summum de l'audace.",
    ingredients: "Chocolats carrés, pralines, noisettes, amandes, papiers d'emballage métalliques",
    weight: "2300g",
    allergens: "Contient du lait, des noisettes et des amandes",
    rating: 5.0,
    reviews: 78
  },
  {
    id: 24,
    name: "Oumnia",
    description: "Boîte cadeau élégante en crème avec intérieur doré et couvercle orné. Assortiment de 300g de chocolats carrés emballés dans des papiers vert-bleu sarcelle et argenté.",
    price: "550 Dhs",
    image: oumnia,
    category: "coupes",
    tags: ["oumnia", "boîte", "300g"],
    reference: "Réf 047",
    fullDescription: "Boîte cadeau élégante en crème avec intérieur doré et couvercle orné. Assortiment de 300g de chocolats carrés emballés dans des papiers vert-bleu sarcelle et argenté, accompagné d'un petit livre décoratif. Parfait pour offrir.",
    ingredients: "Chocolats carrés, papiers d'emballage métalliques",
    weight: "300g",
    allergens: "Contient du lait et peut contenir des traces de noix",
    rating: 4.7,
    reviews: 41
  },
  {
    id: 25,
    name: "Oumnia L",
    description: "Grande boîte cadeau élégante en crème avec intérieur doré et couvercle orné. Assortiment généreux de 700g de chocolats carrés emballés dans des papiers vert-bleu sarcelle et argenté.",
    price: "950 Dhs",
    image: oumniaL,
    category: "coupes",
    tags: ["oumnia", "boîte", "700g"],
    reference: "Réf 048",
    fullDescription: "Grande boîte cadeau élégante en crème avec intérieur doré et couvercle orné. Assortiment généreux de 700g de chocolats carrés emballés dans des papiers vert-bleu sarcelle et argenté, accompagné d'un petit livre décoratif. Le cadeau idéal.",
    ingredients: "Chocolats carrés, papiers d'emballage métalliques",
    weight: "700g",
    allergens: "Contient du lait et peut contenir des traces de noix",
    rating: 4.8,
    reviews: 59
  },
  {
    id: 26,
    name: "Coupe Oval S",
    description: "Coupe ovale petite en porcelaine blanche. Assortiment de 600g de chocolats emballés dans des papiers métalliques dorés, cuivrés et argentés.",
    price: "650 Dhs",
    image: coupeOvalS,
    category: "coupes",
    tags: ["ovale", "porcelaine", "600g"],
    reference: "Réf 023",
    fullDescription: "Coupe ovale petite en porcelaine blanche. Assortiment de 600g de chocolats emballés dans des papiers métalliques dorés, cuivrés et argentés, avec pralines au centre. Design élégant et moderne.",
    ingredients: "Chocolats variés, pralines, papiers d'emballage métalliques",
    weight: "600g",
    allergens: "Contient du lait et peut contenir des traces de noix",
    rating: 4.6,
    reviews: 38
  },
  {
    id: 27,
    name: "Coupe Oval M",
    description: "Coupe ovale moyenne en porcelaine blanche. Assortiment généreux de 900g de chocolats emballés dans des papiers métalliques dorés, cuivrés et argentés.",
    price: "950 Dhs",
    image: coupeOvalM,
    category: "coupes",
    tags: ["ovale", "porcelaine", "900g"],
    reference: "Réf 024",
    fullDescription: "Coupe ovale moyenne en porcelaine blanche. Assortiment généreux de 900g de chocolats emballés dans des papiers métalliques dorés, cuivrés et argentés, avec pralines texturées et noisettes au centre. Une présentation raffinée.",
    ingredients: "Chocolats variés, pralines texturées, noisettes, papiers d'emballage métalliques",
    weight: "900g",
    allergens: "Contient du lait et des noisettes",
    rating: 4.8,
    reviews: 54
  },
  {
    id: 28,
    name: "Serviteur",
    description: "Serviteur à deux étages circulaires en porcelaine blanche avec bordures dorées. Assortiment exceptionnel de 1.1kg de chocolats emballés dans des papiers métalliques dorés, cuivrés et argentés.",
    price: "1200 Dhs",
    image: serviteur,
    category: "coupes",
    tags: ["serviteur", "deux étages", "1.1kg"],
    reference: "Réf 025",
    fullDescription: "Serviteur à deux étages circulaires en porcelaine blanche avec bordures dorées. Assortiment exceptionnel de 1.1kg de chocolats emballés dans des papiers métalliques dorés, cuivrés et argentés, arrangés en cercles concentriques avec élément décoratif central. Le summum de l'élégance.",
    ingredients: "Chocolats variés, papiers d'emballage métalliques, élément décoratif",
    weight: "1.1kg",
    allergens: "Contient du lait et peut contenir des traces de noix",
    rating: 5.0,
    reviews: 71
  },
  {
    id: 29,
    name: "Coupe à pied L",
    description: "Élégante coupe à pied de taille L en céramique blanche avec base dorée. Garnie d'un assortiment raffiné de 450g de chocolats fins. Son design est sublimé par une décoration en foil rouge et un ornement précieux au centre.",
    price: "550 Dhs",
    image: coupePiedL,
    category: "coupes",
    tags: ["pied", "céramique", "450g"],
    reference: "Réf 026",
    fullDescription: "Élégante coupe à pied de taille L en céramique blanche avec base dorée. Garnie d'un assortiment raffiné de 450g de chocolats fins. Son design est sublimé par une décoration en foil rouge et un ornement précieux au centre. Idéale pour un cadeau sophistiqué et raffiné.",
    ingredients: "Chocolats fins variés, papiers d'emballage métalliques rouge, ornement décoratif",
    weight: "450g",
    allergens: "Contient du lait et peut contenir des traces de noix",
    rating: 4.8,
    reviews: 42
  },
  {
    id: 30,
    name: "Coupe à pied M",
    description: "Somptueuse coupe à pied de taille M en céramique blanche avec base dorée. Offre une sélection généreuse de 900g de nos chocolats d'exception. Son allure luxueuse avec ses ornements scintillants en fait une pièce maîtresse.",
    price: "1100 Dhs",
    image: coupePiedM,
    category: "coupes",
    tags: ["pied", "céramique", "900g"],
    reference: "Réf 027",
    fullDescription: "Somptueuse coupe à pied de taille M en céramique blanche avec base dorée. Offre une sélection généreuse de 900g de nos chocolats d'exception. Son allure luxueuse avec ses ornements scintillants en fait une pièce maîtresse pour toute occasion spéciale. Une présentation qui impressionnera vos invités.",
    ingredients: "Chocolats fins variés, papiers d'emballage métalliques rouge, ornement décoratif précieux",
    weight: "900g",
    allergens: "Contient du lait et peut contenir des traces de noix",
    rating: 4.9,
    reviews: 58
  },
  {
    id: 31,
    name: "Coupe Prestige Gold M",
    description: "Coupe prestige dorée de taille moyenne. Assortiment généreux de 900g de chocolats variés incluant des pralines, des chocolats enrobés de foil vert émeraude et doré, ainsi que des chocolats blancs. Ornée d'un ornement précieux.",
    price: "1300 Dhs",
    image: coupePrestigeGoldM,
    category: "coupes",
    tags: ["prestige", "gold", "900g"],
    reference: "Réf 028",
    fullDescription: "Coupe prestige dorée de taille moyenne. Assortiment généreux de 900g de chocolats variés incluant des pralines, des chocolats enrobés de foil vert émeraude et doré, ainsi que des chocolats blancs. Ornée d'un ornement précieux en forme de bijou. Une création luxueuse qui allie élégance et gourmandise.",
    ingredients: "Pralines, chocolats enrobés de foil vert émeraude et doré, chocolats blancs, ornement décoratif",
    weight: "900g",
    allergens: "Contient du lait et peut contenir des traces de noix",
    rating: 4.9,
    reviews: 63
  },
  {
    id: 32,
    name: "Coupe Royale Gold L",
    description: "Coupe royale dorée de grande taille. Assortiment exceptionnel de 1.1kg de chocolats premium incluant des pralines, des chocolats enrobés de foil vert émeraude et doré, ainsi que des chocolats blancs. Le summum du luxe.",
    price: "1500 Dhs",
    image: coupeRoyaleGoldL,
    category: "coupes",
    tags: ["royale", "gold", "1.1kg"],
    reference: "Réf 029",
    fullDescription: "Coupe royale dorée de grande taille. Assortiment exceptionnel de 1.1kg de chocolats premium incluant des pralines, des chocolats enrobés de foil vert émeraude et doré, ainsi que des chocolats blancs. Ornée d'un ornement précieux en forme de bijou. Le summum du luxe et de l'élégance pour les occasions les plus prestigieuses.",
    ingredients: "Pralines premium, chocolats enrobés de foil vert émeraude et doré, chocolats blancs, ornement décoratif précieux",
    weight: "1.1kg",
    allergens: "Contient du lait et peut contenir des traces de noix",
    rating: 5.0,
    reviews: 76
  },
  {
    id: 33,
    name: "Coupe Fedda M",
    description: "Coupe Fedda argentée de taille moyenne avec poignées dorées et base dorée ornée. Assortiment raffiné de 650g de chocolats incluant des bonbons enrobés de foil doré avec embellissements, des pralines et des chocolats blancs.",
    price: "1650 Dhs",
    image: coupeFeddaM,
    category: "coupes",
    tags: ["fedda", "argentée", "650g"],
    reference: "Réf 033",
    fullDescription: "Coupe Fedda argentée de taille moyenne avec poignées dorées et base dorée ornée. Assortiment raffiné de 650g de chocolats incluant des bonbons enrobés de foil doré avec embellissements scintillants, des pralines et des chocolats blancs avec nappage au centre. Design luxueux et élégant qui allie modernité et tradition.",
    ingredients: "Bonbons enrobés de foil doré avec embellissements, pralines, chocolats blancs avec nappage",
    weight: "650g",
    allergens: "Contient du lait et peut contenir des traces de noix",
    rating: 4.8,
    reviews: 49
  },
  {
    id: 34,
    name: "Coupe Fedda L",
    description: "Grande coupe Fedda argentée avec accents dorés et base dorée ornée. Assortiment exceptionnel de 1.1kg de chocolats premium incluant des bonbons enrobés de foil doré avec embellissements, des pralines et des chocolats blancs.",
    price: "1950 Dhs",
    image: coupeFeddaL,
    category: "coupes",
    tags: ["fedda", "argentée", "1.1kg"],
    reference: "Réf 034",
    fullDescription: "Grande coupe Fedda argentée avec accents dorés et base dorée ornée. Assortiment exceptionnel de 1.1kg de chocolats premium incluant des bonbons enrobés de foil doré avec embellissements scintillants, des pralines et des chocolats blancs avec nappage. Design luxueux et élégant qui allie modernité et tradition. Le cadeau parfait pour les grandes occasions.",
    ingredients: "Bonbons enrobés de foil doré avec embellissements, pralines premium, chocolats blancs avec nappage",
    weight: "1.1kg",
    allergens: "Contient du lait et peut contenir des traces de noix",
    rating: 5.0,
    reviews: 68
  },
  // Coffrets
  {
    id: 20,
    name: "Volupté - 450 Grs",
    description: "plateau en cuir bicolore (petit)",
    price: "700.00 Dhs",
    image: coffretSmall,
    category: "coffrets",
    tags: ["plateau", "cuir", "petit"],
    fullDescription: "Notre coffret Volupté de 450g est parfait pour offrir ou se faire plaisir. Plateau en cuir bicolore de qualité supérieure, rempli d'une sélection raffinée de nos meilleurs chocolats artisanaux. Un cadeau élégant et gourmand.",
    ingredients: "Assortiment de chocolats au lait, noir et blanc, ganaches variées",
    weight: "450g",
    allergens: "Contient du lait, peut contenir des traces de noix",
    rating: 4.9,
    reviews: 156
  },
  {
    id: 21,
    name: "Volupté - 1kg",
    description: "plateau en cuir bicolore (moyen)",
    price: "1500.00 Dhs",
    image: coffretMedium,
    category: "coffrets",
    tags: ["plateau", "cuir", "moyen"],
    fullDescription: "Le coffret Volupté 1kg offre une expérience chocolatée généreuse. Plateau en cuir bicolore artisanal rempli d'un assortiment premium de chocolats fins. Idéal pour les grandes occasions et les moments de partage.",
    ingredients: "Assortiment varié de chocolats fins, pralinés, ganaches, caramels",
    weight: "1kg",
    allergens: "Contient du lait et des noix, peut contenir des traces de gluten",
    rating: 5.0,
    reviews: 89
  },
  {
    id: 22,
    name: "Volupté - 2kg",
    description: "plateau en cuir bicolore (grand)",
    price: "2600.00 Dhs",
    image: coffretLarge,
    category: "coffrets",
    tags: ["plateau", "cuir", "grand"],
    fullDescription: "Notre plus grand coffret Volupté de 2kg est une véritable célébration du chocolat. Magnifique plateau en cuir bicolore haut de gamme, garni d'une collection exceptionnelle de nos créations les plus raffinées. Le cadeau ultime pour les vrais amateurs.",
    ingredients: "Collection complète de chocolats premium, pralinés nobles, ganaches d'exception",
    weight: "2kg",
    allergens: "Contient du lait, des noix et du gluten",
    rating: 5.0,
    reviews: 67
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [quantity, setQuantity] = useState(1);
  const [isPersonalized, setIsPersonalized] = useState(false);
  const [personalizationText, setPersonalizationText] = useState("");
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderForm, setOrderForm] = useState({
    fullName: "",
    phone: "",
    address: "",
    message: ""
  });

  const product = allProducts.find(p => p.id === parseInt(id || "0"));

  // Ouvrir automatiquement le formulaire de commande si order=true dans l'URL
  useEffect(() => {
    const orderParam = searchParams.get('order');
    if (orderParam === 'true') {
      setShowOrderForm(true);
    }
  }, [searchParams]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-chocolate mb-4">Produit non trouvé</h1>
          <Button onClick={() => navigate('/products')}>
            Retour aux produits
          </Button>
        </div>
      </div>
    );
  }

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Rediriger vers la page de confirmation avec les données
    navigate('/order-confirmation', {
      state: {
        product,
        quantity,
        isPersonalized,
        personalizationText,
        orderForm
      }
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? 'fill-accent text-accent' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header avec navigation */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-secondary/20 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/products')}
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
          {/* Image du produit */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
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

          {/* Informations du produit */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-serif font-bold text-chocolate mb-4">
                {product.name}
              </h1>
              {(product as any).reference && (
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-orange-100 text-orange-800 px-3 py-1">
                    {(product as any).reference}
                  </Badge>
                  {(product as any).weight && (
                    <span className="text-sm text-muted-foreground">
                      {(product as any).weight}
                    </span>
                  )}
                </div>
              )}
              <p className="text-xl text-muted-foreground mb-6">
                {product.description}
              </p>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} avis)
                </span>
              </div>

              <div className="text-3xl font-bold text-copper mb-6">
                {product.price}
              </div>
            </div>

            {/* Description complète */}
            <Card className="bg-secondary/5">
              <CardContent className="p-6">
                <h3 className="font-semibold text-chocolate mb-3">Description</h3>
                <p className="text-muted-foreground mb-4">{product.fullDescription}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-chocolate">Poids:</span>
                    <span className="ml-2 text-muted-foreground">{product.weight}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-chocolate">Ingrédients:</span>
                    <span className="ml-2 text-muted-foreground">{product.ingredients}</span>
                  </div>
                </div>
                
                {product.allergens && (
                  <div className="mt-4">
                    <span className="font-semibold text-chocolate">Allergènes:</span>
                    <span className="ml-2 text-muted-foreground">{product.allergens}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Options de personnalisation */}
            <Card className="bg-secondary/5">
              <CardContent className="p-6">
                <h3 className="font-semibold text-chocolate mb-4">Options</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="quantity" className="font-semibold">Quantité</Label>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </Button>
                      <span className="w-12 text-center">{quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setQuantity(quantity + 1)}
                      >
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
                        placeholder="Entrez votre message personnalisé..."
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

            {/* Boutons d'action */}
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

        {/* Section des suggestions de produits similaires */}
        <div className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-chocolate mb-8 text-center">
            Vous aimerez aussi
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {allProducts
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((suggestedProduct) => (
                <Card
                  key={suggestedProduct.id}
                  className="group overflow-hidden border-none shadow-soft hover:shadow-elegant transition-all duration-300 cursor-pointer"
                  onClick={() => navigate(`/product/${suggestedProduct.id}`)}
                >
                  <div className="relative overflow-hidden aspect-square bg-secondary/10">
                    <img
                      src={suggestedProduct.image}
                      alt={suggestedProduct.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-3 sm:p-4">
                    <h3 className="text-sm sm:text-base font-serif font-semibold text-chocolate mb-1 sm:mb-2 line-clamp-1">
                      {suggestedProduct.name}
                    </h3>
                    <p 
                      className="text-xs sm:text-sm text-muted-foreground mb-2 overflow-hidden"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {suggestedProduct.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-base font-bold text-copper">
                        {suggestedProduct.price}
                      </span>
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
          
          {/* Si pas assez de produits dans la même catégorie, afficher d'autres produits */}
          {allProducts.filter(p => p.category === product.category && p.id !== product.id).length === 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {allProducts
                .filter(p => p.id !== product.id)
                .slice(0, 4)
                .map((suggestedProduct) => (
                  <Card
                    key={suggestedProduct.id}
                    className="group overflow-hidden border-none shadow-soft hover:shadow-elegant transition-all duration-300 cursor-pointer"
                    onClick={() => navigate(`/product/${suggestedProduct.id}`)}
                  >
                    <div className="relative overflow-hidden aspect-square bg-secondary/10">
                      <img
                        src={suggestedProduct.image}
                        alt={suggestedProduct.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-3 sm:p-4">
                      <h3 className="text-sm sm:text-base font-serif font-semibold text-chocolate mb-1 sm:mb-2 line-clamp-1">
                        {suggestedProduct.name}
                      </h3>
                      <p 
                        className="text-xs sm:text-sm text-muted-foreground mb-2 overflow-hidden"
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {suggestedProduct.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm sm:text-base font-bold text-copper">
                          {suggestedProduct.price}
                        </span>
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

      {/* Modal de commande */}
      {showOrderForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md bg-white">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-chocolate mb-6">Finaliser votre commande</h2>
              
              <form onSubmit={handleOrderSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="fullName" className="font-semibold">Nom complet *</Label>
                  <Input
                    id="fullName"
                    value={orderForm.fullName}
                    onChange={(e) => setOrderForm({...orderForm, fullName: e.target.value})}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="font-semibold">Téléphone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={orderForm.phone}
                    onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="font-semibold">Adresse complète *</Label>
                  <Textarea
                    id="address"
                    value={orderForm.address}
                    onChange={(e) => setOrderForm({...orderForm, address: e.target.value})}
                    required
                    className="mt-1"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="font-semibold">Message (optionnel)</Label>
                  <Textarea
                    id="message"
                    value={orderForm.message}
                    onChange={(e) => setOrderForm({...orderForm, message: e.target.value})}
                    className="mt-1"
                    rows={2}
                    placeholder="Instructions spéciales..."
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowOrderForm(false)}
                    className="flex-1"
                  >
                    Annuler
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-chocolate hover:bg-chocolate/90 text-white"
                  >
                    Confirmer la commande
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

