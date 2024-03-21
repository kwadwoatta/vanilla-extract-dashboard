import { vars } from '@/styles';
import { style } from '@vanilla-extract/css';

export const elevatedButton = style({
  width: 24,
  height: 24,
  backgroundColor: vars.colors.surface,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: vars.shadows.tiny,
  borderRadius: 4,
  color: vars.colors.onSurfaceVariant,
});

export const searchInput = style({
  height: 40,
  width: '100%',
  display: 'flex',
  padding: 12,
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: vars.colors.inputField,
  borderRadius: 4,
});
