import * as React from 'react'

export type PlatformProps<T> = {
  _web?: Partial<T>
  _ios?: Partial<T>
  _android?: Partial<T>
  _light?: Partial<T>
  _dark?: Partial<T>
  _important?: Partial<T>
}

type FactoryComponentProps = any &
  PlatformProps<any> & {
    children?: string | JSX.Element | JSX.Element[]
  }

const Factory = <T,>(Component: React.ComponentType<T>) =>
  React.forwardRef(
    ({ children, ...props }: T & FactoryComponentProps, ref: any) => {
      return (
        <Component {...props} ref={ref}>
          {children}
        </Component>
      )
    }
  )

export default Factory
