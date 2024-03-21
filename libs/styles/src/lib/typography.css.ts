import { FontMetrics } from '@capsizecss/core';
import manropeFontMetrics from '@capsizecss/metrics/manrope';
import { createTextStyle } from '@capsizecss/vanilla-extract';
import { style } from '@vanilla-extract/css';

interface Meta {
  fallback: string;
  file: string;
  format: string;
  metrics: FontMetrics;
  name: string;
  wghtRange: string;
  wghts: {
    [key: string]: number;
  };
}

type FontFamilyId = 'MANROPE';

type Fonts = Record<FontFamilyId, Meta>;

const FONT_DIR = `/libs/styles/src/fonts`;

export const fonts: Fonts = {
  MANROPE: {
    fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
    file: `${FONT_DIR}/Manrope[wght].ttf`,
    format: `truetype-variations`,
    metrics: manropeFontMetrics as FontMetrics,
    name: `Manrope`,
    wghtRange: `200 800`,
    wghts: {
      '200': 200,
      '300': 300,
      '400': 400,
      '500': 500,
      '600': 600,
      '700': 700,
      '800': 800,
    },
  },
};

// https://type-scale.com
// Major Third
// base: 14
const typeScale = {
  s: 11.2,
  m: 14,
  l: 17.5,
  xl: 21.88,
  xxl: 27.34,
};

interface Props {
  id: FontFamilyId;
  leading: number;
  size: number;
}

function calcFontCss({ id, leading, size }: Props) {
  return style([
    createTextStyle({
      fontMetrics: fonts[id].metrics,
      fontSize: size,
      leading,
    }),
    {
      fontFamily: `"${fonts[id].name}", ${fonts[id].fallback}`,
      // color: vars.colors.onSurfaceVariant,
    },
  ]);
}

type StyleId =
  | 'MANROPE_SMALL'
  | 'MANROPE_MED'
  | 'MANROPE_LARGE'
  | 'MANROPE_XLARGE'
  | 'MANROPE_XXLARGE';

export const fontStyles: Record<StyleId, string> = {
  MANROPE_SMALL: calcFontCss({
    id: 'MANROPE',
    leading: 16.5,
    size: typeScale.s,
  }),
  MANROPE_MED: calcFontCss({
    id: 'MANROPE',
    leading: 20,
    size: typeScale.m,
  }),
  MANROPE_LARGE: calcFontCss({
    id: 'MANROPE',
    leading: 25,
    size: typeScale.l,
  }),
  MANROPE_XLARGE: calcFontCss({
    id: 'MANROPE',
    leading: 32,
    size: typeScale.xl,
  }),
  MANROPE_XXLARGE: calcFontCss({
    id: 'MANROPE',
    leading: 40,
    size: typeScale.xxl,
  }),
};
