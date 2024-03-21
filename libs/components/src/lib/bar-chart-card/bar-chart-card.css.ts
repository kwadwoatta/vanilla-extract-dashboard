import { vars } from '@/styles';
import { style } from '@vanilla-extract/css';

export const barChartCardContainer = style({
  backgroundColor: vars.colors.surface,
  maxHeight: 413,
  minWidth: 384,
  boxShadow: vars.shadows.tiny,
  borderRadius: 10,
  padding: '20px 24px',
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
});

export const label = style({
  fontWeight: 600,
});

export const labelSpan = style([
  label,
  {
    fontWeight: 600,
    color: vars.colors.onSurfaceVariant,
  },
]);

export const button = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
  border: vars.borders.border,
  borderRadius: 4,
  padding: '8px 12px',
});

export const stackedBarChartContainer = style({
  height: 229,
});
