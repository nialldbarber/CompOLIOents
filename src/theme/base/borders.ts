const borderWidth = {
  '0': '0px',
  '1': '1px',
  '2': '2px',
  '4': '4px',
  '8': '8px',
} as const

export type borderWidthT = keyof typeof borderWidth
export default borderWidth
