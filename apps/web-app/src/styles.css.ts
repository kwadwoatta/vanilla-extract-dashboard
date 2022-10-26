import { fonts, vars } from '@prince-assessment/styles';
import { globalFontFace, globalStyle } from '@vanilla-extract/css';

/* You can add global styles to this file */
globalStyle('body', {
  backgroundColor: vars.colors.background,
});

Object.values(fonts).forEach(({ name, wghtRange, file, format }) => {
  globalFontFace(`"${name}"`, {
    fontDisplay: `optional`,
    fontStyle: `normal`,
    fontWeight: wghtRange,
    src: `url("${file}") format("${format}")`,
  });
});

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

globalStyle('body, p, strong, h1, h2, h3, h4, h5, h6', {
  fontFamily: 'Manrope',
  fontVariationSettings: `"wght" ${fonts.MANROPE.wghts[400]}`,
  color: vars.colors.onSurface,
  fontSize: 14,
});
