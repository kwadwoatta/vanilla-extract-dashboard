import { fontStyles, vars } from '@prince-assessment/styles';
import { style } from '@vanilla-extract/css';

export const button = style({
  width: 184,
  height: 40,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: vars.colors.surface,
  boxShadow: vars.shadows.tiny,
  borderRadius: 4,
  border: `1px solid ${vars.colors.border}`,
  gap: 4,
});

export const from = style([
  fontStyles.MANROPE_MED,
  { color: vars.colors.onSurfaceVariant, fontWeight: 600 },
]);

export const cashOnHand = style([
  fontStyles.MANROPE_MED,
  {
    color: vars.colors.onSurface,
    fontWeight: 700,
    marginRight: 8,
  },
]);

export const lineContainer = style({
  position: 'relative',
  height: 'calc(100% - 130px)',
});
