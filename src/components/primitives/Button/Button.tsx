import * as React from 'react'
import { PressableProps } from 'react-native'
import type { CSSProp } from 'styled-components'
import { Container } from '~@components/primitives/Button/styles'
import { Text } from '~@components/primitives/Text'
import { Factory } from '~@core/factory'
import buttonVariants, { type ButtonVariants } from '~@theme/variants/button'
import sizeVariants, { type Size } from '~@theme/variants/sizes'

/**
 * TODOS:
 * Find a way to add hitSlop back in
 * - currently pressable props don't recognise
 *   hitSlop as a prop
 */

interface ButtonProps extends PressableProps {
  text?: string
  size?: Size
  accessible?: boolean
  accessibilityLabel?: string
  disabled?: boolean
  color?: ButtonVariants
  children?: JSX.Element | Array<JSX.Element>
  styles?: CSSProp
  refs?: any
}

const Button = ({
  text,
  size = 'medium',
  accessible = true,
  accessibilityLabel,
  disabled,
  color = 'primary',
  children,
  styles,
  refs,
  ...rest
}: ButtonProps) => {
  const FactoryButton = Factory(Container)
  const variants = buttonVariants[color]
  const sizes = sizeVariants[size]

  return (
    <FactoryButton
      ref={refs}
      accessible={accessible}
      accessibilityLabel={accessibilityLabel ?? text}
      disabled={disabled}
      $variants={variants}
      $sizes={sizes}
      $styles={styles}
      $disabled={disabled}
      {...rest}
    >
      {text ? (
        <Text size={size} variants={color}>
          {text}
        </Text>
      ) : (
        children
      )}
    </FactoryButton>
  )
}

export default Button
