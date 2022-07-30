import { Text as RnText } from 'react-native'
import styled from 'styled-components/native'
import type { Size } from '~@theme/variants/sizes'

type Modes = 'dark' | 'light'

type TextProps = {
  $variant?: Modes
  $fontSize?: Size
}

export const Text = styled(RnText)<TextProps>`
  color: ${({ $variant }) => $variant && $variant};
  font-size: ${({ $fontSize }) => $fontSize && $fontSize};
`
