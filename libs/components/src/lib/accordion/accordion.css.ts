// import { black '@prince-assessment/style';
import { vars } from '@prince-assessment/styles';
import { keyframes, style } from '@vanilla-extract/css';

export const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

export const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

export const accordionPrimitiveRootStyle = style({
  borderRadius: 6,
  width: 224,
  height: 248,
});

export const accordionPrimitiveItemStyle = style({
  overflow: 'hidden',
  marginBottom: 4,

  selectors: {
    '&:focus-within': {
      position: 'relative',
      zIndex: 1,
      boxShadow: `0 0 0 2px ${vars.colors.primary}`,
      borderRadius: 6,
    },
  },
});

export const accordionPrimitiveHeaderStyle = style({
  all: 'unset',
  display: 'flex',
});

export const accordionPrimitiveTriggerStyle = style({
  all: 'unset',
  fontFamily: 'inherit',
  backgroundColor: 'transparent',
  height: 32,
  paddingLeft: 10,
  paddingRight: 10,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: vars.colors.onSurface,
  fontWeight: 500,
  borderRadius: 6,

  selectors: {
    '&[data-state="closed"]': { backgroundColor: 'white' },
    '&[data-state="open"]': {
      backgroundColor: vars.colors.highlight,
      color: vars.colors.onHighlight,
    },
    '&:hover': { backgroundColor: vars.colors.highlight },
  },
});

export const accordionPrimitiveContentStyle = style({
  overflow: 'hidden',
  fontSize: 15,
  color: 'black',
  backgroundColor: vars.colors.highlight,
  selectors: {
    '&[data-state="open"]': {
      animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },
  },
});

export const ContentTextStyle = style({
  padding: '15px 20px',
});

export const chevronDownIconStyle = style({
  color: vars.colors.ABB3B9,
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  selectors: {
    '[data-state=open] &': {
      transform: 'rotate(180deg)',
      color: vars.colors.onHighlight,
    },
  },
});

export const menuItemIconStyle = style({
  color: vars.colors.ABB3B9,
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  selectors: {
    '[data-state=open] &': {
      color: vars.colors.onHighlight,
    },
  },
});
