import { Text as RnText } from 'react-native'
import styled from 'styled-components/native'
import type { TSize } from '~@theme/variants/sizes'

type Modes = 'dark' | 'light'

type TextProps = {
  $variant?: Modes
  $fontSize?: TSize
  $isTruncated?: boolean
  $bold?: boolean
  $italic?: boolean
  $underline?: boolean
  $strikeThrough?: boolean
}

export const Text = styled(RnText)<TextProps>`
  color: ${({ $variant }) => $variant && $variant};
  font-size: ${({ $fontSize }) => $fontSize && $fontSize};
  font-style: ${({ $italic }) => ($italic ? 'italic' : 'normal')};
  font-weight: ${({ $bold }) => ($bold ? 'bold' : 'normal')};
  text-decoration: ${({ $underline }) => ($underline ? 'underline' : 'none')};
`
