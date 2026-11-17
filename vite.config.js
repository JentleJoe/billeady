import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

/**
 * Link previews (WhatsApp, Facebook, X) don't run JavaScript, so they only see the
 * static HTML. This copies the built index.html to one file per landing page with
 * page-specific meta tags; vercel.json serves trcc.html at /TRCC and htrs.html at /HTRS.
 * The app itself is unchanged.
 */
const landingPages = [
  {
    file: 'trcc.html',
    title: 'The Remote Closers Club | Billeddy Saliu',
    description:
      'Discover how to master remote high ticket closing & appointment setting and land $1,000 to $3,000/month sales seats with US, UK & international companies, right from your phone or laptop.',
    url: 'https://billeddysaliu.com/TRCC',
  },
  {
    file: 'htrs.html',
    title: 'Remote High Ticket Sales Coaching | Billeddy Saliu',
    description:
      'Master the Diagnostic Closing Framework behind $2.1M+ in closed high ticket deals and secure placements on inbound, high converting 7 figure offers. Private coaching for aspiring high ticket closers and sales professionals.',
    url: 'https://billeddysaliu.com/HTRS',
  },
]

// Replacer functions (not '$1…$2' strings) so a '$' in the copy, e.g. "$1,000", is kept as text.
const setAttr = (html, pattern, value) => html.replace(pattern, (_, open, close) => `${open}${value}${close}`)

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
      const indexHtml = fs.readFileSync(indexPath, 'utf8')
      for (const { file, title, description, url } of landingPages) {
        let html = indexHtml.replace(/<title>[^<]*<\/title>/, () => `<title>${title}</title>`)
        html = setAttr(html, /(<meta\s+name="description"\s+content=")[^"]*(")/, description)
        html = setAttr(html, /(<meta\s+property="og:title"\s+content=")[^"]*(")/, title)
        html = setAttr(html, /(<meta\s+property="og:description"\s+content=")[^"]*(")/, description)
        html = setAttr(html, /(<meta\s+property="og:url"\s+content=")[^"]*(")/, url)
        html = setAttr(html, /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/, title)
        html = setAttr(html, /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, description)
        html = setAttr(html, /(<link\s+rel="canonical"\s+href=")[^"]*(")/, url)
        fs.writeFileSync(path.join(outDir, file), html)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()
  , tailwindcss(), trainingPageHtml()],
})
