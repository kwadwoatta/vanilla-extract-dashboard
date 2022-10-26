import { vars } from '@prince-assessment/styles';
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
