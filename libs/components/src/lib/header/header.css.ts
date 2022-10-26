import { fontStyles, vars } from '@prince-assessment/styles';
import { style } from '@vanilla-extract/css';

export const headerContainer = style({
  backgroundColor: vars.colors.surface,
  height: 64,
  maxWidth: 'calc(100vw - 248px)',
  padding: '0 28px',
  margin: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: vars.shadows.minute,
});

export const button = style({
  width: 128,
  height: 40,
  border: '1px solid #EEF2F4',
  backgroundColor: vars.colors.surface,
  boxShadow: vars.shadows.tiny,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
});

export const buttonP = style([
  fontStyles.MANROPE_MED,
  {
    fontWeight: 600,
    color: vars.colors.onSurface,
  },
]);
