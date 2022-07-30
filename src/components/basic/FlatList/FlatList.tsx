import * as React from 'react'
import { FlatList as RnFlatList } from 'react-native'
import { FlashList } from '@shopify/flash-list'

type Base = {
  data: Record<any, any>[]
  renderItem: any
  keyExtractor: (item: any) => any
  refs?: any
}

type FlatListProps =
  | { flashlist?: true; estimatedItemSize: number }
  | { flashlist?: false; estimatedItemSize?: never }

type Props = Base & FlatListProps

/**
 * ## FlatList
 * If you use the `flashlist` prop,
 * _*make sure*_ to add `estimatedItemSize`!
 */
const FlatList = ({
  data,
  renderItem,
  keyExtractor,
  flashlist = false,
  estimatedItemSize,
  refs,
  ...rest
}: Props) => {
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
