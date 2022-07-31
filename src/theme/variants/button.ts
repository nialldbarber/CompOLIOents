import { States } from '~@types/index'

export type TButtonVariants = States

const buttonVariants: Record<
  TButtonVariants,
  {
    color: string
    backgroundColor: string
    border?: string
  }
> = {
  primary: {
    color: '#111',
    backgroundColor: 'dodgerblue',
    border: '1px solid dodgerblue',
  },
  secondary: {
    color: '#FFF',
    backgroundColor: 'teal',
    border: '1px solid teal',
  },
  tertiary: {
    color: '#FFF',
    backgroundColor: 'teal',
    border: '1px solid teal',
  },
  error: {
    color: '#FFF',
    backgroundColor: 'red',
    border: '1px solid red',
  },
}

export default buttonVariants
