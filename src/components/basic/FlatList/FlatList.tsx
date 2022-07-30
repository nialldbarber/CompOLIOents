import * as React from 'react'
import {
  FlatList as RnFlatList,
  FlatListProps as RnFlatListProps,
} from 'react-native'
import { FlashList } from '@shopify/flash-list'
import { Factory } from '~@core/factory'

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
  renderItem: Element | Element[]
  keyExtractor: (item: any) => any
  flashlist?: boolean
  estimatedItemSize?: number
  refs?: any
}) => {
  const FL = Factory(RnFlatList)
  const SFL = Factory(FlashList)

  const internals = {
    data: data,
    renderItem: renderItem,
    keyExtractor: keyExtractor,
    ref: refs,
    ...rest,
  }

  return flashlist ? <SFL {...internals} /> : <FL {...internals} />
}

export default FlatList
