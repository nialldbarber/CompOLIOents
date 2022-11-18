import React from 'react'
import type { TouchableOpacityProps } from 'react-native'
import type { CSSProp } from 'styled-components'
import { Container } from '~@components/primitives/Button/styles'
import { Text } from '~@components/primitives/Text'
import { Factory } from '~@core/factory'
import hitSlop from '~@theme/base/hitSlop'
import type { THitSlop } from '~@theme/base/hitSlop'
import buttonVariants, { type TButtonVariants } from '~@theme/variants/button'
import sizeVariants, { type TSize } from '~@theme/variants/sizes'

/**
 * TODOS:
 * Find a way to add hitSlop back in
 * - currently pressable props don't recognise
 *   hitSlop as a prop
 */

interface TButtonProps extends TouchableOpacityProps {
  text?: string
  size?: TSize
  accessible?: boolean
  accessibilityLabel: string
  accessibilityHint?: string
  accessibilityLanguage?: string
  disabled?: boolean
  hitSlop?: THitSlop
  color?: TButtonVariants
  onPress?: (...args: any[]) => any
  children?: JSX.Element | Array<JSX.Element>
  styles?: CSSProp
  refs?: any
}

const Button = ({
  text,
  size = 'medium',
  accessible = true,
  accessibilityLabel,
  accessibilityHint,
  accessibilityLanguage,
  disabled,
  hitSlop = hitSlop,
  color = 'primary',
  onPress,
  children,
  styles,
  refs,
  ...rest
}: TButtonProps) => {
  const B = Factory(Container)
  const variants = buttonVariants[color]
  const sizes = sizeVariants[size]

  const buttonContent = text ? (
    <Text size={size} variants={color}>
      {text}
    </Text>
  ) : (
    children
  )

  return (
    <B
      ref={refs}
      accessible={accessible}
      accessibilityLabel={accessibilityLabel ?? text}
      accessibilityHint={accessibilityHint}
      accessibilityLanguage={accessibilityLanguage}
      disabled={disabled}
      onPress={onPress}
      $variants={variants}
      $sizes={sizes}
      $styles={styles}
      $disabled={disabled}
      {...rest}
    >
      {buttonContent}
    </B>
  )
}

export default Button
