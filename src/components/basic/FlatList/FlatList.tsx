import * as React from 'react'
import {
  FlatList as RnFlatList,
  FlatListProps as RnFlatListProps,
} from 'react-native'
import { Factory } from '~@core/factory'

const FlatList = <TItem extends RnFlatListProps<TItem>>({
  data,
  renderItem,
  keyExtractor,
  refs,
  ...rest
}: {
  data: Record<any, any>[]
  renderItem: Element | Element[]
  keyExtractor: (item: any) => any
  refs?: any
}) => {
  const FL = Factory(RnFlatList)

  return (
    <FL
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ref={refs}
      {...rest}
    />
  )
}

export default FlatList
