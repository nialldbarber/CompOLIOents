import * as React from 'react'
import { FlatList } from '~@components/basic/FlatList'
import { Text } from '~@components/primitives/Text'

export default {
  title: 'FlatList',
  component: FlatList,
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
]

const Item = ({ title }) => <Text>{title}</Text>

export const NormalFlatList = (args: any) => (
  <>
    <FlatList data={DATA} renderItem={Item} keyExtractor={(item) => item.id} />
  </>
)

export const FlashList = (args: any) => (
  <>
    <FlatList
      data={DATA}
      renderItem={Item}
      keyExtractor={(item) => item.id}
      flashlist
      estimatedItemSize={3}
    />
  </>
)
