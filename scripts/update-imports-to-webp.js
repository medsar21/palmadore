import { readFile, writeFile, readdir, access } from 'fs/promises';
import { join, extname } from 'path';
import { glob } from 'glob';
import { constants } from 'fs';

const SRC_DIR = './src';
const ASSETS_DIR = './src/assets';

// Mapping des extensions
const EXTENSION_MAP = {
  '.png': '.webp',
  '.jpg': '.webp',
  '.jpeg': '.webp'
};

async function fileExists(filePath) {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function updateImportsInFile(filePath) {
  try {
    let content = await readFile(filePath, 'utf-8');
    let modified = false;

    // Remplacer les imports d'images
    for (const [oldExt, newExt] of Object.entries(EXTENSION_MAP)) {
      // Pattern pour capturer: import variable from "@/assets/filename.ext"
      const escapedExt = oldExt.replace('.', '\\.');
      const regex = new RegExp(`from ["']@/assets/([^"']+?)${escapedExt}["']`, 'g');
      
      const matches = [...content.matchAll(regex)];
      
      for (const match of matches) {
        const filename = match[1];
        const webpPath = join(ASSETS_DIR, `${filename}${newExt}`);
        
        if (await fileExists(webpPath)) {
          const oldImport = match[0];
          const newImport = `from "@/assets/${filename}${newExt}"`;
          content = content.replace(oldImport, newImport);
          modified = true;
        }
      }
    }

    if (modified) {
      await writeFile(filePath, content, 'utf-8');
      console.log(`✓ Mis à jour: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Erreur lors de la mise à jour de ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🔄 Mise à jour des imports vers WebP...\n');

  // Trouver tous les fichiers TypeScript/React
  const files = await glob('**/*.{ts,tsx}', {
    cwd: SRC_DIR,
    ignore: ['node_modules/**', 'dist/**', 'build/**', '**/*.d.ts']
  });

  let updated = 0;
  let skipped = 0;

  for (const file of files) {
    const filePath = join(SRC_DIR, file);
    const wasUpdated = await updateImportsInFile(filePath);
    if (wasUpdated) {
      updated++;
    } else {
      skipped++;
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log('📊 Résumé:');
  console.log(`   ✓ Fichiers mis à jour: ${updated}`);
  console.log(`   ⊘ Fichiers ignorés: ${skipped}`);
  console.log('='.repeat(50));
  console.log('\n✨ Mise à jour terminée!');
}

main().catch(console.error);

