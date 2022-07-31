import * as React from 'react'
import { Text as RnText } from '~@components/primitives/Text/styles'
import { Factory } from '~@core/factory'
import type { TFontWeights } from '~@theme/base/typography'
import buttonVariants from '~@theme/variants/button'
import sizeVariants, { type TSize } from '~@theme/variants/sizes'
import type { States } from '~@types/index'

type TextVariants = States

type TextProps = {
  text?: string
  size?: TSize
  variants?: TextVariants
  isTruncated?: boolean
  bold?: boolean
  fontWeight?: TFontWeights
  italic?: boolean
  underline?: boolean
  strikeThrough?: boolean
  children?: string
}

const Text = ({
  text,
  size = 'medium',
  variants = 'primary',
  isTruncated,
  bold,
  italic,
  underline,
  strikeThrough,
  children,
}: TextProps) => {
  const T = Factory(RnText)
  const { fontSize } = sizeVariants[size]
  const { color } = buttonVariants[variants]

  return (
    <T
      $variant={color}
      $fontSize={fontSize}
      $isTruncated={isTruncated}
      $bold={bold}
      $italic={italic}
      $underline={underline}
      $strikeThrough={strikeThrough}
    >
      {text ?? children}
    </T>
  )
}

export default Text
