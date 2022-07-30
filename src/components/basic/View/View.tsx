import * as React from 'react'
import { View as RnView, ViewProps as RnViewProps } from 'react-native'
import { Factory } from '~@core/factory'

interface ViewProps extends RnViewProps {
  children?: JSX.Element | Array<JSX.Element>
  refs?: any
}

const View = ({ children, refs, ...rest }: ViewProps) => {
  const V = Factory(RnView)

  return (
    <V ref={refs} {...rest}>
      {children}
    </V>
  )
}

export default View
