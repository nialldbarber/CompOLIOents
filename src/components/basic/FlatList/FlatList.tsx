import * as React from 'react'
import {
  FlatList as RnFlatList,
  FlatListProps as RnFlatListProps,
} from 'react-native'
import { Factory } from '~@core/factory'

const FlatList = <TItem extends RnFlatListProps<TItem>>({
  data,
  renderItem,
  refs,
  ...rest
}: {
  data: TItem[]
  renderItem: JSX.Element | Array<JSX.Element>
  refs?: any
}) => {
  const FL = Factory(RnFlatList)

  return (
    <FL
      data={data}
      renderItem={renderItem}
      keyExtractor={(item: any) => item.id}
      ref={refs}
      {...rest}
    />
  )
}

export default FlatList
