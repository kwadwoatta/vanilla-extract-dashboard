import { fontStyles, vars } from '@prince-assessment/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const tabsPrimitiveRoot = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
});

export const tabsPrimitiveList = style({
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'space-evenly',
  borderBottom: `1px solid ${vars.colors.border}`,
  paddingTop: 20,
  paddingLeft: 24,
  paddingRight: 24,
});

export const tabsPrimitiveTrigger = style({
  all: 'unset',
  backgroundColor: 'white',
  width: 154,
  height: 74,
  color: vars.colors.onSurfaceVariant,
  userSelect: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,

  selectors: {
    '&:first-child': {},
    '&:last-child': {},
    '&:hover': { color: vars.colors.highlight },
    '&[data-state="active"]': {
      color: vars.colors.primary,
      boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
    },
    '&[data-state="inactive"]': {
      color: vars.colors.onSurfaceVariant,
    },
    '&:focus': {
      position: 'relative',
      boxShadow: `0 0 0 2px ${vars.colors.primary}`,
    },
  },
});

export const tabsPrimitiveContent = style({
  outline: 'none',
});

export const moneyInOutTabCard = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: vars.colors.surface,
  boxShadow: vars.shadows.tiny,
  borderRadius: 10,
});

export const flex = style({ display: 'flex' });

export const text = style({
  marginBottom: 20,
  color: vars.colors.primary,
  fontSize: 15,
  lineHeight: 1.5,
});

export const button = style({
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
});

export const buttonVariants = styleVariants({
  violet: [
    button,
    {
      backgroundColor: 'white',
      color: vars.colors.primary,
      boxShadow: `0 2px 10px ${vars.colors.primary}`,
      '&:hover': { backgroundColor: vars.colors.primary },
      '&:focus': { boxShadow: `0 0 0 2px black` },
    },
  ],
  green: [
    button,
    {
      backgroundColor: vars.colors.highlight,
      color: vars.colors.primary,
      //   '&:hover': { backgroundColor: green.green5 },
      //   '&:focus': { boxShadow: `0 0 0 2px ${green.green7}` },
    },
  ],
});

export const fieldset = style({
  all: 'unset',
  marginBottom: 15,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
});

export const label = style({
  fontSize: 13,
  lineHeight: 1,
  marginBottom: 10,
  color: vars.colors.primary,
  display: 'block',
});

export const input = style({
  all: 'unset',
  flex: '1 0 auto',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: 15,
  lineHeight: 1,
  color: vars.colors.primary,
  boxShadow: `0 0 0 1px ${vars.colors.primary}`,
  height: 35,
  selectors: {
    '&:focus': { boxShadow: `0 0 0 2px ${vars.colors.primary}` },
  },
});

export const tabsTriggerLabelContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
});

export const tabsTriggerIcon = style({
  color: vars.colors.iconHighlight,

  selectors: {
    '[data-state="inactive"] &': {
      color: vars.colors.onSurfaceVariant,
    },
  },
});

export const tabsTriggerLabelText = style([
  fontStyles.MANROPE_MED,
  {
    selectors: {
      '[data-state="inactive"] &': {
        color: vars.colors.onSurfaceVariant,
      },
    },
  },
]);

export const tabsTriggerAmount = style([
  fontStyles.MANROPE_XLARGE,
  {
    color: vars.colors.onSurface,
    fontWeight: 600,

    selectors: {
      '[data-state="inactive"] &': {
        color: vars.colors.onSurfaceVariant,
      },
    },
  },
]);

export const tabsTriggerAmountSpan = style({
  color: vars.colors.onSurfaceVariant,
  fontWeight: 400,
});
