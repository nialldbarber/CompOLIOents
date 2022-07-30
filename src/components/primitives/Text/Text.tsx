import * as React from 'react'
import { Text as RnText } from '~@components/primitives/Text/styles'
import buttonVariants from '~@theme/variants/button'
import sizeVariants, { Size } from '~@theme/variants/sizes'
import { States } from '~@types/index'

type TextVariants = States

type TextProps = {
  size?: Size
  variants?: TextVariants
  children?: string
}

const Text = ({
  variants = 'primary',
  size = 'medium',
  children,
}: TextProps) => {
  const { fontSize } = sizeVariants[size]
  const { color } = buttonVariants[variants]

  return (
    <RnText $variant={color} $fontSize={fontSize}>
      {children}
    </RnText>
  )
}

export default Text
