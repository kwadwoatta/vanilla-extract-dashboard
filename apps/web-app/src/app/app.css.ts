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
  gridTemplateColumns: '248px repeat(3, 1fr)',
  // rowGap: 28,
  // columnGap: 28,
  height: '100%',
});

export const lineChartGrid = style({
  gridColumn: 'span 2',
  maxHeight: 413,
  marginLeft: 14,
  marginRight: 28,
});
