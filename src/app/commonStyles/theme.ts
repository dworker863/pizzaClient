import { ITheme } from './IStyles';

export const commonTheme: ITheme = {
  colors: {
    primary: '#50a684',
    secondary: '#e0f7f5',
    grey: 'rgba(156, 163, 175)',
    lightGrey: '#a69895',
    superLightGrey: '#bfb7b699',
    brown: '#70544f',
    lightBrown: '#a69895',
    red: '#C21313',
  },

  media: {
    extraLarge: '(min-width: 1280px)',
    large: '(min-width: 960px)',
    medium: '(min-width: 768px)',
    small: '(min-width: 576px)',
    extraSmall: '(max-width: 576px)',
  },
};
