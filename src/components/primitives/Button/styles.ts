import { CSSProp, css } from 'styled-components'
import styled from 'styled-components/native'
import { centerContent } from '~@theme/base/mixins'
import radius from '~@theme/base/radius'
import { TButtonVariants } from '~@theme/variants/button'
import type { Size } from '~@theme/variants/sizes'

type ContainerProps = {
  $variants?: TButtonVariants
  $disabled?: boolean
  $styles?: CSSProp
  $sizes?: Size
}

const disabledStyles = css`
  background-color: grey;
`

export const Container = styled.Pressable<ContainerProps>`
  border-radius: ${radius.sm};
  ${centerContent};
  ${({ $disabled }) => $disabled && disabledStyles};
  ${({ $styles }) => $styles && $styles};

  ${({ $sizes }) => $sizes && $sizes};
  ${({ $variants }) => $variants && $variants};
`
