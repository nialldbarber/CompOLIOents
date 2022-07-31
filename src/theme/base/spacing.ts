import { Dimensions } from 'react-native'

const { width: w } = Dimensions.get('window')

const spacing = {
  px: '1px',
  '0': '0',
  '0.5': '2px',
  '1': '4px',
  '1.2': '5px',
  '1.5': '6px',
  '2': '8px',
  '2.5': '10px',
  '3': '12px',
  '3.5': '14px',
  '4': '16px',
  '5': '20px',
  '6': '24px',
  '7': '28px',
  '8': '32px',
  '9': '36px',
  '10': '40px',
  '12': '48px',
  '16': '64px',
  '20': '80px',
  '24': '96px',
  '32': '128px',
  '40': '160px',
  '48': '192px',
  '56': '224px',
  '64': '256px',
  '72': '288px',
  '80': '320px',
  '96': '384px',
  // Rough percentages
  '1/2': w / 2 + 'px',
  '1/3': w / 3 + 'px',
  '2/3': (w / 3) * 2 + 'px',
  '1/4': w / 4 + 'px',
  '3/4': (w / 4) * 3 + 'px',
  '1/5': w / 5 + 'px',
  '2/5': (w / 5) * 2 + 'px',
  '3/5': (w / 5) * 3 + 'px',
  '4/5': (w / 5) * 4 + 'px',
  '1/6': w / 6 + 'px',
  '5/6': (w / 6) * 5 + 'px',
  full: w + 'px',
} as const

export type TSpacing = keyof typeof spacing
export default spacing
