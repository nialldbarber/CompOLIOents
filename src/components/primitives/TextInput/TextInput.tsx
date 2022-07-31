import * as React from 'react'
import {
  TextInput as RnTextInput,
  TextInputProps as RnTextInputProps,
} from 'react-native'

interface TextInputProps extends RnTextInputProps {}

const TextInput = ({}: TextInputProps) => {
  return <RnTextInput />
}

export default TextInput
