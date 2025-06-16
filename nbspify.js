// nbspify.js
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// „__dirname” w ES-module:
const __filename = fileURLToPath(import.meta.url)
const __dirname  = path.dirname(__filename)

const SHORT = [' i ', ' w ', ' na ', ' z ', ' lub ', 'a', 'my']
const filePath = path.join(__dirname, 'data', 'recipes.js')
let text = fs.readFileSync(filePath, 'utf8')

// zamiana " w " → " w\u00A0", " i " → " i\u00A0" itd.
for (const s of SHORT) {
    const word = s.trim()
    // build regexp: (\bword)\s
    const re = new RegExp(`\\b(${word})\\s`, 'g')
    text = text.replace(re, (_, m) => m + '\u00A0')
}

// przed jednostkami: g, kg, ml, cm, min
text = text.replace(/(\d)\s?(g|kg|ml|cm|min|my|a})\b/g, '$1\u00A0$2')

fs.writeFileSync(filePath, text, 'utf8')
console.log('✅ data/recipes.js zaktualizowane o niełamliwe spacje.')
