import { vars } from '@prince-assessment/styles';
import { style } from '@vanilla-extract/css';

export const accountSelectorContainer = style({
  height: 40,
  width: 224,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const leftContainer = style({
  width: 184,
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  padding: 8,
});
export const accountDisplayContainer = style({
  width: 123,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const displayName = style({
  fontWeight: 700,
  color: vars.colors.onSurface,
});
