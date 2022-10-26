import { vars } from '@prince-assessment/styles';
import { style } from '@vanilla-extract/css';

export const menuBarContainer = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: vars.colors.surface,
  width: '100%',
  maxHeight: '100%',
  minHeight: '100vh',
  paddingLeft: 12,
  paddingRight: 12,
  paddingTop: 12,
  justifyContent: 'space-between',
});
