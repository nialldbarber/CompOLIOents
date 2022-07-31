import * as React from 'react'
import { FlatList as RnFlatList } from 'react-native'
import { FlashList } from '@shopify/flash-list'

type TBase = {
  data: Record<string, any>[]
  renderItem: (
    ...args: any[]
  ) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null
  keyExtractor?:
    | ((item: Record<string, any>, index: number) => string)
    | undefined
  refs?: any
}

type TFlatListProps =
  | { flashlist?: true; estimatedItemSize: number }
  | { flashlist?: false; estimatedItemSize?: never }

type TProps = TBase & TFlatListProps

/**
 * ## FlatList
 * If you use the `flashlist` prop,
 * _make sure_ to add `estimatedItemSize`!
 */
const FlatList = ({
  data,
  renderItem,
  keyExtractor,
  flashlist = false,
  estimatedItemSize,
  refs,
  ...rest
}: TProps) => {
  const internals = {
    data,
    renderItem,
    keyExtractor,
    ref: refs,
    ...rest,
  }

  return flashlist ? (
    <FlashList {...internals} estimatedItemSize={estimatedItemSize} />
  ) : (
    <RnFlatList {...internals} />
  )
}

export default FlatList
