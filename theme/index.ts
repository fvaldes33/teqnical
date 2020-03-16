import { colors } from './colors';
import { breakpoints, media } from './breakpoints';

export const theme = {
  breakpoints,
  media,
  colors: {
    ...colors,
  },
  siteMaxWidth: '1440px',
  fonts: {
    heading: "'Source Code Pro', monospace",
    body: "'Source Code Pro', monospace",
  },
  space: [0, 4, 8, 12, 16, 24, 32, 40, 48, 56, 64, 72, 80, 96, 112, 128, 144],
  buttons: {
    primary: {
      color: colors.dark,
      background: colors.primary,
      '&:before': {
        background: colors.dark
      },
      '&:after': {
        background: colors.black
      }
    },
    secondary: {
      color: colors.primary,
      background: colors.dark,
    },
  }
};

export type IDefaultTheme = typeof theme;
