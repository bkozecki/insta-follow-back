import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

await sharp(join(root, 'public/og-image.svg'), { density: 144 })
  .resize(1200, 630)
  .png()
  .toFile(join(root, 'public/og-image.png'))

console.log('✓ public/og-image.png generated (1200×630)')
