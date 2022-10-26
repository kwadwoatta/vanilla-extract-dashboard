import { style } from '@vanilla-extract/css';

export const headerGridColumn = style({
  gridColumn: 'span 3',
  gridColumnStart: 2,
  gridColumnEnd: 5,
  backgroundColor: 'red',
  height: 64,
  width: '100%',
  // marginLeft: -28,
});

export const menuBarGridColumn = style({
  gridRowStart: 1,
  gridRowEnd: 4,
  width: '100%',
  height: '100%',
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 28,
  maxWidth: 'calc(100vw - 248px)',
  overflow: 'scroll',
  padding: 28,
});

export const span2 = style({
  gridColumn: 'span 2',
});

export const fullPageRow = style({
  display: 'flex',
  width: '100vw',
  height: '100vh',
});

export const hundredByHundredPercentColumn = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
});

export const flexibleColumn = style({
  display: 'flex',
  flexDirection: 'column',
  maxHeight: 'calc(100vh - 64px)',
});
