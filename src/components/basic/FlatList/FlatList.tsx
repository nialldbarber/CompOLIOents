import * as React from 'react'
import {
  FlatList as RnFlatList,
  FlatListProps as RnFlatListProps,
} from 'react-native'
import { FlashList } from '@shopify/flash-list'

const FlatList = <TItem extends RnFlatListProps<TItem>>({
  data,
  renderItem,
  keyExtractor,
  flashlist = false,
  estimatedItemSize,
  refs,
  ...rest
}: {
  data: Record<any, any>[]
  renderItem: any
  keyExtractor: (item: any) => any
  flashlist?: boolean
  estimatedItemSize?: number
  refs?: any
}) => {
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
