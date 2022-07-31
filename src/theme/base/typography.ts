const typography = {
  fontSizes: {
    '2xs': '10px',
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '60px',
    '7xl': '72px',
    '8xl': '96px',
    '9xl': '128px',
  },
  fontWeights: {
    hairline: '100',
    thin: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
    extraBlack: '950',
  },
  letterSpacings: {
    xs: '-0.1px',
    sm: '-0.05px',
    md: '0px',
    lg: '0.05px',
    xl: '0.1px',
    '2xl': '0.2px',
  },
} as const

export type TTypography = typeof typography
export type TFontSizes = keyof typeof typography.fontSizes
export type TFontWeights = keyof typeof typography.fontWeights
export type TLetterSpacings = keyof typeof typography.letterSpacings

export const { fontSizes, fontWeights, letterSpacings } = typography
export default typography
