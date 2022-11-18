import React from 'react'
import { Button } from '~@components/primitives/Button'

export default {
  title: 'Button',
  component: Button,
}

// Colors
export const Primary = () => (
  <Button text="Primary" color="primary" accessibilityLabel="hello" />
)
export const Secondary = () => (
  <Button accessibilityLabel="hello" text="Secondary" color="secondary" />
)
export const Tertiary = () => (
  <Button accessibilityLabel="hello" text="Tertiary" color="tertiary" />
)
export const Error = () => (
  <Button accessibilityLabel="hello" text="Error" color="error" />
)

// Disabled
export const Disabled = () => (
  <Button accessibilityLabel="hello" text="Disabled" disabled />
)
