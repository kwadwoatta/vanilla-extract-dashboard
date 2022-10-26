import { fontStyles, vars } from '@prince-assessment/styles';
import { style } from '@vanilla-extract/css';

export const menuBarContainer = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: vars.colors.surface,
  width: 248,
  height: '100vh',
  paddingLeft: 12,
  paddingRight: 12,
  paddingTop: 12,
  justifyContent: 'space-between',
});

export const row1 = style({
  display: 'flex',
  width: '100%',
  gap: 10,
  justifyContent: 'start',
  alignItems: 'center',
});

export const row2 = style({
  height: 32,
  display: 'flex',
  gap: 9.6,
  paddingLeft: 9.6,
  justifyContent: 'start',
  alignItems: 'center',
  marginBottom: 12,
});

export const paragraph = style([
  fontStyles.MANROPE_MED,
  {
    fontWeight: 500,
    color: vars.colors.onSurface,
    lineHeight: '20px',
  },
]);
