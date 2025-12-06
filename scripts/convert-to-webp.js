import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { existsSync } from 'fs';

const ASSETS_DIR = './src/assets';
const SUPPORTED_FORMATS = ['.png', '.jpg', '.jpeg'];
const QUALITY = 85; // Qualité WebP (0-100)

async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: QUALITY })
      .toFile(outputPath);
    console.log(`✓ Converti: ${basename(inputPath)} → ${basename(outputPath)}`);
    return true;
  } catch (error) {
    console.error(`✗ Erreur lors de la conversion de ${inputPath}:`, error.message);
    return false;
  }
}

async function processDirectory(dir) {
  try {
    const files = await readdir(dir);
    let converted = 0;
    let skipped = 0;
    let errors = 0;

    for (const file of files) {
      const filePath = join(dir, file);
      const stats = await stat(filePath);

      if (stats.isDirectory()) {
        // Ignorer les dossiers pour l'instant
        continue;
      }

      const ext = extname(file).toLowerCase();
      
      if (!SUPPORTED_FORMATS.includes(ext)) {
        continue;
      }

      const webpPath = join(dir, `${basename(file, ext)}.webp`);

      // Vérifier si le fichier WebP existe déjà et est plus récent
      if (existsSync(webpPath)) {
        const webpStats = await stat(webpPath);
        if (webpStats.mtime > stats.mtime) {
          console.log(`⊘ Ignoré (déjà à jour): ${file}`);
          skipped++;
          continue;
        }
      }

      const success = await convertToWebP(filePath, webpPath);
      if (success) {
        converted++;
      } else {
        errors++;
      }
    }

    return { converted, skipped, errors };
  } catch (error) {
    console.error(`Erreur lors du traitement du dossier ${dir}:`, error.message);
    return { converted: 0, skipped: 0, errors: 1 };
  }
}

async function main() {
  console.log('🖼️  Conversion des images en WebP...\n');
  console.log(`📁 Dossier: ${ASSETS_DIR}`);
  console.log(`🎨 Qualité: ${QUALITY}%\n`);

  const startTime = Date.now();
  const result = await processDirectory(ASSETS_DIR);
  const duration = ((Date.now() - startTime) / 1000).toFixed(2);

  console.log('\n' + '='.repeat(50));
  console.log('📊 Résumé:');
  console.log(`   ✓ Converties: ${result.converted}`);
  console.log(`   ⊘ Ignorées: ${result.skipped}`);
  console.log(`   ✗ Erreurs: ${result.errors}`);
  console.log(`   ⏱️  Temps: ${duration}s`);
  console.log('='.repeat(50));
  console.log('\n✨ Conversion terminée!');
  console.log('💡 N\'oubliez pas de mettre à jour les imports dans vos fichiers pour utiliser les images .webp');
}

main().catch(console.error);

