// Catalogue produit centralise pour eviter les divergences entre cartes et details.
import product1 from "@/assets/Artboard 5.webp";
import product2 from "@/assets/Artboard 6.webp";
import product3 from "@/assets/Artboard 7.webp";
import coupeEleganceS from "@/assets/Artboard 7.webp";
import coupeEleganceM from "@/assets/Artboard 8.webp";
import coupeEleganceL from "@/assets/Artboard 9.webp";
import coupeEmeraudeS from "@/assets/Artboard 10.webp";
import coupeEmeraudeM from "@/assets/Artboard 11.webp";
import coupePrestige from "@/assets/Artboard 17.webp";
import coupePrestigeL from "@/assets/Artboard 18.webp";
import coupeTresorM from "@/assets/Artboard 5.webp";
import coupeTresorL from "@/assets/Artboard 4.webp";
import coupeAudaceS from "@/assets/coupe 4.webp";
import coupeAudaceM from "@/assets/coupe 5.webp";
import coupePrestigeImg from "@/assets/Artboard 1.webp";
import coupePrestigeLImg from "@/assets/Artboard 2.webp";
import coupeAudaceL from "@/assets/coupe 6.webp";
import boiteSmall from "@/assets/Artboard 1@2x.png";
import boiteMedium from "@/assets/Artboard 2@2x.png";
import boiteLarge from "@/assets/Artboard 3@2x.png";
import oumnia from "@/assets/Artboard 3.webp";
import oumniaL from "@/assets/Artboard 6.webp";
import coupeOvalS from "@/assets/Artboard 18.webp";
import coupeOvalM from "@/assets/Artboard 17.webp";
import serviteur from "@/assets/Artboard 16.webp";
import kunafaPistache from "@/assets/kunafa.webp";
import kinafaSghira from "@/assets/Morrocan édition/kinafa sghira.webp";
import coupePiedL from "@/assets/Artboard 12.webp";
import coupePiedM from "@/assets/Artboard 13.webp";
import coupePrestigeGoldM from "@/assets/Artboard 19.webp";
import coupeRoyaleGoldL from "@/assets/Artboard 20.webp";
import coupeFeddaM from "@/assets/Artboard 14.webp";
import coupeFeddaL from "@/assets/Artboard 15.webp";
import coupeRayeeS from "@/assets/coupe.webp";
import coupeRayeeM from "@/assets/coupe 2.webp";
import coupeRayeeL from "@/assets/coupe 3.webp";
import coffretSmall from "@/assets/Artboard 16.webp";
import coffretMedium from "@/assets/Artboard 17.webp";
import coffretLarge from "@/assets/Artboard 18.webp";
import chamaSmall1 from "@/assets/Morrocan édition/Collection Chama/small.webp";
import chamaSmall2 from "@/assets/Morrocan édition/Collection Chama/small 2.webp";
import chamaBig1 from "@/assets/Morrocan édition/Collection Chama/big.webp";
import chamaBig2 from "@/assets/Morrocan édition/Collection Chama/big 2.webp";
import izzaSmall1 from "@/assets/Morrocan édition/Collection IZZA/smal.webp";
import izzaSmall2 from "@/assets/Morrocan édition/Collection IZZA/smal 2.webp";
import izzaBig1 from "@/assets/Morrocan édition/Collection IZZA/big.webp";
import izzaBig2 from "@/assets/Morrocan édition/Collection IZZA/big 2.webp";
import lammaSmall1 from "@/assets/Morrocan édition/Collection Lamat/small.webp";
import lammaSmall2 from "@/assets/Morrocan édition/Collection Lamat/small 2.webp";
import lammaBig1 from "@/assets/Morrocan édition/Collection Lamat/big .webp";
import lammaBig2 from "@/assets/Morrocan édition/Collection Lamat/big 2.webp";

export type ProductCatalogItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  tags: string[];
  reference?: string;
  weight?: string;
  fullDescription?: string;
  ingredients?: string;
  allergens?: string;
  rating?: number;
  reviews?: number;
};

