import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  colors: {
    primary: '#398AFA',
    highlight: '#F3F8FF',
    onError: '#FBEEEF',
    onSuccess: '#59A160',
    success: '#EEFFE5',
    error: '#F15656',
    iconHighlight: '#8EB0DF',
    onSurface: '#575F6A',
    onSurfaceVariant: '#848C96',
    surface: '#FFFFFF',
    surfaceIcon: '#ABB3B9',
    inputField: '#F5F7F8',
    ABB3B9: '#ABB3B9',
    FF85BF: '#FF85BF',
    border: '#EEF2F4',
    CDC5FF: '#CDC5FF',
    onSuccessVariant: '#12CF5D',
    background: '#FAFAFA',
    onHighlight: '#5978A1',
  },
  shadows: {
    tiny: '0px 1px 2px rgba(0, 0, 0, 0.1)',
    minute: '0px 1px 2px rgba(0, 0, 0, 0.04)',
  },
  borders: {
    border: '1px solid #EEF2F4',
  },
});
