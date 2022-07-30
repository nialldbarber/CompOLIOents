import * as React from 'react'
import { Button } from '~@components/primitives/Button'

export default {
  title: 'Button',
  component: Button,
}

// Colors
export const Primary = (args: any) => <Button text="Primary" color="primary" />
export const Secondary = (args: any) => (
  <Button text="Secondary" color="secondary" />
)
export const Tertiary = (args: any) => (
  <Button text="Tertiary" color="tertiary" />
)
export const Error = (args: any) => <Button text="Error" color="error" />

// Disabled
export const Disabled = (args: any) => <Button text="Disabled" disabled />
