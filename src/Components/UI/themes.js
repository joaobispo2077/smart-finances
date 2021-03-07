import {
  backgroundLight, contentLight, textInLight,
  backgroundDark, contentDark, textDark
} from './colors';

export const theme = {
  dark: {
    background: backgroundDark,
    container: contentDark,
    text: textDark,
    filter: "invert(100)"
  },
  light: {
    background: backgroundLight,
    container: contentLight,
    text: textInLight,
    filter: ""
  }
}
