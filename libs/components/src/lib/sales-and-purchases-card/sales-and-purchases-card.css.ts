import { fontStyles, vars } from '@prince-assessment/styles';
import { style } from '@vanilla-extract/css';

export const salesAndPurchasesCard = style({
  backgroundColor: vars.colors.surface,
  maxHeight: 413,
  boxShadow: vars.shadows.tiny,
  borderRadius: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 23,
  padding: '20px 28px',
});

export const doughnutChartContainer = style({
  position: 'relative',
  width: 240,
  height: 240,
  padding: '5.5px 0px',
});

export const header = style([
  fontStyles.MANROPE_MED,
  {
    alignSelf: 'self-start',
    fontWeight: 600,
    color: vars.colors.onSurface,
  },
]);

export const headerSpan = style([
  header,
  {
    fontWeight: 600,
    color: vars.colors.onSurfaceVariant,
    display: 'inline-block',
  },
]);
