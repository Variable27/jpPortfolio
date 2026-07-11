import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync } from 'node:fs';

const svg = readFileSync(new URL('./og-image.svg', import.meta.url), 'utf8');

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
  background: '#0a0e17',
  font: {
    fontFiles: [
      'C:/Windows/Fonts/arial.ttf',
      'C:/Windows/Fonts/arialbd.ttf',
      'C:/Windows/Fonts/consola.ttf',
      'C:/Windows/Fonts/consolab.ttf',
    ],
    loadSystemFonts: false,
    defaultFontFamily: 'Arial',
  },
});

const png = resvg.render().asPng();
writeFileSync(new URL('./og-image.png', import.meta.url), png);
console.log('Wrote og-image.png (' + png.length + ' bytes)');
