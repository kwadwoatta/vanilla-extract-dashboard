import { style } from '@vanilla-extract/css';

export const headerGridColumn = style({
  gridColumn: 'span 3',
  gridColumnStart: 2,
  gridColumnEnd: 5,
  backgroundColor: 'red',
  height: 64,
  width: '100vw - 248px',
  marginLeft: -28,
});

export const menuBarGridColumn = style({
  // backgroundColor: 'green',
  gridRowStart: 1,
  gridRowEnd: 4,
  width: '100%',
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: '248px repeat(3, 1fr)',
  rowGap: 28,
  columnGap: 28,
});
