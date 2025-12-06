# Scripts d'Optimisation d'Images

Ce dossier contient des scripts pour optimiser les performances du site en convertissant les images en format WebP.

## 📦 Installation

Les dépendances nécessaires sont déjà installées :
- `sharp` : Bibliothèque de traitement d'images haute performance
- `glob` : Pour trouver les fichiers à traiter

## 🚀 Utilisation

### 1. Convertir toutes les images en WebP

```bash
npm run convert:webp
```

Ce script :
- Convertit toutes les images PNG, JPG, JPEG du dossier `src/assets/` en WebP
- Utilise une qualité de 85% (optimale pour le web)
- Ignore les fichiers déjà convertis et à jour
- Affiche un résumé des conversions

### 2. Mettre à jour automatiquement les imports

```bash
npm run update:imports
```

Ce script :
- Parcourt tous les fichiers `.ts` et `.tsx` du dossier `src/`
- Remplace automatiquement les imports d'images (`.png`, `.jpg`, `.jpeg`) par `.webp`
- Vérifie que le fichier WebP existe avant de faire le remplacement

### 3. Tout faire en une seule commande

```bash
npm run optimize:images
```

Cette commande exécute les deux scripts ci-dessus dans l'ordre.

## 📝 Exemple

**Avant :**
```typescript
import productImage from "@/assets/product.png";
```

**Après :**
```typescript
import productImage from "@/assets/product.webp";
```

## ⚙️ Configuration

Vous pouvez modifier la qualité WebP dans `scripts/convert-to-webp.js` :
```javascript
const QUALITY = 85; // Changez cette valeur (0-100)
```

## 📊 Avantages du WebP

- **Réduction de taille** : 25-35% plus petit que PNG/JPG
- **Chargement plus rapide** : Meilleure expérience utilisateur
- **Meilleur SEO** : Pages plus rapides = meilleur classement
- **Qualité préservée** : Visuellement identique à l'original

## ⚠️ Note

Les fichiers originaux (PNG, JPG) ne sont pas supprimés. Vous pouvez les garder comme sauvegarde ou les supprimer manuellement après vérification.