export const productCategories = [
  { id: "all", name: "Tous les produits" },
  { id: "boites", name: "Nos boites" },
  { id: "coupes", name: "Nos coupes" },
  { id: "coffrets", name: "Nos coffrets" },
  { id: "tablettes", name: "Tablettes" },
  { id: "special", name: "Moroccan edition" },
] as const;

export const productsCatalog: ProductCatalogItem[] = [
  // Chocolats
  {
    id: 1,
    name: "Collection Classique",
    description: "Assortiment de chocolats fins aux saveurs traditionnelles",
    price: "À partir de 250 Dhs",
    image: product1,
    category: "chocolats",
    tags: ["traditionnel", "assortiment"],
  },
  {
    id: 2,
    name: "Chocolat Noir Premium",
    description: "Chocolat noir pur à 70% de cacao",
    price: "180 Dhs",
    image: product2,
    category: "chocolats",
    tags: ["noir", "premium"],
  },
  {
    id: 3,
    name: "Chocolat au Lait",
    description: "Chocolat au lait crémeux et doux",
    price: "160 Dhs",
    image: product3,
    category: "chocolats",
    tags: ["lait", "crémeux"],
  },
  {
    id: 4,
    name: "Chocolat Blanc Vanille",
    description: "Chocolat blanc à la vanille de Madagascar",
    price: "170 Dhs",
    image: product1,
    category: "chocolats",
    tags: ["blanc", "vanille"],
  },
  {
    id: 5,
    name: "Chocolat Noir Épicé",
    description: "Chocolat noir aux épices orientales",
    price: "190 Dhs",
    image: product2,
    category: "chocolats",
    tags: ["noir", "épicé"],
  },

  // Tablettes
  {
    id: 6,
    name: "Tablette Kunafa Pistache",
    description: "Tablette artisanale kunafa à la pistache d'exception",
    price: "150 Dhs",
    image: kunafaPistache,
    category: "tablettes",
    tags: ["kunafa", "pistache", "artisanale"],
  },
  {
    id: 7,
    name: "Mini Tablette Kunafa Pistache",
    description: "Petite tablette kunafa artisanale",
    price: "80 Dhs",
    image: kinafaSghira,
    category: "tablettes",
    tags: ["kunafa", "petite", "artisanale"],
  },

  // Coupes
  {
    id: 15,
    name: "Coupe Élégance S",
    description: "Coupe élégante en porcelaine blanche avec base dorée. Assortiment de 150g de chocolats fins emballés dans des papiers dorés, verts et bruns.",
    price: "200 Dhs",
    image: coupeEleganceS,
    category: "coupes",
    tags: ["élégance", "porcelaine", "150g"],
    reference: "Réf 035",
    weight: "150g",
  },
  {
    id: 151,
    name: "Coupe Élégance M",
    description: "Coupe élégante moyenne en porcelaine blanche avec base dorée. Assortiment généreux de 350g de chocolats fins emballés dans des papiers dorés, verts et bruns, arrangés en cercles concentriques.",
    price: "350 Dhs",
    image: coupeEleganceM,
    category: "coupes",
    tags: ["élégance", "porcelaine", "350g"],
    reference: "Réf 036",
    weight: "350g",
  },
  {
    id: 152,
    name: "Coupe Élégance L",
    description: "Grande coupe élégante en porcelaine blanche avec base dorée. Assortiment exceptionnel de 650g de chocolats fins emballés dans des papiers dorés, verts et bruns, créant une présentation luxueuse et raffinée.",
    price: "750 Dhs",
    image: coupeEleganceL,
    category: "coupes",
    tags: ["élégance", "porcelaine", "650g"],
    reference: "Réf 037",
    weight: "650g",
  },
  {
    id: 18,
    name: "Coupe Émeraude S",
    description: "Coupe émeraude élégante avec base dorée sphérique et bol vert émeraude. Assortiment de 350g de chocolats carrés emballés dans des papiers métalliques dorés et vert émeraude, avec chocolats non emballés au centre.",
    price: "350 Dhs",
    image: coupeEmeraudeS,
    category: "coupes",
    tags: ["émeraude", "dorée", "350g"],
    reference: "Réf 038",
    weight: "350g",
  },
  {
    id: 16,
    name: "Coupe Émeraude M",
    description: "Coupe émeraude moyenne avec base dorée sphérique et bol vert émeraude. Assortiment généreux de 650g de chocolats carrés emballés dans des papiers métalliques dorés et vert émeraude, avec pralines blanches au centre.",
    price: "750 Dhs",
    image: coupeEmeraudeM,
    category: "coupes",
    tags: ["émeraude", "dorée", "650g"],
    reference: "Réf 039",
    weight: "650g",
  },
  {
    id: 17,
    name: "Coupe Oval S",
    description: "Coupe ovale petite en porcelaine blanche. Assortiment de 600g de chocolats emballés dans des papiers métalliques dorés, cuivrés et argentés, avec pralines au centre.",
    price: "650 Dhs",
    image: coupeOvalS,
    category: "coupes",
    tags: ["ovale", "porcelaine", "600g"],
    reference: "Réf 023",
    weight: "600g",
  },
  {
    id: 19,
    name: "Coupe Oval M",
    description: "Coupe ovale moyenne en porcelaine blanche. Assortiment généreux de 900g de chocolats emballés dans des papiers métalliques dorés, cuivrés et argentés, avec pralines texturées et noisettes au centre.",
    price: "950 Dhs",
    image: coupeOvalM,
    category: "coupes",
    tags: ["ovale", "porcelaine", "900g"],
    reference: "Réf 024",
    weight: "900g",
  },
  {
    id: 20,
    name: "Coupe Tresor M",
    description: "Coupe trésor ovale avec finition grise matte et pieds dorés sphériques. Assortiment de 800g de chocolats variés : chocolats carrés emballés en bleu royal et blanc sur le bord, barres de chocolat blanc rectangulaires, truffes brunes texturées, pralines blanches et chocolats carrés en foil doré.",
    price: "1100 Dhs",
    image: coupeTresorM,
    category: "coupes",
    tags: ["trésor", "ovale", "800g"],
    reference: "Réf 042",
    weight: "800g",
  },
  {
    id: 21,
    name: "Coupe Tresor L",
    description: "Grande coupe trésor ovale avec finition grise matte et pieds dorés sphériques. Assortiment exceptionnel de 1400g de chocolats variés : double rangée de chocolats carrés emballés en bleu royal et blanc sur le bord, truffes brunes texturées, pralines blanches, chocolats carrés en foil doré et barres de chocolat blanc rectangulaires.",
    price: "1650 Dhs",
    image: coupeTresorL,
    category: "coupes",
    tags: ["trésor", "ovale", "1400g"],
    reference: "Réf 043",
    weight: "1400g",
  },
  {
    id: 22,
    name: "Coupe Audace S",
    description: "Coupe audace circulaire sur support argenté cannelé. Assortiment de 850g de chocolats arrangés en cercles concentriques : couche extérieure de chocolats emballés en foil rouge et crème/blanc alternés, couches intérieures de chocolats bruns foncés et clairs non emballés, avec un cluster central de petites pralines claires.",
    price: "1200 Dhs",
    image: coupeAudaceS,
    category: "coupes",
    tags: ["audace", "rouge", "850g"],
    reference: "Réf 044",
    weight: "850g",
  },
  {
    id: 23,
    name: "Coupe Audace M",
    description: "Coupe audace circulaire moyenne sur support argenté cannelé. Assortiment généreux de 1500g de chocolats arrangés en cercles concentriques : couche extérieure de chocolats emballés en foil rouge et crème/blanc alternés, couches intérieures densément remplies de chocolats bruns foncés et clairs non emballés, avec un cluster central proéminent de petites pralines claires.",
    price: "1800 Dhs",
    image: coupeAudaceM,
    category: "coupes",
    tags: ["audace", "rouge", "1500g"],
    reference: "Réf 045",
    weight: "1500g",
  },
  {
    id: 24,
    name: "Coupe Audace L",
    description: "Grande coupe audace circulaire sur support argenté cannelé. Assortiment exceptionnel de 2300g de chocolats arrangés en cercles concentriques : couche extérieure de chocolats emballés en foil rouge et or/crème alternés, couches intérieures densément remplies d'une grande variété de chocolats bruns foncés et clairs non emballés avec textures variées, et un cluster central de petites pralines ou truffes claires.",
    price: "2600 Dhs",
    image: coupeAudaceL,
    category: "coupes",
    tags: ["audace", "rouge", "2300g"],
    reference: "Réf 046",
    weight: "2300g",
  },
  {
    id: 25,
    name: "Oumnia",
    description: "Coffret cadeau élégant rectangulaire en velours crème avec intérieur doré et couvercle orné d'un panneau rectangulaire doré aux motifs complexes. Compartiment principal rempli de chocolats carrés emballés en foil métallique vert vif et argent/gris clair alternés, arrangés en rangées. Compartiment secondaire contenant un livre orné (Quran) avec détails dorés et marque-page à pompon blanc.",
    price: "550 Dhs",
    image: oumnia,
    category: "coffrets",
    tags: ["oumnia", "coffret", "300g"],
    reference: "Réf 047",
    weight: "300g",
  },
  {
    id: 26,
    name: "Oumnia L",
    description: "Grand coffret cadeau élégant rectangulaire en velours crème avec intérieur doré et couvercle orné d'un panneau rectangulaire doré aux motifs complexes. Compartiment principal rempli d'une quantité importante de chocolats carrés emballés en foil métallique vert vif et argent/gris clair alternés, arrangés en rangées étendues. Compartiment secondaire contenant un livre orné (Quran) avec détails dorés et marque-page à pompon blanc.",
    price: "950 Dhs",
    image: oumniaL,
    category: "coffrets",
    tags: ["oumnia", "coffret", "700g"],
    reference: "Réf 048",
    weight: "700g",
  },
  {
    id: 29,
    name: "Serviteur",
    description: "Serviteur à deux étages circulaires en porcelaine blanche avec bordures dorées. Assortiment exceptionnel de 1.1kg de chocolats emballés dans des papiers métalliques dorés, cuivrés et argentés, arrangés en cercles concentriques avec élément décoratif central.",
    price: "1200 Dhs",
    image: serviteur,
    category: "coupes",
    tags: ["serviteur", "deux étages", "1.1kg"],
    reference: "Réf 025",
    weight: "1.1kg",
  },
  {
    id: 30,
    name: "Coupe à pied M",
    description: "Élégante coupe à pied moyenne en céramique blanche avec base dorée. Garnie d'un assortiment raffiné de 450g de chocolats fins. Son design est sublimé par une décoration en foil rouge bordeaux et un ornement doré précieux au centre.",
    price: "550 Dhs",
    image: coupePiedM,
    category: "coupes",
    tags: ["pied", "céramique", "450g"],
    reference: "Réf 026",
    weight: "450g",
  },
  {
    id: 31,
    name: "Coupe à pied L",
    description: "Somptueuse grande coupe à pied en céramique blanche avec base dorée. Offre une sélection généreuse de 900g de nos chocolats d'exception avec chocolats rectangulaires en foil doré et chocolats variés au centre. Son allure luxueuse avec ses ornements scintillants en fait une pièce maîtresse.",
    price: "1100 Dhs",
    image: coupePiedL,
    category: "coupes",
    tags: ["pied", "céramique", "900g"],
    reference: "Réf 026",
    weight: "900g",
  },
  {
    id: 32,
    name: "Coupe Prestige Gold M",
    description: "Coupe prestige dorée de taille moyenne. Assortiment généreux de 900g de chocolats variés incluant des pralines, des chocolats enrobés de foil vert émeraude et doré, ainsi que des chocolats blancs. Ornée d'un ornement précieux.",
    price: "1300 Dhs",
    image: coupePrestigeGoldM,
    category: "coupes",
    tags: ["prestige", "gold", "900g"],
    reference: "Réf 028",
    weight: "900g",
  },
  {
    id: 153,
    name: "Coupe Prestige",
    description: "Coupe prestige dorée texturée avec bol doré. Assortiment de 500g de chocolats carrés emballés dans des papiers métalliques dorés et orange, avec pralines et truffes au centre.",
    price: "650 Dhs",
    image: coupePrestigeImg,
    category: "coupes",
    tags: ["prestige", "dorée", "500g"],
    reference: "Réf 040",
    weight: "500g",
  },
  {
    id: 154,
    name: "Coupe Prestige L",
    description: "Grande coupe prestige dorée texturée avec bol doré. Assortiment généreux de 900g de chocolats carrés emballés dans des papiers métalliques dorés et orange, avec pralines, truffes et chocolats variés au centre.",
    price: "950 Dhs",
    image: coupePrestigeLImg,
    category: "coupes",
    tags: ["prestige", "dorée", "900g"],
    reference: "Réf 041",
    weight: "900g",
  },
  {
    id: 35,
    name: "Coupe Royale Gold L",
    description: "Coupe royale dorée de grande taille. Assortiment exceptionnel de 1.1kg de chocolats premium incluant des pralines, des chocolats enrobés de foil vert émeraude et doré, ainsi que des chocolats blancs. Le summum du luxe.",
    price: "1500 Dhs",
    image: coupeRoyaleGoldL,
    category: "coupes",
    tags: ["royale", "gold", "1.1kg"],
    reference: "Réf 029",
    weight: "1.1kg",
  },
  {
    id: 36,
    name: "Coupe Fedda M",
    description: "Coupe Fedda argentée de taille moyenne avec poignées dorées et base dorée ornée. Assortiment raffiné de 650g de chocolats incluant des bonbons enrobés de foil doré avec embellissements, des pralines et des chocolats blancs.",
    price: "1650 Dhs",
    image: coupeFeddaM,
    category: "coupes",
    tags: ["fedda", "argentée", "650g"],
    reference: "Réf 033",
    weight: "650g",
  },
  {
    id: 37,
    name: "Coupe Fedda L",
    description: "Grande coupe Fedda argentée avec accents dorés et base dorée ornée. Assortiment exceptionnel de 1.1kg de chocolats premium incluant des bonbons enrobés de foil doré avec embellissements, des pralines et des chocolats blancs.",
    price: "1950 Dhs",
    image: coupeFeddaL,
    category: "coupes",
    tags: ["fedda", "argentée", "1.1kg"],
    reference: "Réf 034",
    weight: "1.1kg",
  },

  // Coffrets

          // Boîtes
          {
            id: 40,
            name: "Boîte Small",
            description: "Boîte élégante pour vos chocolats",
            price: "160 Dhs",
            image: boiteSmall,
            category: "boites",
            tags: ["small", "élégante"],
            reference: "Réf 001",
            weight: "250g",
          },
          {
            id: 41,
            name: "Boîte Medium",
            description: "Boîte cadeau raffinée",
    price: "320 Dhs",
            image: boiteMedium,
            category: "boites",
            tags: ["medium", "raffinée"],
            reference: "Réf 002",
            weight: "500g",
          },
          {
            id: 42,
            name: "Boîte Large",
            description: "Grande boîte cadeau raffinée",
            price: "480 Dhs",
            image: boiteLarge,
            category: "boites",
            tags: ["large", "raffinée"],
            reference: "Réf 003",
            weight: "750g",
          },

          // Moroccan Edition - Collection Chama
          {
            id: 100,
            name: "Chama Small - Couleur 1",
            description: "Collection Chama - Petite taille, première couleur",
            price: "350 Dhs",
            image: chamaSmall1,
            category: "special",
            tags: ["moroccan", "chama", "small", "couleur 1"],
            reference: "Réf MC-001",
            weight: "300g",
          },
          {
            id: 101,
            name: "Chama Small - Couleur 2",
            description: "Collection Chama - Petite taille, deuxième couleur",
            price: "350 Dhs",
            image: chamaSmall2,
            category: "special",
            tags: ["moroccan", "chama", "small", "couleur 2"],
            reference: "Réf MC-002",
            weight: "300g",
          },
          {
            id: 102,
            name: "Chama Big - Couleur 1",
            description: "Collection Chama - Grande taille, première couleur",
            price: "550 Dhs",
            image: chamaBig1,
            category: "special",
            tags: ["moroccan", "chama", "big", "couleur 1"],
            reference: "Réf MC-003",
            weight: "500g",
          },
          {
            id: 103,
            name: "Chama Big - Couleur 2",
            description: "Collection Chama - Grande taille, deuxième couleur",
            price: "550 Dhs",
            image: chamaBig2,
            category: "special",
            tags: ["moroccan", "chama", "big", "couleur 2"],
            reference: "Réf MC-004",
            weight: "500g",
          },

          // Moroccan Edition - Collection IZZA
          {
            id: 104,
            name: "IZZA Small - Couleur 1",
            description: "Collection IZZA - Petite taille, première couleur",
            price: "350 Dhs",
            image: izzaSmall1,
            category: "special",
            tags: ["moroccan", "izza", "small", "couleur 1"],
            reference: "Réf MC-005",
            weight: "300g",
          },
          {
            id: 105,
            name: "IZZA Small - Couleur 2",
            description: "Collection IZZA - Petite taille, deuxième couleur",
            price: "350 Dhs",
            image: izzaSmall2,
            category: "special",
            tags: ["moroccan", "izza", "small", "couleur 2"],
            reference: "Réf MC-006",
            weight: "300g",
          },
          {
            id: 106,
            name: "IZZA Big - Couleur 1",
            description: "Collection IZZA - Grande taille, première couleur",
            price: "550 Dhs",
            image: izzaBig1,
            category: "special",
            tags: ["moroccan", "izza", "big", "couleur 1"],
            reference: "Réf MC-007",
            weight: "500g",
          },
          {
            id: 107,
            name: "IZZA Big - Couleur 2",
            description: "Collection IZZA - Grande taille, deuxième couleur",
            price: "550 Dhs",
            image: izzaBig2,
            category: "special",
            tags: ["moroccan", "izza", "big", "couleur 2"],
            reference: "Réf MC-008",
            weight: "500g",
          },

          // Moroccan Edition - Collection Lammat
          {
            id: 108,
            name: "Lammat Small - Couleur 1",
            description: "Collection Lammat - Petite taille, première couleur",
            price: "350 Dhs",
            image: lammaSmall1,
            category: "special",
            tags: ["moroccan", "lammat", "small", "couleur 1"],
            reference: "Réf MC-009",
            weight: "300g",
          },
          {
            id: 109,
            name: "Lammat Small - Couleur 2",
            description: "Collection Lammat - Petite taille, deuxième couleur",
            price: "350 Dhs",
            image: lammaSmall2,
            category: "special",
            tags: ["moroccan", "lammat", "small", "couleur 2"],
            reference: "Réf MC-010",
            weight: "300g",
          },
          {
            id: 110,
            name: "Lammat Big - Couleur 1",
            description: "Collection Lammat - Grande taille, première couleur",
            price: "550 Dhs",
            image: lammaBig1,
            category: "special",
            tags: ["moroccan", "lammat", "big", "couleur 1"],
            reference: "Réf MC-011",
            weight: "500g",
          },
          {
            id: 111,
            name: "Lammat Big - Couleur 2",
            description: "Collection Lammat - Grande taille, deuxième couleur",
            price: "550 Dhs",
            image: lammaBig2,
            category: "special",
            tags: ["moroccan", "lammat", "big", "couleur 2"],
            reference: "Réf MC-012",
            weight: "500g",
          },

];
