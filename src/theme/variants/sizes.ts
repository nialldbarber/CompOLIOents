import spacing from '~@theme/base/spacing'
import { fontSizes } from '~@theme/base/typography'

export type TSize = 'small' | 'medium' | 'large' | 'x-large'

const sizeVariants: Record<
  TSize,
  {
    paddingHorizontal: string
    paddingVertical: string
    fontSize: string
    height?: string
  }
> = {
  small: {
    fontSize: fontSizes.sm,
    paddingHorizontal: spacing[1],
    paddingVertical: spacing[1],
  },
  medium: {
    fontSize: fontSizes.md,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[3],
  },
  large: {
    fontSize: fontSizes.lg,
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[5],
  },
  'x-large': {
    fontSize: fontSizes.lg,
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[5],
  },
}

export default sizeVariants
