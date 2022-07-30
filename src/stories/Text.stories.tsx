import * as React from 'react'
import { Text } from '~@components/primitives/Text'

export default {
  title: 'Text',
  component: Text,
}

export const Primary = (args: any) => <Text text="Primary" />
export const Italic = (args: any) => <Text text="Italic" italic />
export const Bold = (args: any) => <Text text="Bold" bold />
export const Underline = (args: any) => <Text text="Underline" underline />
