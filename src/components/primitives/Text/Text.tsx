import * as React from 'react'
import { Text as RnText } from '~@components/primitives/Text/styles'
import { Factory } from '~@core/factory'
import type { FontWeightsT } from '~@theme/base/typography'
import buttonVariants from '~@theme/variants/button'
import sizeVariants, { type Size } from '~@theme/variants/sizes'
import type { States } from '~@types/index'

type TextVariants = States

type TextProps = {
  text?: string
  size?: Size
  variants?: TextVariants
  isTruncated?: boolean
  bold?: boolean
  fontWeight?: FontWeightsT
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
