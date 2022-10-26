import { fontStyles, vars } from '@prince-assessment/styles';
import { style } from '@vanilla-extract/css';

export const recentsCard = style({
  backgroundColor: vars.colors.surface,
  maxHeight: 413,
  // minWidth: 384,
  boxShadow: vars.shadows.tiny,
  borderRadius: 10,
  padding: '20px 24px',
  // marginLeft: 28,
  // marginRight: 14,
});

export const heading = style([
  fontStyles.MANROPE_XLARGE,
  {
    fontWeight: 600,
    marginBottom: 32,
  },
]);

export const flexColumn = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: 5,
});

export const descriptionStyle = style([
  fontStyles.MANROPE_MED,
  {
    color: vars.colors.onSurfaceVariant,
    width: 225,
    fontWeight: 600,
  },
]);

export const timeStyle = style([
  fontStyles.MANROPE_SMALL,
  { fontWeight: 500, color: vars.colors.onSurfaceVariant },
]);

export const row1 = style({
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'start',
});

export const row2 = style({
  display: 'flex',
  justifyContent: 'space-between',
  flexGrow: 1,
});

export const dashedLine = style({
  width: 1,
  border: '2px dashed #EEF2F4',
  flexGrow: 1,
});

export const column = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
  gap: 4,
  width: 24,
  height: 82.25,
  marginRight: 16,
  paddingBottom: 14,
  marginTop: -5,
});
