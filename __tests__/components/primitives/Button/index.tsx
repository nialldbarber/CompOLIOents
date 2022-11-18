import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import { Text } from 'react-native'
import { Button } from '~@components/primitives/Button'

describe('<Button />', () => {
  const onPress = jest.fn()
  const accessibilityLabel = 'hello'
  const props = {
    text: 'button test',
    onPress,
    accessibilityLabel,
  }

  it('should match the snapshot', () => {
    const { toJSON } = render(<Button {...props} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should call the provided function when pressed', () => {
    const { getByText } = render(<Button {...props} />)
    const button = getByText(/bUttOn tEsT/i)
    fireEvent.press(button)
    expect(onPress).toHaveBeenCalled()
  })

  it('should render children instead of text if provided', () => {
    const { toJSON } = render(
      <Button accessibilityLabel={accessibilityLabel}>
        <Text>Push it to the limit</Text>
      </Button>
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
