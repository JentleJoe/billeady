import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

/**
 * Link previews (WhatsApp, Facebook, X) don't run JavaScript, so they only see the
 * static HTML. This copies the built index.html to trcc.html with page-specific
 * meta tags; vercel.json serves it at /TRCC. The app itself is unchanged.
 */
const trainingMeta = {
  title: 'The Remote Closers Club | Billeddy Saliu',
  description:
    'Discover how to master remote high ticket closing & appointment setting and land $1,000 to $3,000/month sales seats with US, UK & international companies, right from your phone or laptop.',
  url: 'https://billeddysaliu.com/TRCC',
}

function trainingPageHtml() {
  let outDir = 'dist'
  return {
    name: 'training-page-html',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const indexPath = path.join(outDir, 'index.html')
      if (!fs.existsSync(indexPath)) return
      const { title, description, url } = trainingMeta
      const html = fs
        .readFileSync(indexPath, 'utf8')
        .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
        .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${description}$2`)
        .replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/, `$1${title}$2`)
        .replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${description}$2`)
        .replace(/(<meta\s+property="og:url"\s+content=")[^"]*(")/, `$1${url}$2`)
        .replace(/(<meta\s+name="twitter:title"\s+content=")[^"]*(")/, `$1${title}$2`)
        .replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, `$1${description}$2`)
        .replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${url}$2`)
      fs.writeFileSync(path.join(outDir, 'trcc.html'), html)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()
  , tailwindcss(), trainingPageHtml()],
})
