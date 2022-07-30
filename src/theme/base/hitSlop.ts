const hitSlop = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
} as const

export type HitSlopT = keyof typeof hitSlop
export default hitSlop
